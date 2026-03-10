import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { products } from "@/data/products";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q || "").toLowerCase().trim();

  const filteredProducts = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    : products;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: query ? `Search: "${query}"` : "Search" }]} />
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          {query ? `Results for "${q}"` : "All products"}
        </h1>
        <p className="mt-2 text-[var(--text-muted)]">
          {filteredProducts.length} products found
        </p>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center">
          <p className="text-[var(--text-muted)]">No products found for "{q}"</p>
          <p className="mt-2 text-sm text-[var(--text-subtle)]">
            Try a different search term or browse categories
          </p>
        </div>
      )}
    </div>
  );
}
