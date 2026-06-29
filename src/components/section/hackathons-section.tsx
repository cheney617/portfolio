/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useData } from "@/data/use-data";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const AI_COVERS: Record<string, string> = {
  "AI直播互动游戏（Hackathon冠军）": "/project-ai-game.svg",
  "AI Live Interactive Game (Hackathon Champion)": "/project-ai-game.svg",
  "AI深度融入PM工作流": "/project-ai-workflow.svg",
  "AI-Powered PM Workflow": "/project-ai-workflow.svg",
};

const AI_HREFS: Record<string, string> = {
  "AI直播互动游戏（Hackathon冠军）": "/projects/ai-game",
  "AI Live Interactive Game (Hackathon Champion)": "/projects/ai-game",
  "AI深度融入PM工作流": "/projects/ai-workflow",
  "AI-Powered PM Workflow": "/projects/ai-workflow",
};

const AI_TAGS: Record<string, string[]> = {
  "AI直播互动游戏（Hackathon冠军）": ["AI", "Hackathon", "Vibe Coding", "实时互动"],
  "AI Live Interactive Game (Hackathon Champion)": ["AI", "Hackathon", "Vibe Coding", "Real-time"],
  "AI深度融入PM工作流": ["Claude Code", "Workflow", "提效"],
  "AI-Powered PM Workflow": ["Claude Code", "Workflow", "Efficiency"],
};

export default function HackathonsSection() {
  const DATA = useData();

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">{DATA.ui.aiTag}</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <p className="text-muted-foreground text-balance text-center">
            {DATA.ui.aiDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.hackathons.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 14 + id * 0.05} className="h-full">
              <Link
                href={AI_HREFS[project.title] || "#"}
                className="flex flex-col h-full border border-border rounded-card overflow-hidden hover:shadow-card-hover cursor-pointer transition-all duration-200 bg-card relative z-[2]"
              >
                <div className="relative shrink-0 overflow-hidden rounded-t-card">
                  {AI_COVERS[project.title] ? (
                    <img src={AI_COVERS[project.title]} alt={project.title} className="w-full aspect-[2/1] object-cover" />
                  ) : (
                    <div className="w-full aspect-[2/1] bg-muted" />
                  )}
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">{project.title}</h3>
                      <time className="text-xs text-muted-foreground">{project.dates}</time>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden />
                  </div>
                  <p className="text-sm flex-1 text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {(AI_TAGS[project.title] || []).map((tag) => (
                      <Badge key={tag} className="text-[11px] font-medium border border-border h-6 w-fit px-2" variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
