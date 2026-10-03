"use client";

import { useEffect, useSyncExternalStore } from "react";
import { content, type Lang } from "./content";

// Tiny language store: remembers the choice in localStorage and
// falls back to the browser language on the first visit.
const KEY = "daizi:lang";
const listeners = new Set<() => void>();
let current: Lang | null = null;

function read(): Lang {
  if (current) return current;
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "fr") return (current = saved);
  } catch {}
  return (current = navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en");
}

export function setLang(lang: Lang) {
  current = lang;
  try {
    localStorage.setItem(KEY, lang);
  } catch {}
  listeners.forEach((l) => l());
}

export function useLang(): Lang {
  const lang = useSyncExternalStore<Lang>(
    (onChange) => {
      listeners.add(onChange);
      return () => listeners.delete(onChange);
    },
    read,
    () => "en",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return lang;
}

export function useContent() {
  return content[useLang()];
}
