/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import HeroSection from "@/components/section/hero-section";
import StatsSection from "@/components/section/stats-section";
import CapabilitySection from "@/components/section/capability-section";
import { SectionShell } from "@/components/section/section-shell";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex flex-col">
      <HeroSection />
      <StatsSection />
      <CapabilitySection />

      {/* Content column */}
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <SectionShell id="about" index="01" eyebrow="About" title="关于我">
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </SectionShell>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <SectionShell
            id="work"
            index="02"
            eyebrow="Experience"
            title="工作经历"
          >
            <WorkSection />
          </SectionShell>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
          <SectionShell
            id="education"
            index="03"
            eyebrow="Education"
            title="教育背景"
          >
            <div className="relative flex flex-col gap-7 pl-7">
              <span
                className="absolute bottom-2 left-[5px] top-2 w-px"
                style={{
                  background:
                    "linear-gradient(var(--neon), color-mix(in oklch, var(--neon-2) 60%, transparent), transparent)",
                }}
              />
              {DATA.education.map((education) => (
                <div key={education.school} className="relative">
                  <span className="absolute -left-7 top-1.5 flex size-3 items-center justify-center">
                    <span
                      className="absolute inline-flex size-3 rounded-full opacity-60 blur-[3px]"
                      style={{ background: "var(--neon)" }}
                    />
                    <span className="relative size-2.5 rounded-full bg-neon ring-4 ring-background" />
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-x-3">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-9 flex-none overflow-hidden rounded-full border border-border bg-background object-contain p-1 ring-2 ring-border"
                        />
                      ) : (
                        <div className="size-9 flex-none rounded-full border border-border bg-muted p-1 ring-2 ring-border" />
                      )}
                      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <div className="font-semibold leading-tight">
                          {education.school}
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <span className="flex-none rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[10px] tabular-nums text-muted-foreground">
                      {education.start} — {education.end}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
          <SectionShell id="skills" index="04" eyebrow="Skills" title="核心能力">
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group/skill flex h-9 w-fit items-center gap-2 rounded-lg border border-border bg-background/40 px-3.5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-neon hover:shadow-[0_8px_24px_-12px_var(--neon)]"
                >
                  <span className="size-1.5 rounded-full bg-neon/60 transition-colors group-hover/skill:bg-neon" />
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </SectionShell>
        </BlurFade>
      </div>

      <div className="mx-auto w-full max-w-4xl px-6">
        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ProjectsSection />
          </BlurFade>
        </section>
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection />
          </BlurFade>
        </section>
      </div>

      <div className="mx-auto w-full max-w-2xl px-6 pb-28">
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ContactSection />
          </BlurFade>
        </section>
      </div>
    </main>
  );
}
