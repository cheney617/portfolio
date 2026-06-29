"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "zh" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "zh", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    // Check localStorage first, then browser language
    const saved = localStorage.getItem("lang") as Lang;
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language;
      setLang(browserLang.startsWith("zh") ? "zh" : "en");
    }
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
