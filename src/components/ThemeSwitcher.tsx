// src/components/ThemeSwitcher.tsx
"use client";

import { Theme, useTheme } from "@/contextapi/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
      className="bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 text-gray-900 dark:text-white px-2 py-1 rounded"
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeSwitcher;
