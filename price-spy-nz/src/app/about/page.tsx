import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "About Us",
  description: "Learn about PriceSpy NZ - New Zealand's trusted price comparison service.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <article>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          About PriceSpy NZ
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          We help Kiwis find the best deals across New Zealand&apos;s retail landscape.
        </p>

        <section className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Our Mission</h2>
            <p className="mt-3 text-[var(--text-muted)] leading-relaxed">
              PriceSpy NZ exists to empower New Zealand consumers with transparent, unbiased price
              information. We compare over 1.7 million products from 1,000+ NZ retailers so you can
              make informed purchasing decisions and never overpay.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">How We Compare</h2>
            <p className="mt-3 text-[var(--text-muted)] leading-relaxed">
              Our platform aggregates prices from major NZ retailers in real-time. We display all
              available options sorted by price—no paid placements, no favouritism. The cheapest
              option is always highlighted so you can find the best deal quickly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Our Values</h2>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              <li className="flex gap-2">
                <span className="text-[var(--accent)]">•</span>
                <strong>Transparency:</strong> We show all prices without bias.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)]">•</span>
                <strong>Accuracy:</strong> We update prices regularly to keep data current.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)]">•</span>
                <strong>Trust:</strong> We never sell placement—retailers cannot pay to rank higher.
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
