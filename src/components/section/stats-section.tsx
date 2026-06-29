"use client";

import BlurFade from "@/components/magicui/blur-fade";
import NumberTicker from "@/components/magicui/number-ticker";
import { DATA } from "@/data/resume";

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-12">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 px-0 md:grid-cols-4">
        {DATA.stats.map((stat, i) => (
          <BlurFade key={stat.label} delay={0.05 * i} className="bg-background">
            <div className="group relative flex h-full flex-col items-center gap-2 px-4 py-8 text-center transition-colors hover:bg-card/60">
              <span className="text-gradient text-4xl font-bold tracking-tighter sm:text-5xl">
                <NumberTicker
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
