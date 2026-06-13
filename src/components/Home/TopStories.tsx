import Image from "next/image";
import Link from "next/link";

const topStories = [
  {
    category: "Tech",
    title: "The Quiet Revolution Inside AI Chip Foundries",
    description:
      "A new generation of semiconductors promises to reshape how data centers consume power across the globe.",
    href: "/tech",
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      alt: "Close-up of an illuminated circuit board with dense chip patterns.",
    },
  },
  {
    category: "Business",
    title: "Markets Rally as Central Banks Signal Rate Pause",
    description:
      "Investors cheered fresh inflation data, sending major indices to record highs in early trading.",
    href: "/business",
    image: {
      src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      alt: "Trading charts and market data displayed across multiple monitors.",
    },
  },
  {
    category: "Culture",
    title: "Inside the Year's Most Talked-About Retrospective",
    description:
      "A sprawling new exhibition reframes a forgotten movement for a contemporary audience.",
    href: "/culture",
    image: {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "A visitor standing in a gallery surrounded by framed artworks.",
    },
  },
] as const;

export default function TopStories() {
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
            {topStories.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)]"
              >
                <Link href={story.href} className="block">
                  <div className="relative aspect-368/230 w-full">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(min-width: 1280px) 368px, (min-width: 768px) calc((100vw - 8rem) / 2), 100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex flex-col gap-4 px-6 py-6">
                  <p className="text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase">
                    {story.category}
                  </p>

                  <div className="space-y-2">
                    <h3 className="font-serif text-[1.75rem] leading-8 font-bold tracking-[-0.03em] text-foreground">
                      <Link
                        href={story.href}
                        className="transition-colors hover:text-header-accent"
                      >
                        {story.title}
                      </Link>
                    </h3>

                    <p className="text-sm leading-[1.55rem] text-header-muted">
                      {story.description}
                    </p>
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
