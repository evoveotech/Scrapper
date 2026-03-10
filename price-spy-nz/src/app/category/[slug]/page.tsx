import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { products, categories } from "@/data/products";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          {category.name}
        </h1>
        <p className="mt-2 text-[var(--text-muted)]">
          {categoryProducts.length} products • Compare prices across NZ retailers
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
