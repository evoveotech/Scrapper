import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with PriceSpy NZ. We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <article>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">General Enquiries</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              For general questions about our service or how we work.
            </p>
            <a
              href="mailto:hello@pricespy.co.nz"
              className="mt-4 inline-block font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              hello@pricespy.co.nz
            </a>
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Retailer Partnerships</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Interested in listing your products on PriceSpy NZ?
            </p>
            <a
              href="mailto:retailers@pricespy.co.nz"
              className="mt-4 inline-block font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              retailers@pricespy.co.nz
            </a>
          </section>

          <section id="report" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 scroll-mt-24">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Report a Problem</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Found incorrect pricing or a broken link? Let us know.
            </p>
            <a
              href="mailto:support@pricespy.co.nz"
              className="mt-4 inline-block font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              support@pricespy.co.nz
            </a>
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Help Centre</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Browse our FAQ and guides for quick answers.
            </p>
            <a
              href="/help"
              className="mt-4 inline-block font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              Visit Help Centre →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
