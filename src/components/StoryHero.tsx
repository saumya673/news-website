import Link from "next/link";
import type { ReactNode } from "react";

import { icons } from "@/lib/svg/icons";
import { formatPublishedAt } from "@/lib/utils/news";
import type { LinkedArticle } from "@/types/news";

type StoryHeroTheme = "feature" | "home";

type StoryHeroProps = {
  article: LinkedArticle;
  backgroundClassName: string;
  badgeLabel: string;
  contentClassName: string;
  ctaClassName: string;
  gridClassName: string;
  innerClassName?: string;
  kicker?: string;
  media: ReactNode;
  outerClassName: string;
  supportingText?: string;
  theme: StoryHeroTheme;
  decorations?: ReactNode;
};

const heroThemeClasses = {
  home: {
    avatar:
      "flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-sm font-semibold text-hero-strong dark:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--header-accent)_24%,var(--hero-surface))_0%,color-mix(in_srgb,var(--hero-strong)_10%,var(--hero-surface))_100%)]",
    badge:
      "inline-flex h-6 items-center rounded-md bg-header-accent px-3 text-[12px] leading-4 font-bold tracking-[0.3px] text-white uppercase",
    excerpt:
      "max-w-141 text-base leading-7 text-hero-muted sm:text-[17px] sm:leading-6.75",
    metaPrimary: "text-sm leading-5 font-medium text-hero-strong",
    metaSecondary: "text-sm leading-5 text-hero-muted",
    title:
      "max-w-141 font-serif text-[2.25rem] leading-[1.08] font-bold tracking-[-0.03em] text-hero-strong transition-colors group-hover:text-header-accent sm:text-[3rem] sm:leading-13.25",
  },
  feature: {
    avatar:
      "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white",
    badge:
      "inline-flex rounded-full bg-header-accent px-3 py-1 text-xs font-semibold tracking-[0.025em] text-header-inverse uppercase",
    excerpt:
      "max-w-2xl text-lg leading-8 text-white/80 sm:text-[1.375rem] sm:leading-[1.7]",
    metaPrimary: "text-sm leading-5 font-semibold text-white",
    metaSecondary: "text-sm leading-5 text-white/70",
    title:
      "font-serif text-4xl leading-tight font-bold tracking-[-0.03em] text-white transition-colors group-hover:text-header-accent sm:text-5xl sm:leading-[1.15]",
  },
} satisfies Record<
  StoryHeroTheme,
  {
    avatar: string;
    badge: string;
    excerpt: string;
    metaPrimary: string;
    metaSecondary: string;
    title: string;
  }
>;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function StoryHero({
  article,
  backgroundClassName,
  badgeLabel,
  contentClassName,
  ctaClassName,
  decorations,
  gridClassName,
  innerClassName,
  kicker,
  media,
  outerClassName,
  supportingText,
  theme,
}: StoryHeroProps) {
  const ArrowRightIcon = icons.arrowRight;
  const themeClasses = heroThemeClasses[theme];

  return (
    <section className={backgroundClassName}>
      {decorations}

      <div className={outerClassName}>
        <div className={innerClassName}>
          <div className={gridClassName}>
            <div className={contentClassName}>
              <span className={themeClasses.badge}>{badgeLabel}</span>

              {kicker ? (
                <p className="mt-5 text-sm leading-6 font-medium tracking-[0.24em] text-white/60 uppercase">
                  {kicker}
                </p>
              ) : null}

              <div className="w-full">
                <Link href={article.href} className="group mt-3 block">
                  <h1 className={themeClasses.title}>{article.title}</h1>
                </Link>
              </div>

              <div className="w-full">
                <p className={themeClasses.excerpt}>{article.excerpt}</p>
              </div>

              {supportingText ? (
                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                  {supportingText}
                </p>
              ) : null}

              <div className="mt-8 flex items-center gap-4">
                <div className={themeClasses.avatar}>
                  {getInitials(article.author)}
                </div>
                <div className="min-w-0">
                  <p className={themeClasses.metaPrimary}>{article.author}</p>
                  <p className={themeClasses.metaSecondary}>
                    {formatPublishedAt(article.publishedAt)} | {article.readTime}
                  </p>
                </div>
              </div>

              <Link
                href={article.href}
                className={`mt-7 inline-flex items-center gap-1 text-sm leading-5 font-semibold transition-colors ${ctaClassName}`}
              >
                <span>Read More</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {media}
          </div>
        </div>
      </div>
    </section>
  );
}
