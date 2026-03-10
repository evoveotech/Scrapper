import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Careers",
  description: "Join the PriceSpy NZ team.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
      <article>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Careers</h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          We&apos;re always looking for talented people to join our team. Check back soon for open
          positions.
        </p>
        <p className="mt-6 text-[var(--text-muted)]">
          In the meantime, send your CV to{" "}
          <a href="mailto:careers@pricespy.co.nz" className="text-[var(--accent)] hover:underline">
            careers@pricespy.co.nz
          </a>
        </p>
      </article>
    </div>
  );
}
