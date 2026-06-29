"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
  /** Show a moving glare highlight. */
  glare?: boolean;
  /** How far the content floats above the surface on hover (px). */
  depth?: number;
}

// Soft, weighty springs so the card glides instead of snapping.
const POINTER_SPRING = { stiffness: 110, damping: 20, mass: 0.7 };
const HOVER_SPRING = { stiffness: 140, damping: 26, mass: 0.6 };

export default function TiltCard({
  children,
  className,
  max = 7,
  glare = true,
  depth = 26,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Pointer position, normalised 0..1, centred at 0.5.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  // Hover presence 0..1 drives lift, glare opacity and depth.
  const hover = useMotionValue(0);

  const sx = useSpring(px, POINTER_SPRING);
  const sy = useSpring(py, POINTER_SPRING);
  const sh = useSpring(hover, HOVER_SPRING);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const scale = useTransform(sh, [0, 1], [1, 1.025]);
  const contentZ = useTransform(sh, [0, 1], [0, depth]);
  const translateZ = useMotionTemplate`${contentZ}px`;

  // Shadow falls opposite the tilt so the surface feels lit from the pointer.
  const shadowX = useTransform(sx, [0, 1], [24, -24]);
  const shadowY = useTransform(sy, [0, 1], [28, -8]);
  const shadowBlur = useTransform(sh, [0, 1], [30, 55]);
  const shadowAlpha = useTransform(sh, [0, 1], [0.25, 0.45]);
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px ${shadowBlur}px -18px rgba(0, 0, 0, ${shadowAlpha})`;

  // Bright spot that tracks the pointer across the surface.
  const glareX = useTransform(sx, [0, 1], ["12%", "88%"]);
  const glareY = useTransform(sy, [0, 1], ["12%", "88%"]);
  const glareOpacity = useTransform(sh, [0, 1], [0, 1]);
  const glareBg = useMotionTemplate`radial-gradient(60% 60% at ${glareX} ${glareY}, color-mix(in oklch, var(--neon) 34%, transparent), color-mix(in oklch, var(--neon) 8%, transparent) 38%, transparent 70%)`;

  // Thin directional sheen that sweeps with the tilt for a glassy edge.
  const sheenAngle = useTransform(sx, [0, 1], [115, 65]);
  const sheenBg = useMotionTemplate`linear-gradient(${sheenAngle}deg, transparent 30%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.05) 52%, transparent 70%)`;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseEnter={() => hover.set(1)}
      onMouseLeave={() => {
        hover.set(0);
        px.set(0.5);
        py.set(0.5);
      }}
      style={{
        rotateX,
        rotateY,
        scale,
        boxShadow,
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={cn("group relative", className)}
    >
      {/* Content floats above the surface for real parallax depth. */}
      <motion.div
        style={{ translateZ, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
      </motion.div>

      {glare && (
        <>
          <motion.div
            aria-hidden
            style={{ background: glareBg, opacity: glareOpacity }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-soft-light"
          />
          <motion.div
            aria-hidden
            style={{ background: sheenBg, opacity: glareOpacity }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-overlay"
          />
        </>
      )}
    </motion.div>
  );
}
