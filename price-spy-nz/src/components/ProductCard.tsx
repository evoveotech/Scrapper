"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cheapestOffer = product.offers[0];
  const hasDiscount = cheapestOffer.originalPrice && cheapestOffer.originalPrice > cheapestOffer.price;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <article className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)] hover:shadow-[0_0_40px_-10px_var(--accent-muted)] active:scale-[0.99] touch-manipulation">
        <div className="flex gap-3 sm:gap-4">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-[var(--surface-elevated)] sm:h-24 sm:w-24">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="96px"
            />
            {hasDiscount && (
              <span className="absolute left-2 top-2 rounded-md bg-[var(--success)] px-2 py-0.5 text-xs font-semibold text-white">
                SAVE
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              {product.brand}
            </p>
            <h3 className="mt-0.5 line-clamp-2 font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              {product.name}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-base font-bold text-[var(--accent)] sm:text-lg">
                {formatPrice(product.lowestPrice)}
              </span>
              {product.retailerCount > 1 && (
                <span className="text-sm text-[var(--text-muted)]">
                  from {product.retailerCount} stores
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-[var(--text-subtle)] line-clamp-1">
              Best price: {cheapestOffer.retailerName}
            </p>
          </div>

          <div className="hidden flex-shrink-0 items-center sm:flex">
            <svg
              className="h-5 w-5 text-[var(--text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
