import Image from "next/image";
import Link from "next/link";

const editorPicks = [
  {
    category: "Urban",
    title: "How Cities Are Rethinking the Skyline",
    href: "/world",
    image: {
      src: "https://picsum.photos/seed/editor-pick-urban/1200/825",
      alt: "Modern city skyline with glass towers rising behind lower buildings.",
    },
  },
  {
    category: "Climate",
    title: "The Movement Reshaping Policy from the Streets",
    href: "/business",
    image: {
      src: "https://picsum.photos/seed/editor-pick-climate/1200/825",
      alt: "Crowd of climate protesters holding hand-painted signs in a city street.",
    },
  },
  {
    category: "Science",
    title: "Breakthrough Lab Results Challenge Old Theories",
    href: "/tech",
    image: {
      src: "https://picsum.photos/seed/editor-pick-science/1200/825",
      alt: "Scientist handling lab samples over a row of test tubes.",
    },
  },
  {
    category: "Space",
    title: "New Telescope Captures the Deepest View Yet",
    href: "/culture",
    image: {
      src: "https://picsum.photos/seed/editor-pick-space/1200/825",
      alt: "Dense field of stars and galaxies across a dark night sky.",
    },
  },
] as const;

export default function EditorPicks() {
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
            {editorPicks.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)]"
              >
                <Link href={story.href} className="block">
                  <div className="relative aspect-[270/185.63] w-full">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(min-width: 1280px) 270px, (min-width: 640px) calc((100vw - 7rem) / 2), 100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex flex-col gap-3 px-4 py-4">
                  <p className="text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase">
                    {story.category}
                  </p>

                  <h3 className="font-serif text-[1.125rem] leading-6.25 font-bold tracking-[-0.02em] text-foreground">
                    <Link
                      href={story.href}
                      className="transition-colors hover:text-header-accent"
                    >
                      {story.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
