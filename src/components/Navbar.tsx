// // src/components/Navbar.tsx
// "use client";

// import { Theme, useTheme } from "@/contextapi/ThemeContext";
// import Link from "next/link";
// import ThemeSwitcher from "./ThemeSwitcher";

// const Navbar = () => {
//   //   const { theme, setTheme } = useTheme();

//   return (
//     <header className="bg-white shadow-sm dark:bg-gray-900">
//       <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
//         <Link
//           href="/"
//           className="text-xl font-bold text-gray-800 dark:text-white"
//         >
//           MultiThemeApp
//         </Link>

//         <nav className="space-x-4">
//           <Link
//             href="/"
//             className="text-gray-700 dark:text-gray-200 hover:underline"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="text-gray-700 dark:text-gray-200 hover:underline"
//           >
//             About
//           </Link>
//           <Link
//             href="/products"
//             className="text-gray-700 dark:text-gray-200 hover:underline"
//           >
//             Products
//           </Link>
//           <Link
//             href="/contact"
//             className="text-gray-700 dark:text-gray-200 hover:underline"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* <select
//           value={theme}
//           onChange={(e) => setTheme(e.target.value as Theme)}
//           className="px-2 py-1 text-gray-900 bg-gray-100 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//         >
//           <option value="light">Light</option>
//           <option value="dark">Dark</option>
//           <option value="solarized">Solarized</option>
//         </select> */}

//         <ThemeSwitcher />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import { Theme } from "@/contextapi/ThemeContext";
import Link from "next/link";
import React from "react";

const Navbar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (value: Theme) => void;
}) => {
  return (
    <header className="app-header">
      <div className="flex items-center justify-between w-full h-full px-6">
        {/* Logo */}
        <h1 className="text-2xl theme-heading">ThemeApp</h1>

        {/* Navigation (hidden in theme2 - shows in sidebar) */}
        {theme !== "theme2" && (
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="theme-nav-link">
              Home
            </Link>
            <Link href="/about" className="theme-nav-link">
              About
            </Link>
            <Link href="/products" className="theme-nav-link">
              Products
            </Link>
            <Link href="/contact" className="theme-nav-link">
              Contact
            </Link>
          </nav>
        )}

        {/* Theme Switcher */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="px-4 py-2 border rounded"
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
            borderColor: "var(--border-color)",
          }}
        >
          <option value="theme1">Light Theme</option>
          <option value="theme2">Dark Sidebar</option>
          <option value="theme3">Colorful Theme</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
