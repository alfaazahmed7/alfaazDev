"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch + white-border flash before mount.
  // Render a theme-neutral placeholder with the same size.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent"
      />
    );
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const showingDark = (activeTheme ?? resolvedTheme) !== "light";

  const toggle = () => setTheme(showingDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={showingDark ? "Switch to light mode" : "Switch to dark mode"}
      title={showingDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-slate-500 transition-all duration-300 hover:bg-[#F3F4F6] hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      <span
        key={showingDark ? "moon" : "sun"}
        className="inline-flex transition-transform duration-500"
      >
        {showingDark ? (
          <svg
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>
    </button>
  );
}
