import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "For Retailers",
  description: "List your products on PriceSpy NZ and reach more customers.",
};

export default function RetailersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "For Retailers" }]} />
      <article>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">For Retailers</h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Reach millions of price-conscious Kiwi shoppers. List your products on NZ&apos;s leading
          price comparison platform.
        </p>
        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Get in touch</h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Contact our partnerships team to learn about listing your products.
          </p>
          <a
            href="mailto:retailers@pricespy.co.nz"
            className="mt-6 inline-block font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            retailers@pricespy.co.nz
          </a>
        </div>
      </article>
    </div>
  );
}
