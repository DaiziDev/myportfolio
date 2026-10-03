import { useSyncExternalStore } from "react";

// Media query that is `false` during server rendering and updates live in the browser.
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

// Re-renders every `ms` milliseconds; returns the current timestamp (0 on the server).
export function useNow(ms: number) {
  return useSyncExternalStore(
    (onChange) => {
      const id = setInterval(onChange, ms);
      return () => clearInterval(id);
    },
    () => Math.floor(Date.now() / ms) * ms,
    () => 0,
  );
}
