"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface StackLayer {
  title: string;
  blurb: string;
  tag?: string;
}

interface LayeredStackProps {
  layers: readonly StackLayer[];
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

const CARD_H = 92;
const GAP_START = 36; // visible strip per card when collapsed (title row)
const GAP_END = 112; // full separation when expanded

/**
 * Scroll-driven layered stack (Legora aOS style).
 * Collapsed: a tidy isometric deck where each solid card occludes the one
 * behind it, leaving only its title row visible. As you scroll, the deck
 * tilts toward the viewer and the cards separate into a fully readable list.
 */
export default function LayeredStack({
  layers,
  className,
  eyebrow,
  title,
  description,
}: LayeredStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Deck -> flat list facing the viewer.
  const rotateX = useTransform(scrollYProgress, [0, 1], [40, 3]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1]);

  const header = (eyebrow || title || description) && (
    <div className="mx-auto max-w-xl px-6 text-center">
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-gradient mt-3 text-3xl font-bold tracking-tighter sm:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mx-auto mt-3 text-balance text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  );

  if (reduce) {
    return (
      <div className={cn("mx-auto max-w-[720px] px-6", className)}>
        {header && <div className="mb-10">{header}</div>}
        <div className="flex flex-col gap-3">
          {layers.map((layer, i) => (
            <div key={layer.title} className="relative">
              <StackCard layer={layer} index={i} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative h-[300vh]", className)}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden [perspective:1500px]">
        {header && (
          <div className="absolute inset-x-0 top-[10%] z-10">{header}</div>
        )}
        <motion.div
          style={{ rotateX, rotateZ, scale, transformStyle: "preserve-3d" }}
          className="relative mt-20 h-[420px] w-full max-w-[720px]"
        >
          {layers.map((layer, i) => (
            <Layer
              key={layer.title}
              layer={layer}
              index={i}
              total={layers.length}
              progress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Layer({
  layer,
  index,
  total,
  progress,
}: {
  layer: StackLayer;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const mid = (total - 1) / 2;
  const offset = index - mid;

  const y = useTransform(progress, [0, 1], [offset * GAP_START, offset * GAP_END]);
  const z = useTransform(progress, [0, 1], [index * 6, 0]);

  return (
    <motion.div
      style={{ y, z, zIndex: index + 1, transformStyle: "preserve-3d" }}
      className="absolute inset-x-0 top-1/2 mx-auto"
      // center the card on its own y origin
    >
      <div className="-mt-[46px]">
        <StackCard layer={layer} index={index} />
      </div>
    </motion.div>
  );
}

function StackCard({ layer, index }: { layer: StackLayer; index: number }) {
  return (
    <div
      className="relative mx-auto flex w-full items-start gap-3 overflow-hidden rounded-2xl border border-border bg-card px-5 pt-3.5 pb-4"
      style={{
        height: CARD_H,
        boxShadow:
          "0 26px 60px -30px color-mix(in oklch, var(--neon) 60%, transparent), inset 0 1px 0 0 color-mix(in oklch, var(--foreground) 8%, transparent)",
        backgroundImage:
          "linear-gradient(180deg, color-mix(in oklch, var(--neon) 6%, transparent), transparent 55%)",
      }}
    >
      {/* neon spine */}
      <span
        className="absolute inset-y-0 left-0 w-[3px]"
        style={{ background: "linear-gradient(var(--neon), var(--neon-2))" }}
      />
      {/* index */}
      <span className="mt-0.5 font-mono text-xs tabular-nums text-neon/80">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-semibold text-foreground sm:text-base">
          {layer.title}
        </span>
        <span className="mt-1 line-clamp-2 text-xs text-muted-foreground">
          {layer.blurb}
        </span>
      </div>
      {layer.tag && (
        <span className="mt-0.5 shrink-0 rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {layer.tag}
        </span>
      )}
      {/* bottom neon hairline */}
      <span
        className="absolute inset-x-5 bottom-0 h-px opacity-50"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--neon), transparent)",
        }}
      />
    </div>
  );
}
