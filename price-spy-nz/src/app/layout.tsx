import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "PriceSpy NZ | Find the Best Deals Across NZ Stores",
    template: "%s | PriceSpy NZ",
  },
  description:
    "Compare prices from 1000+ NZ shops. Find the cheapest option for electronics, appliances, and more. Best deals in the NZ market.",
  keywords: ["price comparison", "NZ deals", "New Zealand", "cheapest price", "retailers"],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--background)] focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <CategoryNav />
        <main id="main-content" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
