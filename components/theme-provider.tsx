"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const storageKey = "theme-preference";

export const ThemeSwitch = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  // 获取本地主题或系统主题
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as
        | "light"
        | "dark"
        | null;
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  // 应用主题到 DOM 和状态
  const applyTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.remove("bg-light", "bg-dark");
    document.documentElement.classList.add(`bg-${theme}`);
    setCurrentTheme(theme);
    setTheme(theme);
  };

  useEffect(() => {
    setMounted(true);

    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    // 监听系统主题变化
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      applyTheme(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  };

  // 防止 hydration mismatch 错误
  if (!mounted) {
    return (
      <Sun
        className="h-[1.2rem] w-[1.2rem] transition-all text-[#1c1c1c]"
        aria-hidden="true"
      />
    );
  }

  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="切换主题"
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
