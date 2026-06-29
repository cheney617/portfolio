/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import TiltCard from "@/components/magicui/tilt-card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
  return (
    <TiltCard max={6} className={cn("h-full", className)}>
      <Link
        href={href || "#"}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur transition-all duration-300 hover:border-neon/60 group-hover:shadow-[0_30px_70px_-30px_color-mix(in_oklch,var(--neon)_55%,transparent)]"
      >
        <div className="relative shrink-0">
          <div className="block">
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-full object-cover"
              />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="h-48 w-full bg-muted" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold transition-colors group-hover:text-foreground">
                {title}
              </h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon" aria-hidden />
          </div>
          <div className="prose max-w-full flex-1 text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Link>
    </TiltCard>
  );
}
