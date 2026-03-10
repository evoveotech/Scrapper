import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "News & Blog",
  description: "Latest news and deal guides from PriceSpy NZ.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News & Blog" }]} />
      <article>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">News & Blog</h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Stay tuned for deal guides, product roundups, and shopping tips.
        </p>
      </article>
    </div>
  );
}
