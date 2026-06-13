import Image from "next/image";
import Link from "next/link";

import StoryHero from "@/components/StoryHero";
import { getHeroStory } from "@/lib/api/news";

export default async function Hero() {
  const article = await getHeroStory();

  if (!article) {
    return null;
  }

  return (
    <StoryHero
      article={article}
      backgroundClassName="bg-hero-surface"
      badgeLabel={article.category}
      contentClassName="flex flex-col items-start gap-6 lg:max-w-141 lg:gap-[1.46875rem]"
      ctaClassName="text-header-accent hover:text-header-accent-hover"
      gridClassName="grid w-full gap-10 lg:min-h-105.75 lg:grid-cols-[minmax(0,35.25rem)_minmax(0,35.25rem)] lg:items-center lg:gap-6 lg:px-6"
      innerClassName="mx-auto w-full max-w-300"
      media={
        <Link
          href={article.href}
          className="group relative block w-full overflow-hidden rounded-lg lg:h-105.75 lg:w-full"
        >
          <div className="relative aspect-564/423 w-full lg:h-full">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              preload
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,var(--hero-image-overlay-start)_0%,var(--hero-image-overlay-end)_55%)] dark:block" />
          </div>
        </Link>
      }
      outerClassName="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:px-12 md:py-12 lg:px-30 lg:py-12"
      theme="home"
    />
  );
}
