"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/components/language-provider";
import { PROJECTS, t } from "./projects-data";

export default function DetailContent({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const project = PROJECTS[slug];

  if (!project) return null;

  return (
    <main className="flex flex-col min-h-[100dvh] relative z-[1]">
      <div className="container max-w-3xl mx-auto px-4 py-12 bg-background">
        <BlurFade delay={0.04}>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 py-3 px-4 -ml-4 rounded-lg hover:bg-muted transition-colors min-h-[44px]">
            <ArrowLeftIcon className="size-4" /> {lang === "zh" ? "返回项目列表" : "Back to projects"}
          </Link>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t(project.title, lang)}</h1>
          <p className="text-lg text-muted-foreground mb-8">{t(project.subtitle, lang)}</p>
        </BlurFade>

        {project.metrics.length > 0 && (
          <BlurFade delay={0.12}>
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(project.metrics.length, 4)} gap-4 mb-10`}>
              {project.metrics.map((m) => (
                <div key={t(m.label, lang)} className="border rounded-lg p-4 text-center">
                  <div className={`font-bold ${m.value.length > 6 ? 'text-lg' : 'text-2xl'}`}>{m.value}</div>
                  <div className="text-xs text-muted-foreground">{t(m.label, lang)}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        )}

        <BlurFade delay={0.16}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{lang === "zh" ? "背景" : "Context"}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(project.background, lang)}</p>
          </section>
        </BlurFade>

        {project.flowDiagram && (
          <BlurFade delay={0.18}>
            <div className="flex items-center gap-2 flex-wrap my-6 p-4 rounded-lg bg-muted/50 text-sm">
              {t(project.flowDiagram, lang).split(' → ').map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{step}</span>
                  {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                </React.Fragment>
              ))}
            </div>
          </BlurFade>
        )}

        <BlurFade delay={0.2}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{lang === "zh" ? "方案" : "Approach"}</h2>
            <ul className="space-y-2">
              {project.approach.map((a, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-foreground font-medium shrink-0">{i + 1}.</span>
                  <span>{t(a, lang)}</span>
                </li>
              ))}
            </ul>
          </section>
        </BlurFade>

        <BlurFade delay={0.24}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{lang === "zh" ? "结果" : "Results"}</h2>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-green-500 shrink-0">✓</span>
                  <span>{t(r, lang)}</span>
                </li>
              ))}
            </ul>
          </section>
        </BlurFade>

        {project.reflection && (
          <BlurFade delay={0.26}>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">{lang === "zh" ? "思考" : "Reflection"}</h2>
              <p className="text-muted-foreground leading-relaxed italic">{t(project.reflection, lang)}</p>
            </section>
          </BlurFade>
        )}

        {project.links && project.links.length > 0 && (
          <BlurFade delay={0.28}>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">{lang === "zh" ? "链接" : "Links"}</h2>
              <div className="flex gap-3">
                {project.links.map((l) => (
                  <Link key={l.href} href={l.href} target="_blank" className="text-sm text-blue-500 hover:underline">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </section>
          </BlurFade>
        )}
      </div>
    </main>
  );
}
