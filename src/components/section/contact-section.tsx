"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { useData } from "@/data/use-data";
import { Mail, FileDown } from "lucide-react";

export default function ContactSection() {
  const DATA = useData();
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.ui.contactTag}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <p className="text-muted-foreground text-balance">{DATA.ui.contactDesc}</p>
        <div className="flex gap-3">
          <Link
            href={DATA.resumeUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            <FileDown className="size-4" />
            {DATA.ui.downloadResume}
          </Link>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
          >
            <Mail className="size-4" />
            {DATA.ui.sendEmail}
          </Link>
        </div>
      </div>
    </div>
  );
}
