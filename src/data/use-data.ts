"use client";

import { useLanguage } from "@/components/language-provider";
import { DATA_ZH, DATA_EN } from "@/data/resume";

export function useData() {
  const { lang } = useLanguage();
  return lang === "en" ? DATA_EN : DATA_ZH;
}
