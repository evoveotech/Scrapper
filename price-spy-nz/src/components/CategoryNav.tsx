"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/products";

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[var(--border)] bg-[var(--surface)]/50" aria-label="Product categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          <Link
            href="/"
            className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors touch-manipulation ${
              pathname === "/"
                ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                : "text-[var(--text-muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)] active:bg-[var(--surface-elevated)]"
            }`}
          >
            All Deals
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors touch-manipulation ${
                pathname === `/category/${cat.slug}`
                  ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)] active:bg-[var(--surface-elevated)]"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
