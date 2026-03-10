"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { categories } from "@/data/products";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Top bar - Trust & utility (compact on mobile) */}
      <div className="hidden border-b border-[var(--border)] bg-[var(--surface)] sm:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
              Comparing 1.7M+ prices
            </span>
            <span className="hidden text-[var(--text-subtle)] sm:inline">1,000+ NZ shops</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/help"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              Help Centre
            </Link>
            <Link
              href="/contact"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="hidden text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors sm:inline"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 min-h-[56px] items-center justify-between gap-3 sm:h-16 sm:gap-4">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2 py-2 -my-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--fern)] sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-[var(--foreground)] sm:text-xl">
                PriceSpy <span className="text-[var(--accent)]">NZ</span>
              </span>
            </Link>

            {/* Search - Desktop */}
            <form onSubmit={handleSearch} className="relative hidden flex-1 max-w-xl lg:block">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-muted)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search products across NZ stores..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search products"
                  className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] pl-12 pr-24 text-[var(--foreground)] placeholder:text-[var(--text-subtle)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-muted)] transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-[var(--accent)] px-4 py-1.5 text-sm font-semibold text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Main nav - Desktop */}
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--accent)] transition-colors"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setCategoryDropdownOpen(true)}
                onMouseLeave={() => setCategoryDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-muted)]"
                  aria-expanded={categoryDropdownOpen}
                  aria-haspopup="true"
                >
                  Categories
                  <svg className={`h-4 w-4 transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {categoryDropdownOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[220px] rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] py-2 shadow-xl">
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                        onClick={() => setCategoryDropdownOpen(false)}
                      >
                        All Deals
                      </Link>
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/category/${cat.slug}`}
                          className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                          onClick={() => setCategoryDropdownOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/how-it-works"
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--accent)] transition-colors"
              >
                How it Works
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full bg-[var(--success-muted)] px-3 py-1 text-xs font-medium text-[var(--success)] sm:inline-block">
                NZ Market
              </span>
              <Link
                href="/help"
                className="hidden rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors md:inline-block"
              >
                Help
              </Link>
              {/* Mobile menu button - 44px min touch target */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] active:bg-[var(--surface-elevated)] lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - full screen on small devices */}
        {mobileMenuOpen && (
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-[var(--border)] bg-[var(--surface)] lg:hidden">
            <div className="space-y-1 px-4 py-4 pb-8">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] pl-11 pr-4 text-base"
                    />
                    <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-[var(--accent)] px-4 font-semibold text-[var(--background)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-hover)]"
                  >
                    Search
                  </button>
                </div>
              </form>
              <Link href="/" className="block rounded-xl px-4 py-3.5 text-base font-medium active:bg-[var(--surface-elevated)]" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/how-it-works" className="block rounded-xl px-4 py-3.5 text-base font-medium active:bg-[var(--surface-elevated)]" onClick={() => setMobileMenuOpen(false)}>
                How it Works
              </Link>
              <div className="border-t border-[var(--border)] pt-3">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Categories</p>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="block rounded-xl px-4 py-3.5 text-base active:bg-[var(--surface-elevated)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-[var(--border)] pt-3">
                <Link href="/help" className="block rounded-xl px-4 py-3.5 text-base active:bg-[var(--surface-elevated)]" onClick={() => setMobileMenuOpen(false)}>Help Centre</Link>
                <Link href="/contact" className="block rounded-xl px-4 py-3.5 text-base active:bg-[var(--surface-elevated)]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Link href="/about" className="block rounded-xl px-4 py-3.5 text-base active:bg-[var(--surface-elevated)]" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
