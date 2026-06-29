/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
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
      className="w-full h-48 object-cover relative z-[2]"
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
  coverGradient?: string;
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
  coverGradient,
  links,
  className,
}: Props) {
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
  return (
    <Link
      href={href || "#"}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      className={cn(
        "flex flex-col h-full border border-border rounded-card overflow-hidden hover:shadow-card-hover cursor-pointer transition-all duration-200 bg-card relative z-[2]",
        className
      )}
    >
      <div className="relative shrink-0 overflow-hidden rounded-t-card">
        {coverGradient ? (
          <div className="card-cover w-full aspect-[2/1]" style={{ background: coverGradient }} />
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-[2/1] object-cover"
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full aspect-[2/1] object-cover"
          />
        ) : (
          <div className="w-full aspect-[2/1] bg-muted" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {href && href !== "" && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden />
          )}
        </div>
        <div className="text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
