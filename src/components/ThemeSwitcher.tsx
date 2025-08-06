"use client";

import { Theme, ThemeConfig } from "@/contextapi/ThemeContext";

interface ThemeSwitcherProps {
  theme: string;
  setTheme: (theme: Theme) => void;
  themeConfig: ThemeConfig;
}

const ThemeSwitcher = ({
  theme,
  setTheme,
  themeConfig,
}: ThemeSwitcherProps) => {
  return (
    <select
      id="theme-selector"
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
      className={`${themeConfig.bgSecondary} ${themeConfig.text} ${themeConfig.border} border ${themeConfig.borderRadius} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200`}
    >
      <option value="theme1">Light Theme</option>
      <option value="theme2">Dark Theme</option>
      <option value="theme3">Colorful Theme</option>
    </select>
  );
};

export default ThemeSwitcher;
