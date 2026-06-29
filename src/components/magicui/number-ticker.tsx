"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

function format(value: number, decimals: number, prefix: string, suffix: string) {
  const num = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${prefix}${num}${suffix}`;
}

export default function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduce) {
      el.textContent = format(value, decimals, prefix, suffix);
      return;
    }

    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        el.textContent = format(latest, decimals, prefix, suffix);
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals, prefix, suffix, duration, delay, reduce]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {format(reduce ? value : 0, decimals, prefix, suffix)}
    </span>
  );
}
