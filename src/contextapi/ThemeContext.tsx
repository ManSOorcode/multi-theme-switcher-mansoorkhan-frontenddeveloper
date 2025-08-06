"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Theme = "theme1" | "theme2" | "theme3";

export interface ThemeConfig {
  bg: string;
  bgSecondary: string;
  text: string;
  textSecondary: string;
  primary: string;
  accent: string;
  border: string;
  card: string;
  hover: string;

  fontFamily: string;
  headingWeight: string;

  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  borderRadius: string;
  shadow: string;

  layoutType: "standard" | "sidebar" | "grid";
  headerHeight: string;
  sidebarWidth: string;
}

// const themeConfigs: Record<Theme, ThemeConfig> = {
//   theme1: {
//     bg: "bg-light-bg",
//     bgSecondary: "bg-light-secondary",
//     text: "text-light-text",
//     textSecondary: "text-light-text-secondary",
//     primary: "bg-light-primary",
//     accent: "bg-light-accent",
//     border: "border-light-border",
//     card: "bg-light-card",
//     hover: "hover:bg-light-hover",

//     fontFamily: "font-inter",
//     headingWeight: "font-bold",

//     spacing: {
//       xs: "p-[--spacing-theme1-xs]",
//       sm: "p-[--spacing-theme1-sm]",
//       md: "p-[--spacing-theme1-md]",
//       lg: "p-[--spacing-theme1-lg]",
//       xl: "p-[--spacing-theme1-xl]",
//     },

//     borderRadius: "rounded-[--radius-theme1]",
//     shadow: "shadow-[--shadow-theme1]",

//     layoutType: "standard",
//     headerHeight: "4rem",
//     sidebarWidth: "0",
//   },

//   theme2: {
//     bg: "bg-dark-bg",
//     bgSecondary: "bg-dark-secondary",
//     text: "text-dark-text",
//     textSecondary: "text-dark-text-secondary",
//     primary: "bg-dark-primary",
//     accent: "bg-dark-accent",
//     border: "border-dark-border",
//     card: "bg-dark-card",
//     hover: "hover:bg-dark-hover",

//     fontFamily: "font-merriweather",
//     headingWeight: "font-black",

//     spacing: {
//       xs: "p-[--spacing-theme2-xs]",
//       sm: "p-[--spacing-theme2-sm]",
//       md: "p-[--spacing-theme2-md]",
//       lg: "p-[--spacing-theme2-lg]",
//       xl: "p-[--spacing-theme2-xl]",
//     },

//     borderRadius: "rounded-[--radius-theme2]",
//     shadow: "shadow-[--shadow-theme2]",

//     layoutType: "sidebar",
//     headerHeight: "4.5rem",
//     sidebarWidth: "17.5rem",
//   },

//   theme3: {
//     bg: "bg-colorful-bg",
//     bgSecondary: "bg-colorful-secondary",
//     text: "text-colorful-text",
//     textSecondary: "text-colorful-text-secondary",
//     primary: "bg-colorful-primary",
//     accent: "bg-colorful-accent",
//     border: "border-colorful-border",
//     card: "bg-colorful-card",
//     hover: "hover:bg-colorful-hover",

//     fontFamily: "font-pacifico",
//     headingWeight: "font-normal",

//     spacing: {
//       xs: "p-[--spacing-theme3-xs]",
//       sm: "p-[--spacing-theme3-sm]",
//       md: "p-[--spacing-theme3-md]",
//       lg: "p-[--spacing-theme3-lg]",
//       xl: "p-[--spacing-theme3-xl]",
//     },

//     borderRadius: "rounded-[--radius-theme3]",
//     shadow: "shadow-[--shadow-theme3]",

//     layoutType: "grid",
//     headerHeight: "5rem",
//     sidebarWidth: "0",
//   },
// };

// const themeConfigs: Record<Theme, ThemeConfig> = {
//   // Theme 1: Light Theme (Standard Layout)
//   theme1: {
//     bg: "bg-light-bg",
//     bgSecondary: "bg-light-secondary",
//     text: "text-light-text",
//     textSecondary: "text-light-text-secondary",
//     primary: "bg-light-primary",
//     accent: "bg-light-accent",
//     border: "border-light-border",
//     card: "bg-light-card",
//     hover: "hover:bg-light-hover",

//     fontFamily: "font-inter",
//     headingWeight: "font-bold",

//     spacing: {
//       xs: "p-[--spacing-theme1-xs]",
//       sm: "p-[--spacing-theme1-sm]",
//       md: "p-[--spacing-theme1-md]",
//       lg: "p-[--spacing-theme1-lg]",
//       xl: "p-[--spacing-theme1-xl]",
//     },

//     borderRadius: "rounded-[--radius]",
//     shadow: "shadow-[--shadow-theme1]",

//     layoutType: "standard", // Standard header-main-footer
//     headerHeight: "4rem",
//     sidebarWidth: "0",
//   },

//   // Theme 2: Dark Theme (Standard Layout)
//   theme2: {
//     bg: "bg-dark-bg",
//     bgSecondary: "bg-dark-secondary",
//     text: "text-dark-text",
//     textSecondary: "text-dark-text-secondary",
//     primary: "bg-dark-primary",
//     accent: "bg-dark-accent",
//     border: "border-dark-border",
//     card: "bg-dark-card",
//     hover: "hover:bg-dark-hover",

//     fontFamily: "font-merriweather",
//     headingWeight: "font-black",

//     spacing: {
//       xs: "p-[--spacing-theme2-xs]",
//       sm: "p-[--spacing-theme2-sm]",
//       md: "p-[--spacing-theme2-md]",
//       lg: "p-[--spacing-theme2-lg]",
//       xl: "p-[--spacing-theme2-xl]",
//     },

//     borderRadius: "rounded-[--radius-theme2]",
//     shadow: "shadow-[--shadow-theme2]",

//     layoutType: "sidebar", // Sidebar layout for Theme 3
//     headerHeight: "5rem",
//     sidebarWidth: "18rem",
//   },

//   // Theme 3: Colorful Theme (Sidebar Layout)
//   theme3: {
//     bg: "bg-colorful-bg",
//     bgSecondary: "bg-colorful-secondary",
//     text: "text-colorful-text",
//     textSecondary: "text-colorful-text-secondary",
//     primary: "bg-colorful-primary",
//     accent: "bg-colorful-accent",
//     border: "border-colorful-border",
//     card: "bg-colorful-card",
//     hover: "hover:bg-colorful-hover",

//     fontFamily: "font-pacifico",
//     headingWeight: "font-normal",

//     spacing: {
//       xs: "p-[--spacing-theme3-xs]",
//       sm: "p-[--spacing-theme3-sm]",
//       md: "p-[--spacing-theme3-md]",
//       lg: "p-[--spacing-theme3-lg]",
//       xl: "p-[--spacing-theme3-xl]",
//     },

//     borderRadius: "rounded-[--radius-theme3]",
//     shadow: "shadow-[--shadow-theme3]",

//     layoutType: "standard", // Standard header-main-footer
//     headerHeight: "4rem",
//     sidebarWidth: "0",
//   },
// };

const themeConfigs: Record<Theme, ThemeConfig> = {
  // Theme 1: Light Theme (Standard Layout) - Minimalist
  theme1: {
    bg: "bg-white",
    bgSecondary: "bg-gray-50",
    text: "text-gray-900",
    textSecondary: "text-gray-600",
    primary: "bg-blue-600",
    accent: "bg-gray-200",
    border: "border-gray-300",
    card: "bg-white",
    hover: "hover:bg-gray-100",

    fontFamily: "font-inter",
    headingWeight: "font-light",

    spacing: {
      xs: "p-2",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-12",
    },

    borderRadius: "rounded-md",
    shadow: "shadow-sm",

    layoutType: "standard",
    headerHeight: "4rem",
    sidebarWidth: "0",
  },

  // Theme 2: Dark Theme (Sidebar Layout) - Bold serif with larger spacing
  theme2: {
    bg: "bg-slate-900",
    bgSecondary: "bg-slate-800",
    text: "text-slate-100",
    textSecondary: "text-slate-300",
    primary: "bg-emerald-600",
    accent: "bg-slate-700",
    border: "border-slate-600",
    card: "bg-slate-800",
    hover: "hover:bg-slate-700",

    fontFamily: "font-merriweather",
    headingWeight: "font-black",

    spacing: {
      xs: "p-3",
      sm: "p-5",
      md: "p-8",
      lg: "p-10",
      xl: "p-16",
    },

    borderRadius: "rounded-sm",
    shadow: "shadow-lg",

    layoutType: "sidebar",
    headerHeight: "5rem",
    sidebarWidth: "18rem",
  },

  // Theme 3: Colorful Theme (Standard Layout) - Playful with rounded corners
  theme3: {
    bg: "bg-amber-50",
    bgSecondary: "bg-amber-100",
    text: "text-amber-900",
    textSecondary: "text-amber-700",
    primary: "bg-amber-500",
    accent: "bg-orange-200",
    border: "border-orange-300",
    card: "bg-yellow-50",
    hover: "hover:bg-amber-100",

    fontFamily: "font-pacifico",
    headingWeight: "font-normal",

    spacing: {
      xs: "p-4",
      sm: "p-6",
      md: "p-10",
      lg: "p-12",
      xl: "p-18",
    },

    borderRadius: "rounded-2xl",
    shadow: "shadow-xl",

    layoutType: "standard",
    headerHeight: "4rem",
    sidebarWidth: "0",
  },
};
interface ThemeContextType {
  theme: Theme;
  themeConfig: ThemeConfig;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
  getCardClasses: () => string;
  getButtonClasses: () => string;
  getHeadingClasses: () => string;
  getTextClasses: () => string;
  getNavLinkClasses: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("theme1");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const themeConfig = themeConfigs[theme];

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || "theme1";
    setTheme(storedTheme);
    applyThemeClass(storedTheme);
  }, []);

  const applyThemeClass = (theme: Theme) => {
    const newConfig = themeConfigs[theme];
    document.body.className = `${theme} ${newConfig.bg} ${newConfig.text} ${newConfig.fontFamily} min-h-screen transition-all duration-300`;
  };

  const changeTheme = (newTheme: Theme) => {
    setIsTransitioning(true);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    applyThemeClass(newTheme);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getCardClasses = () => {
    return `${themeConfig.card} ${themeConfig.border} border ${themeConfig.shadow} ${themeConfig.borderRadius} ${themeConfig.spacing.md} ${themeConfig.hover} transition-all duration-300 hover:-translate-y-1`;
  };

  const getButtonClasses = () => {
    return `${themeConfig.primary} ${themeConfig.textSecondary} ${themeConfig.borderRadius} ${themeConfig.spacing.sm} font-medium hover:brightness-90 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none`;
  };

  const getHeadingClasses = () => {
    return `${themeConfig.text} ${themeConfig.headingWeight} ${themeConfig.fontFamily}`;
  };

  const getTextClasses = () => {
    return `${themeConfig.textSecondary} leading-relaxed`;
  };

  const getNavLinkClasses = () => {
    return `${themeConfig.textSecondary} hover:${themeConfig.primary.replace(
      "bg-",
      "text-"
    )} transition-colors duration-300 no-underline`;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig,
        setTheme: changeTheme,
        isTransitioning,
        getCardClasses,
        getButtonClasses,
        getHeadingClasses,
        getTextClasses,
        getNavLinkClasses,
      }}
    >
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
