import Link from "next/link";
import { NewsletterSignup } from "./NewsletterSignup";
import { SocialLinks } from "./SocialLinks";

const footerLinks = {
  products: [
    { label: "All Deals", href: "/" },
    { label: "Phones & GPS", href: "/category/phones-gps" },
    { label: "Computers", href: "/category/computers" },
    { label: "Audio & Video", href: "/category/audio-video" },
    { label: "Home & Household", href: "/category/home-household" },
    { label: "Games & Entertainment", href: "/category/games" },
    { label: "Camera & Photo", href: "/category/camera-photo" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "For Retailers", href: "/retailers" },
    { label: "Careers", href: "/careers" },
    { label: "News & Blog", href: "/news" },
  ],
  support: [
    { label: "Help Centre", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/help#faq" },
    { label: "Price Alerts", href: "/help#alerts" },
    { label: "Report a Problem", href: "/contact#report" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]" role="contentinfo">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column - full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--fern)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-[var(--foreground)]">
                PriceSpy <span className="text-[var(--accent)]">NZ</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[var(--text-muted)]">
              Compare prices from 1,000+ NZ retailers. Find the best deals on electronics, appliances, and more. We help Kiwis save money every day.
            </p>
            <SocialLinks />
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Products</h3>
            <ul className="mt-4 space-y-2 sm:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] active:text-[var(--accent)] transition-colors sm:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Company</h3>
            <ul className="mt-4 space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] active:text-[var(--accent)] transition-colors sm:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Support</h3>
            <ul className="mt-4 space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] active:text-[var(--accent)] transition-colors sm:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 sm:mt-12 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">Get the best deals</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Subscribe for weekly price alerts and exclusive deals from NZ retailers.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-[var(--border)] pt-6 sm:mt-12 sm:gap-8 sm:pt-8">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <svg className="h-5 w-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure & Free</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <svg className="h-5 w-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5v-1.565M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>NZ Market Only</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <svg className="h-5 w-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Real-time Prices</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-center sm:mt-8 sm:flex-row sm:pt-8 sm:text-left">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[var(--text-subtle)] hover:text-[var(--accent)] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-[var(--text-subtle)]">
            © {currentYear} PriceSpy NZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
