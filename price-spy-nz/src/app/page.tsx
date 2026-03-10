import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="mb-10 sm:mb-16">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface-elevated)] to-[var(--surface)] p-6 sm:rounded-3xl sm:p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-muted),transparent)]" />
          <div className="relative">
            <span className="inline-block rounded-full bg-[var(--fern-muted)] px-4 py-1.5 text-sm font-medium text-[var(--accent)]">
              Compare & Save
            </span>
            <h1 id="hero-heading" className="mt-3 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-4xl md:text-5xl">
              Find the best deals on
              <span className="block bg-gradient-to-r from-[var(--accent)] to-[var(--fern)] bg-clip-text text-transparent">
                PriceSpy NZ
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)] sm:mt-4 sm:text-lg">
              Compare over 1.7 million prices from 1,000+ NZ shops. We show you the cheapest
              available option so you never overpay.
            </p>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section aria-labelledby="value-props" className="mb-10 sm:mb-16">
        <h2 id="value-props" className="sr-only">Why choose PriceSpy NZ</h2>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:rounded-2xl sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-muted)] text-2xl">📊</div>
            <h3 className="mt-4 font-semibold text-[var(--foreground)]">Unbiased Comparison</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">No paid placements. Prices sorted by lowest first.</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:rounded-2xl sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-muted)] text-2xl">🇳🇿</div>
            <h3 className="mt-4 font-semibold text-[var(--foreground)]">NZ Market Only</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">All prices from NZ retailers. No shipping surprises.</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:rounded-2xl sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-muted)] text-2xl">🆓</div>
            <h3 className="mt-4 font-semibold text-[var(--foreground)]">Free to Use</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">No signup required. Compare and save instantly.</p>
          </div>
        </div>
      </section>

      {/* Quick category links */}
      <section aria-labelledby="categories" className="mb-10 sm:mb-16">
        <h2 id="categories" className="mb-3 text-base font-semibold text-[var(--foreground)] sm:mb-4 sm:text-lg">Browse by category</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] active:bg-[var(--surface-elevated)] transition-colors touch-manipulation sm:rounded-xl sm:px-5 sm:py-3"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section aria-labelledby="top-deals">
        <div className="mb-4 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="top-deals" className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">Top Deals</h2>
          <span className="text-sm text-[var(--text-muted)]">
            {products.length} products • Sorted by best value
          </span>
        </div>
        <div className="animate-stagger grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
