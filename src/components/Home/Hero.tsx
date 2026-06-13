import Image from "next/image";
import Link from "next/link";

import { icons } from "@/lib/svg/icons";

const article = {
  category: "World",
  title: "Global Leaders Convene as Climate Deadline Looms",
  description:
    "Delegates from over 190 nations gathered this week to negotiate sweeping emissions targets, as scientists warn the window to avert irreversible damage is rapidly closing.",
  author: "Eleanor Hayes",
  publishedAt: "June 12, 2025",
  href: "/world",
  image: {
    src: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=1200&q=80",
    alt: "World leaders seated in a summit discussion under bright conference lights.",
  },
};

export default function Hero() {
  const ArrowRightIcon = icons.arrowRight;

  return (
    <section className="bg-hero-surface">
      <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:px-12 md:py-12 lg:px-30 lg:py-12">
        <div className="mx-auto w-full max-w-300">
          <div className="grid w-full gap-10 lg:min-h-105.75 lg:grid-cols-[minmax(0,35.25rem)_minmax(0,35.25rem)] lg:items-center lg:gap-6 lg:px-6">
            <div className="flex flex-col items-start gap-6 lg:max-w-141 lg:gap-[1.46875rem]">
              <span className="inline-flex h-6 items-center rounded-md bg-header-accent px-3 text-[12px] leading-4 font-bold tracking-[0.3px] text-white uppercase">
                {article.category}
              </span>

              <div className="w-full">
                <h1 className="max-w-141 font-serif text-[2.25rem] leading-[1.08] font-bold tracking-[-0.03em] text-hero-strong sm:text-[3rem] sm:leading-13.25">
                  {article.title}
                </h1>
              </div>

              <div className="w-full">
                <p className="max-w-141 text-base leading-7 text-hero-muted sm:text-[17px] sm:leading-6.75">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-sm font-semibold text-hero-strong dark:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--header-accent)_24%,var(--hero-surface))_0%,color-mix(in_srgb,var(--hero-strong)_10%,var(--hero-surface))_100%)]">
                  EH
                </div>

                <div className="min-w-0">
                  <p className="text-sm leading-5 font-medium text-hero-strong">
                    {article.author}
                  </p>
                  <p className="text-sm leading-5 text-hero-muted">
                    {article.publishedAt}
                  </p>
                </div>
              </div>

              <Link
                href={article.href}
                className="inline-flex items-center gap-1 text-sm leading-5 font-semibold text-header-accent transition-colors hover:text-header-accent-hover"
              >
                <span>Read More</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative w-full overflow-hidden rounded-lg lg:h-105.75 lg:w-full">
              <div className="relative aspect-564/423 w-full lg:h-full">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,var(--hero-image-overlay-start)_0%,var(--hero-image-overlay-end)_55%)] dark:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
