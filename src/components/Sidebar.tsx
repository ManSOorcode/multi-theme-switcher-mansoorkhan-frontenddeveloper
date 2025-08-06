"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <nav className="space-y-4">
        <Link href="/" className="theme-nav-link">
          🏠 Home
        </Link>
        <Link href="/about" className="theme-nav-link">
          📖 About
        </Link>
        <Link href="/products" className="theme-nav-link">
          🛍️ Products
        </Link>
        <Link href="/contact" className="theme-nav-link">
          📧 Contact
        </Link>

        <div
          className="pt-8 mt-8"
          style={{ borderTop: `1px solid var(--border-color)` }}
        >
          <h3 className="mb-4 text-lg theme-heading">Categories</h3>
          <div className="space-y-2">
            <Link href="#" className="block theme-nav-link">
              Electronics
            </Link>
            <Link href="#" className="block theme-nav-link">
              Clothing
            </Link>
            <Link href="#" className="block theme-nav-link">
              Books
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
