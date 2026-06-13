import Image from "next/image";
import Link from "next/link";

import { getEditorPicks } from "@/lib/api/news";

export default async function EditorPicks() {
  const editorPicks = await getEditorPicks();

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:px-12 md:py-12 lg:px-30">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-6 lg:px-6">
          <div className="flex items-center gap-3">
            <h2 className="shrink-0 font-serif text-2xl leading-8 font-bold tracking-[-0.03em] text-foreground">
              Editor&apos;s Picks
            </h2>
            <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--foreground)_12%,transparent)]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {editorPicks.length === 0 ? (
              <div className="rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] px-6 py-8 text-sm leading-6 text-header-muted sm:col-span-2 xl:col-span-4">
                No editor&apos;s picks are available from the mock API right now.
              </div>
            ) : null}

            {editorPicks.map((story) => (
              <article key={story.id}>
                <Link
                  href={story.href}
                  className="group block overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)] transition-transform hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[270/185.63] w-full">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(min-width: 1280px) 270px, (min-width: 640px) calc((100vw - 7rem) / 2), 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-col gap-3 px-4 py-4">
                    <p className="text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase">
                      {story.category}
                    </p>

                    <h3 className="font-serif text-[1.125rem] leading-6.25 font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-header-accent">
                      {story.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
