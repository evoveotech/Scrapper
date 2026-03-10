import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, categories } from "@/data/products";
import { PriceTable } from "@/components/PriceTable";
import { Breadcrumbs } from "@/components/Breadcrumbs";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const cheapestOffer = product.offers[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: product.category, href: `/category/${categories.find((c) => c.id === product.categoryId)?.slug ?? "computers"}` },
          { label: product.name },
        ]}
      />

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Product info */}
        <div className="space-y-4 sm:space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] sm:rounded-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
              {product.brand}
            </p>
            <h1 className="mt-1 text-xl font-bold text-[var(--foreground)] sm:text-2xl md:text-3xl">
              {product.name}
            </h1>
            {product.description && (
              <p className="mt-4 text-[var(--text-muted)]">{product.description}</p>
            )}
          </div>
        </div>

        {/* Price comparison */}
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:rounded-2xl sm:p-6">
            <p className="text-sm font-medium text-[var(--text-muted)]">Best price in NZ</p>
            <p className="mt-1 font-mono text-3xl font-bold text-[var(--accent)] sm:text-4xl">
              {formatPrice(product.lowestPrice)}
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              at {cheapestOffer.retailerName} • {product.retailerCount} stores compared
            </p>
            {product.highestPrice > product.lowestPrice && (
              <p className="mt-2 text-sm text-[var(--text-subtle)]">
                Price range: {formatPrice(product.lowestPrice)} – {formatPrice(product.highestPrice)}
              </p>
            )}
            <a
              href={cheapestOffer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-4 font-semibold text-[var(--background)] transition-colors hover:bg-[var(--accent-hover)] active:bg-[var(--accent-hover)] touch-manipulation sm:mt-6"
            >
              Get best deal
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <PriceTable offers={product.offers} lowestPrice={product.lowestPrice} />
        </div>
      </div>
    </div>
  );
}
