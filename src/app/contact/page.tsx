const contactItems = [
  {
    label: "Editorial desk",
    value: "editorial@theherald.example",
  },
  {
    label: "Press inquiries",
    value: "press@theherald.example",
  },
  {
    label: "Reader support",
    value: "support@theherald.example",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-header-accent">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-[-0.03em] text-foreground">
            Reach the newsroom
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
            This is placeholder contact information for the footer route. It
            can later be replaced with a real contact form, office address, or
            department directory.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-lg font-semibold text-foreground">
            Contact details
          </h2>
          <div className="mt-4 space-y-4">
            {contactItems.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-medium text-foreground">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
