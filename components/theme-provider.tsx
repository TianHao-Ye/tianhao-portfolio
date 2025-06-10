"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? "scale-0 rotate-90 absolute" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90 absolute"
        }`}
      />
    </button>
  );
};
