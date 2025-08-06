"use client";

import { useTheme } from "@/contextapi/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";
import { categoryItems, navItems } from "@/utils/data";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutStruct: React.FC<LayoutProps> = ({ children }) => {
  const { theme, themeConfig, setTheme, getNavLinkClasses, getHeadingClasses } =
    useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (themeConfig.layoutType === "standard") {
    return (
      <div className={`min-h-screen w-full  `}>
        <header
          className={`${themeConfig.bgSecondary} ${themeConfig.border}    border-b relative z-50 h-40 `}
          style={{ height: themeConfig.headerHeight }}
        >
          <div className="h-full px-6 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-full">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className={`text-2xl font-bold ${getHeadingClasses()} hover:opacity-80 transition-opacity`}
                >
                  ThemeApp
                </Link>
              </div>

              <nav className="items-center hidden space-x-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${getNavLinkClasses()} flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium text-sm`}
                  >
                    <span className="text-xs">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <ThemeSwitcher
                    setTheme={setTheme}
                    theme={theme}
                    themeConfig={themeConfig}
                  />
                </div>

                <button
                  className={`md:hidden p-2 rounded-lg ${themeConfig.textSecondary} hover:${themeConfig.text} hover:${themeConfig.bgSecondary} transition-all duration-200`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div
              className={`md:hidden absolute top-full left-0 right-0 ${themeConfig.bgSecondary} ${themeConfig.border} border-t shadow-lg z-50`}
            >
              <nav className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${getNavLinkClasses()} flex items-center space-x-3 py-3 px-3 rounded-lg transition-all duration-200 hover:translate-x-1`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="px-3">
                    <label
                      className={`block text-sm ${themeConfig.textSecondary} mb-2`}
                    >
                      Theme
                    </label>
                    <ThemeSwitcher
                      setTheme={setTheme}
                      theme={theme}
                      themeConfig={themeConfig}
                    />
                  </div>
                </div>
              </nav>
            </div>
          )}
        </header>

        <main
          className={`flex-1 ${themeConfig.bg} ${themeConfig.text} container mx-auto`}
        >
          {children}
        </main>

        <Footer
          categoryItems={categoryItems}
          getHeadingClasses={getHeadingClasses}
          navItems={navItems}
          themeConfig={themeConfig}
        />
      </div>
    );
  }

  if (themeConfig.layoutType === "sidebar") {
    return (
      <div
        className={`min-h-screen ${themeConfig.bg} ${themeConfig.text} flex `}
      >
        <aside
          className={`${themeConfig.bgSecondary} ${
            themeConfig.border
          } border-r-2 w-72 min-h-screen fixed left-0 top-0 z-40 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out  flex flex-col`}
        >
          <div className=" h-full ">
            <div className="flex-1 p-6">
              <div className="mb-8">
                <Link
                  href="/"
                  className={`text-2xl font-bold ${getHeadingClasses()}`}
                >
                  ThemeApp
                </Link>
              </div>

              <nav className="mb-8 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${getNavLinkClasses()} flex items-center space-x-3 py-3 px-4 rounded-lg text-base font-semibold hover:translate-x-1 transition-all duration-200 hover:shadow-md`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className={`py-6 ${themeConfig.border} border-t`}>
                <h3
                  className={`mb-4 text-lg font-semibold ${getHeadingClasses()}`}
                >
                  Categories
                </h3>
                <div className="space-y-1">
                  {categoryItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`block ${getNavLinkClasses()} py-2 px-4 rounded-lg hover:translate-x-1 transition-all duration-200 text-sm`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-700">
              <label
                className={`block text-sm ${themeConfig.textSecondary} mb-2`}
              >
                Theme
              </label>
              <ThemeSwitcher
                setTheme={setTheme}
                theme={theme}
                themeConfig={themeConfig}
              />
            </div>
          </div>
        </aside>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className="flex flex-col flex-1 min-h-screen md:ml-72">
          <header
            className={`${themeConfig.bgSecondary} ${themeConfig.border} border-b flex-shrink-0 sticky top-0 z-20 backdrop-blur-sm bg-opacity-95 md:hidden`}
            style={{ height: themeConfig.headerHeight }}
          >
            <div className="h-full px-6">
              <div className="flex items-center justify-between h-full">
                <h1 className={`text-xl font-semibold ${getHeadingClasses()}`}>
                  ThemeApp
                </h1>

                <button
                  className={`p-2 rounded-lg ${themeConfig.textSecondary} hover:${themeConfig.text} hover:${themeConfig.bgSecondary} transition-all duration-200`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle sidebar"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto mx-auto">{children}</main>

          <Footer
            categoryItems={categoryItems}
            getHeadingClasses={getHeadingClasses}
            navItems={navItems}
            themeConfig={themeConfig}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${themeConfig.bg} ${themeConfig.text} min-h-screen flex flex-col`}
    >
      <main className="flex-1 mx-auto">{children}</main>
      <Footer
        categoryItems={categoryItems}
        getHeadingClasses={getHeadingClasses}
        navItems={navItems}
        themeConfig={themeConfig}
      />
    </div>
  );
};

export default LayoutStruct;
