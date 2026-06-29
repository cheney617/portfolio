"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";

/**
 * Global techy backdrop: a faint animated grid plus two large neon glows.
 * Rendered once, fixed behind all content.
 */
export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid opacity-60 animate-grid-pan" />

      {/* Neon glows */}
      <div
        className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--neon) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-40 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--neon-2) 18%, transparent), transparent 70%)",
        }}
      />

      {/* Flickering accent confined to the top band */}
      <div className="absolute inset-x-0 top-0 h-[160px] overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={3}
          maxOpacity={0.18}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      {/* Bottom fade so content sits cleanly on the background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
