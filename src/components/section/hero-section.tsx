"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Parallax from "@/components/magicui/parallax";
import TiltCard from "@/components/magicui/tilt-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const DELAY = 0.06;

export default function HeroSection() {
  const socials = Object.values(DATA.contact.social).filter((s) => s.navbar);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr]">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <BlurFade delay={DELAY}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-neon" />
              </span>
              C端产品 · AI × 商业增长
            </span>
          </BlurFade>

          <div className="flex flex-col gap-3">
            <BlurFadeText
              delay={DELAY * 2}
              className="text-gradient text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl"
              yOffset={10}
              text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="max-w-[560px] text-base text-muted-foreground sm:text-lg"
              delay={DELAY * 3}
              text={DATA.description}
            />
          </div>

          <BlurFade delay={DELAY * 4}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="glow inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                查看项目
                <ArrowDown className="size-4" />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:bg-accent/60"
              >
                下载简历
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={DELAY * 5}>
            <div className="flex items-center gap-2">
              {socials.map((social) =>
                social.url ? (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground backdrop-blur transition-colors hover:border-neon hover:text-foreground"
                  >
                    <social.icon className="size-4" />
                  </Link>
                ) : null
              )}
            </div>
          </BlurFade>
        </div>

        {/* Right: tilted avatar card */}
        <BlurFade delay={DELAY * 3} className="mx-auto md:mx-0">
          <Parallax offset={36}>
            <TiltCard
              max={9}
              className="group relative w-fit rounded-3xl border border-border bg-card/60 p-5 backdrop-blur-md"
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-60"
                style={{
                  background:
                    "linear-gradient(140deg, color-mix(in oklch, var(--neon) 35%, transparent), transparent 45%, color-mix(in oklch, var(--neon-2) 30%, transparent))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
              <Avatar className="size-44 rounded-2xl border border-border shadow-2xl sm:size-52">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback className="rounded-2xl text-2xl">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
              <div className="mt-4 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{DATA.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {DATA.location}
                  </span>
                </div>
                <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  PM
                </span>
              </div>
            </TiltCard>
          </Parallax>
        </BlurFade>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <ArrowDown className="size-5 animate-bounce text-muted-foreground/70" />
      </div>
    </section>
  );
}
