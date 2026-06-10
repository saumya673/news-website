const pressNotes = [
  "Brand assets and executive bios available on request",
  "Interview requests reviewed during business hours",
  "Embargoed announcements handled through the communications team",
];

export default function PressPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-header-accent">
            Press
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-[-0.03em] text-foreground">
            Media resources and newsroom updates
          </h1>
          <p className="max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
            This placeholder press page gives your footer route a usable
            destination until you add a real media kit or press release archive.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-lg font-semibold text-foreground">
            For journalists and partners
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            {pressNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
