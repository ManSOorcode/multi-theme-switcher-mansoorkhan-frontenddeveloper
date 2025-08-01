// src/app/layout.tsx
import { ThemeProvider } from "@/contextapi/ThemeContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QueryProvider from "@/query/QueryProvider";

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
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <QueryProvider>
              <main className="flex-grow">{children}</main>
            </QueryProvider>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
