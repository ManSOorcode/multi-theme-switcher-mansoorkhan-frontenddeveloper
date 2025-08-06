// src/app/layout.tsx
import { ThemeProvider } from "@/contextapi/ThemeContext";
import "./globals.css";

import QueryProvider from "@/query/QueryProvider";
import LayoutStrut from "@/components/LayoutStrut";

export const metadata = {
  title: "Multi Theme App",
  description: "Switch between multiple themes using Tailwind & Context API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <QueryProvider>
            <LayoutStrut>{children}</LayoutStrut>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
