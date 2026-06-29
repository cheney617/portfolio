import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** HUD-style glass panel with numbered eyebrow, neon corner accents and faint grid. */
export function SectionShell({
  id,
  index,
  eyebrow,
  title,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "group/shell relative overflow-hidden rounded-3xl border border-border bg-card/30 p-6 backdrop-blur-sm sm:p-9",
        className
      )}
    >
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-sm opacity-[0.12]" />
      {/* neon corner accents */}
      <span className="pointer-events-none absolute left-0 top-0 size-10 rounded-tl-3xl border-l-2 border-t-2 border-neon/50" />
      <span className="pointer-events-none absolute bottom-0 right-0 size-10 rounded-br-3xl border-b-2 border-r-2 border-neon-2/40" />
      {/* hover glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover/shell:opacity-100"
        style={{
          boxShadow:
            "0 40px 120px -60px color-mix(in oklch, var(--neon) 70%, transparent)",
        }}
      />

      <div className="relative">
        <SectionHeading index={index} eyebrow={eyebrow} title={title} />
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tabular-nums text-neon">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-neon to-transparent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-gradient text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
