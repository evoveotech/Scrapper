import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy",
  description: "PriceSpy NZ Privacy Policy - How we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <article className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--text-subtle)]">Last updated: March 2025</p>
        <div className="mt-8 space-y-6 text-[var(--text-muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">1. Information We Collect</h2>
            <p className="mt-2 leading-relaxed">
              We collect information you provide directly, such as when you search for products, sign up for
              newsletters, or contact us. We also automatically collect certain information when you visit
              our site, including IP address, browser type, and pages viewed.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">2. How We Use Your Information</h2>
            <p className="mt-2 leading-relaxed">
              We use your information to provide and improve our price comparison service, send you
              relevant deal alerts (with your consent), and understand how our site is used.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">3. Data Sharing</h2>
            <p className="mt-2 leading-relaxed">
              We do not sell your personal information. We may share data with service providers who
              help us operate our site, subject to strict confidentiality agreements.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">4. Your Rights</h2>
            <p className="mt-2 leading-relaxed">
              You have the right to access, correct, or delete your personal data. Contact us at
              privacy@pricespy.co.nz to exercise these rights.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
