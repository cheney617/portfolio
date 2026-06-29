/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown } from "lucide-react";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="size-full rounded-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-full rounded-full object-contain p-1.5"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-3">
      {DATA.work.map((work) => {
        const isCurrent = !work.end || work.end === "Present";
        return (
          <AccordionItem
            key={work.company}
            value={work.company}
            className="group/work relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-colors hover:border-neon/50 data-[state=open]:border-neon/60"
          >
            <AccordionTrigger className="group cursor-pointer p-4 hover:no-underline [&>svg]:hidden">
              <div className="flex w-full items-center gap-x-4 text-left">
                {/* glowing node */}
                <span className="relative flex size-11 flex-none items-center justify-center rounded-full border border-border bg-background ring-2 ring-border transition-shadow group-hover:ring-neon/50 group-data-[state=open]:ring-neon/70">
                  <span
                    className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-60 group-data-[state=open]:opacity-80"
                    style={{ background: "var(--neon)" }}
                  />
                  <span className="relative size-full overflow-hidden rounded-full">
                    <LogoImage src={work.logoUrl} alt={work.company} />
                  </span>
                </span>

                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-tight">
                    <span className="truncate">{work.company}</span>
                    {isCurrent && (
                      <span className="relative flex size-2 flex-none">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
                        <span className="relative inline-flex size-2 rounded-full bg-neon" />
                      </span>
                    )}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>

                <div className="flex flex-none items-center gap-2">
                  <span className="hidden rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[10px] tabular-nums text-muted-foreground sm:inline-block">
                    {work.start} — {work.end ?? "Present"}
                  </span>
                  <ChevronDown className="size-4 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-neon" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="ml-15 border-l-2 border-neon/40 pl-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {work.description}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
