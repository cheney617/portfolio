/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const AI_PROJECTS = [
  {
    title: "AI直播互动游戏",
    href: "/projects/ai-game",
    dates: "June 2026",
    description: "负责核心交互设计、内容模型输出以及模型评测。评论智能分类→场景剧情生成→主播-观众实时同步。1天完成Demo，获Hackathon冠军。",
    technologies: ["AI", "Hackathon", "Vibe Coding", "实时互动"],
    image: "/project-ai-game.svg",
    metric: "Hackathon冠军",
  },
  {
    title: "AI深度融入PM工作流",
    href: "/projects/ai-workflow",
    dates: "2025 - Present",
    description: "数据监控自动化（SQL生成+定时推送）、PRD全链路提效（框架→原型→评审更新）、Case Review自动化（ASR全切片分析）。",
    technologies: ["Claude Code", "Workflow", "提效"],
    image: "/project-ai-workflow.svg",
    metric: "日常实践",
  },
];

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">AI Practice</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI × 产品</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              从用AI辅助工作，到用AI构建产品能力本身。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {AI_PROJECTS.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 14 + id * 0.05} className="h-full">
              <Link
                href={project.href}
                className="flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200"
              >
                <div className="relative shrink-0">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-muted" />
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
                  <p className="text-xs flex-1 text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.map((tag) => (
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
