"use client";

export function NewsletterSignup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
  };

  return (
    <form className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:gap-2 lg:shrink-0" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className="h-12 min-h-[48px] flex-1 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-base text-[var(--foreground)] placeholder:text-[var(--text-subtle)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-muted)]"
      />
      <button
        type="submit"
        className="h-12 min-h-[48px] rounded-xl bg-[var(--accent)] px-6 font-semibold text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface-elevated)] active:bg-[var(--accent-hover)]"
      >
        Subscribe
      </button>
    </form>
  );
}
