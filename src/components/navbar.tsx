"use client";

import { ArrowUp, Sun, Moon, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top right: language + theme toggle */}
      <div className="fixed top-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border shadow-sm text-sm font-medium transition-colors hover:bg-muted"
        >
          <Globe className="size-3.5" />
          {lang === "zh" ? "EN" : "中"}
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center p-2 rounded-lg bg-card border border-border shadow-sm transition-colors hover:bg-muted"
          aria-label="切换主题"
        >
          {mounted && theme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
        </button>
      </div>

      {/* Bottom right: back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-30 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="回到顶部"
      >
        <ArrowUp className="size-4" />
      </button>
    </>
  );
}
