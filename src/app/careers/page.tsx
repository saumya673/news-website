const roles = [
  {
    title: "Senior Reporter",
    team: "Editorial",
    location: "Hybrid",
  },
  {
    title: "Audience Editor",
    team: "Growth",
    location: "Remote",
  },
  {
    title: "Visual Designer",
    team: "Product",
    location: "On-site",
  },
];

export default function CareersPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-header-accent">
            Careers
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-[-0.03em] text-foreground">
            Build the future of a modern newsroom
          </h1>
          <p className="max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
            These are placeholder openings for now, but this page is ready for
            a proper hiring feed whenever you want to wire one in.
          </p>
        </div>

        <div className="grid gap-4">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {role.team} . {role.location}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-header-accent px-4 text-sm font-medium text-header-inverse transition-colors hover:bg-header-accent-hover"
                >
                  View role
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
