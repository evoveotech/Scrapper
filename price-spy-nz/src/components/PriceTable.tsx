"use client";

import type { PriceOffer } from "@/types/product";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface PriceTableProps {
  offers: PriceOffer[];
  lowestPrice: number;
}

export function PriceTable({ offers, lowestPrice }: PriceTableProps) {
  const sortedOffers = [...offers].sort((a, b) => a.price - b.price);

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 sm:px-6 sm:py-4">
        <h3 className="font-semibold text-[var(--foreground)]">Compare prices across NZ retailers</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {offers.length} stores • Sorted by lowest price
        </p>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {sortedOffers.map((offer, i) => {
          const isCheapest = offer.price === lowestPrice;
          const hasDiscount = offer.originalPrice && offer.originalPrice > offer.price;

          return (
            <a
              key={offer.retailerId}
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex min-h-[44px] flex-col gap-2 px-4 py-3 transition-colors hover:bg-[var(--surface-elevated)] active:bg-[var(--surface-elevated)] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4 ${
                isCheapest ? "bg-[var(--accent-muted)]/30" : ""
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                    isCheapest
                      ? "bg-[var(--accent)] text-[var(--background)]"
                      : "bg-[var(--surface-elevated)] text-[var(--text-muted)]"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-[var(--foreground)]">{offer.retailerName}</p>
                  {hasDiscount && (
                    <p className="text-sm text-[var(--text-muted)] line-through">
                      {formatPrice(offer.originalPrice!)}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 pl-11 sm:pl-0 sm:gap-3">
                {isCheapest && (
                  <span className="rounded-full bg-[var(--success-muted)] px-2.5 py-1 text-xs font-semibold text-[var(--success)]">
                    BEST PRICE
                  </span>
                )}
                <span
                  className={`font-mono text-base font-bold sm:text-lg ${
                    isCheapest ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                  }`}
                >
                  {formatPrice(offer.price)}
                </span>
                <svg
                  className="h-5 w-5 shrink-0 text-[var(--text-muted)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
