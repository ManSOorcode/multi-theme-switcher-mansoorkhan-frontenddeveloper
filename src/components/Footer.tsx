"use client";
import { ThemeConfig } from "@/contextapi/ThemeContext";
import Link from "next/link";

interface FooterProps {
  themeConfig: ThemeConfig;
  navItems: { label: string; href: string }[];
  categoryItems: { label: string; href: string }[];
  getHeadingClasses: () => string;
}

const Footer = ({
  categoryItems,
  getHeadingClasses,
  navItems,
  themeConfig,
}: FooterProps) => (
  <footer
    className={`${themeConfig.bgSecondary} ${themeConfig.border} border-t mt-auto`}
  >
    <div className="px-6 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <h3 className={`text-xl font-bold ${getHeadingClasses()} mb-4`}>
            ThemeApp
          </h3>
          <p
            className={`${themeConfig.textSecondary} text-sm leading-relaxed mb-4`}
          >
            Experience the power of dynamic theming with our beautiful,
            responsive multi-theme application.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`font-semibold ${getHeadingClasses()} mb-4`}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${themeConfig.textSecondary} hover:${themeConfig.text} text-sm transition-colors block`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className={`font-semibold ${getHeadingClasses()} mb-4`}>
            Categories
          </h4>
          <ul className="space-y-2">
            {categoryItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${themeConfig.textSecondary} hover:${themeConfig.text} text-sm transition-colors block`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`mt-8 pt-6 ${themeConfig.border} border-t`}>
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className={`${themeConfig.textSecondary} text-sm`}>
            © 2025 ThemeApp. All rights reserved.
          </p>
          <div className=" grid grid-cols-2 sm:grid-cols-4 justify-items-center md:flex gap-2 md:gap-6 ">
            <span className={`${themeConfig.textSecondary} text-sm`}>10k+</span>
            <span className={`${themeConfig.textSecondary} text-sm`}>
              Happy Users
            </span>
            <span className={`${themeConfig.textSecondary} text-sm`}>50+</span>
            <span className={`${themeConfig.textSecondary} text-sm`}>
              Products
            </span>
            <span className={`${themeConfig.textSecondary} text-sm`}>99%</span>
            <span className={`${themeConfig.textSecondary} text-sm`}>
              Satisfaction
            </span>
            <span className={`${themeConfig.textSecondary} text-sm`}>24/7</span>
            <span className={`${themeConfig.textSecondary} text-sm`}>
              Support
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
