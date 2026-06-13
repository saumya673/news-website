import Image from "next/image";
import Link from "next/link";

import { getTopStories } from "@/lib/api/news";

export function TopStoriesSkeleton() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:px-12 md:py-12 lg:px-30 lg:py-12">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-6 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="h-8 w-40 rounded bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
            <div className="h-5 w-16 rounded bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)]"
              >
                <div className="aspect-368/230 w-full bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]" />

                <div className="flex animate-pulse flex-col gap-4 px-6 py-6">
                  <div className="h-4 w-20 rounded bg-[color-mix(in_srgb,var(--header-accent)_30%,transparent)]" />
                  <div className="space-y-2">
                    <div className="h-8 w-full rounded bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
                    <div className="h-8 w-5/6 rounded bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
                    <div className="h-5 w-full rounded bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]" />
                    <div className="h-5 w-11/12 rounded bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function TopStories() {
  const topStories = await getTopStories();

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:px-12 md:py-12 lg:px-30 lg:py-12">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-6 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-[1.75rem] leading-8 font-bold tracking-[-0.03em] text-foreground sm:text-[2rem]">
              Top Stories
            </h2>

            <Link
              href="/"
              className="text-sm leading-5 font-medium text-header-muted transition-colors hover:text-header-strong"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {topStories.length === 0 ? (
              <div className="rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] px-6 py-8 text-sm leading-6 text-header-muted md:col-span-2 xl:col-span-3">
                No top stories are available from the mock API right now.
              </div>
            ) : null}

            {topStories.map((story) => (
              <article key={story.id}>
                <Link
                  href={story.href}
                  className="group block overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)] transition-transform hover:-translate-y-0.5"
                >
                  <div className="relative aspect-368/230 w-full">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(min-width: 1280px) 368px, (min-width: 768px) calc((100vw - 8rem) / 2), 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-col gap-4 px-6 py-6">
                    <p className="text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase">
                      {story.category}
                    </p>

                    <div className="space-y-2">
                      <h3 className="font-serif text-[1.75rem] leading-8 font-bold tracking-[-0.03em] text-foreground transition-colors group-hover:text-header-accent">
                        {story.title}
                      </h3>

                      <p className="text-sm leading-[1.55rem] text-header-muted">
                        {story.excerpt}
                      </p>
                    </div>
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
