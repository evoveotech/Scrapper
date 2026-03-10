import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "How it Works",
  description: "Learn how PriceSpy NZ compares prices and helps you find the best deals.",
};

const steps = [
  {
    title: "Search",
    description: "Search for any product—phones, laptops, appliances, or anything else. We have over 1.7 million products in our database.",
    icon: "🔍",
  },
  {
    title: "Compare",
    description: "See prices from 1,000+ NZ retailers side by side. We sort by lowest price first so the best deal is always at the top.",
    icon: "📊",
  },
  {
    title: "Save",
    description: "Click through to the retailer with the best price. You buy directly from them—we never charge you anything.",
    icon: "💰",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How it Works" }]} />
      <article>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          How it Works
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Finding the best price in NZ is simple. Here&apos;s how we help you save.
        </p>

        <div className="mt-12 space-y-12">
          {steps.map((step, i) => (
            <section key={i} className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-2xl">
                {step.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                  {i + 1}. {step.title}
                </h2>
                <p className="mt-2 text-[var(--text-muted)] leading-relaxed">{step.description}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Ready to find a deal?</h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Start searching for products and compare prices across NZ retailers.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors"
          >
            Browse Deals
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
