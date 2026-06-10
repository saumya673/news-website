export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-header-accent">
            About
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-[-0.03em] text-foreground">
            Journalism with context, clarity, and accountability
          </h1>
          <p className="max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
            The Herald is a modern newsroom focused on reporting that helps
            readers understand what happened, why it matters, and what comes
            next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-lg font-semibold text-foreground">Mission</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              We publish independent reporting across world affairs, business,
              technology, and culture with an emphasis on signal over noise.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-lg font-semibold text-foreground">Editorial</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Our coverage prioritizes verified facts, sharp analysis, and a
              clear separation between reporting, commentary, and sponsored
              content.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-lg font-semibold text-foreground">Audience</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              We write for readers who want concise, credible updates without
              losing the deeper context behind major stories.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
