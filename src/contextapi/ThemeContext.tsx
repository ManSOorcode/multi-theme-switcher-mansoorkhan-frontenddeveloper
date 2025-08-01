"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("theme1");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.className = storedTheme;
    } else {
      document.documentElement.className = "theme1";
    }
  }, []);

  const changeTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
