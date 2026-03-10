import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Cookie Policy",
  description: "PriceSpy NZ Cookie Policy - How we use cookies.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      <article>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Cookie Policy</h1>
        <p className="mt-4 text-sm text-[var(--text-subtle)]">Last updated: March 2025</p>
        <div className="mt-8 space-y-6 text-[var(--text-muted)]">
          <p className="leading-relaxed">
            We use cookies and similar technologies to improve your experience, analyse site traffic,
            and personalise content. Essential cookies are required for the site to function. Analytics
            cookies help us understand how visitors use our site. You can manage your cookie
            preferences in your browser settings.
          </p>
        </div>
      </article>
    </div>
  );
}
