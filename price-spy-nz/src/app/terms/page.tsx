import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service",
  description: "PriceSpy NZ Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
      <article>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Terms of Service</h1>
        <p className="mt-4 text-sm text-[var(--text-subtle)]">Last updated: March 2025</p>
        <div className="mt-8 space-y-6 text-[var(--text-muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">1. Acceptance of Terms</h2>
            <p className="mt-2 leading-relaxed">
              By using PriceSpy NZ, you agree to these Terms of Service. If you do not agree, please
              do not use our service.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">2. Service Description</h2>
            <p className="mt-2 leading-relaxed">
              PriceSpy NZ provides price comparison information for products available from NZ retailers.
              We aggregate publicly available pricing data. Purchases are made directly with retailers—
              we are not a retailer and do not process transactions.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">3. Accuracy of Information</h2>
            <p className="mt-2 leading-relaxed">
              While we strive for accuracy, prices and availability can change. Always verify details
              on the retailer&apos;s website before purchasing. We are not liable for any discrepancies.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
