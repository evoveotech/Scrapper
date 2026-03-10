import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Help Centre",
  description: "Find answers to common questions about PriceSpy NZ.",
};

const faqs = [
  {
    q: "How does PriceSpy NZ work?",
    a: "We collect prices from 1,000+ NZ retailers and display them in one place. You can search for any product, compare prices across stores, and click through to buy from the retailer offering the best deal.",
  },
  {
    q: "Are the prices accurate?",
    a: "We update our prices regularly throughout the day. However, prices can change at any time. Always confirm the final price on the retailer's website before purchasing.",
  },
  {
    q: "Do retailers pay to appear first?",
    a: "No. We never accept payment for placement. Prices are always sorted by lowest first. Our goal is to help you find the cheapest option, not to favour any particular retailer.",
  },
  {
    q: "How do I set up a price alert?",
    a: "Price alerts are coming soon. Subscribe to our newsletter to be notified when this feature launches, and we'll send you weekly deal roundups in the meantime.",
  },
  {
    q: "I found an error. How do I report it?",
    a: "Please contact us at support@pricespy.co.nz with the product name, retailer, and details of the issue. We'll investigate and update as soon as possible.",
  },
];

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Help Centre" }]} />
      <article>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Help Centre
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Find answers to common questions. Can&apos;t find what you need?{" "}
          <Link href="/contact" className="font-medium text-[var(--accent)] hover:underline">
            Contact us
          </Link>
          .
        </p>

        <section id="faq" className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                id={faq.q.toLowerCase().includes("price alert") ? "alerts" : undefined}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 scroll-mt-24"
              >
                <h3 className="font-semibold text-[var(--foreground)]">{faq.q}</h3>
                <p className="mt-2 text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
