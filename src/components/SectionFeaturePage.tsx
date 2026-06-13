import Link from "next/link";
import type { ReactNode } from "react";

import ArticleCard from "@/components/ArticleCard";
import StoryHero from "@/components/StoryHero";
import type { LinkedArticle } from "@/types/news";

export type SectionPageConfig = {
  accentLinkClassName: string;
  description: string;
  heroArtwork: ReactNode;
  heroGlowClasses: readonly string[];
  label: string;
  newsletterDescription: string;
  slug: string;
};

export default function SectionFeaturePage({
  config,
  featuredArticle,
  relatedArticles,
  sectionArticles,
}: {
  config: SectionPageConfig;
  featuredArticle: LinkedArticle;
  relatedArticles: LinkedArticle[];
  sectionArticles: LinkedArticle[];
}) {
  const sidebarArticles =
    relatedArticles.length > 0 ? relatedArticles : sectionArticles;

  return (
    <div className="bg-background">
      <StoryHero
        article={featuredArticle}
        backgroundClassName="relative overflow-hidden bg-hero-surface text-hero-strong dark:bg-[#0b0d1a] dark:text-white"
        badgeLabel={config.label}
        contentClassName="max-w-3xl"
        ctaClassName={config.accentLinkClassName}
        decorations={config.heroGlowClasses.map((className) => (
          <div key={className} className={className} />
        ))}
        gridClassName="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-12"
        media={
          <Link href={featuredArticle.href} className="group block">
            <div className="transition-transform duration-300 group-hover:scale-[1.01]">
              {config.heroArtwork}
            </div>
          </Link>
        }
        outerClassName="relative mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-30 lg:py-12"
        supportingText={config.description}
        theme="feature"
      />

      <section className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-30 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
          <div className="max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm leading-5 text-footer-muted"
            >
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <span>&gt;</span>
              <span className="font-medium text-foreground">
                {config.label}
              </span>
            </nav>

            <div className="mt-8 flex items-center gap-3">
              <h2 className="shrink-0 font-serif text-2xl leading-8 font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
                Latest In {config.label}
              </h2>
              <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--foreground)_12%,transparent)]" />
            </div>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-footer-muted sm:text-base">
              Every story below links to the full article page.
            </p>

            {sectionArticles.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {sectionArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="section"
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-xl border border-header-border bg-background px-6 py-8 text-sm leading-6 text-footer-muted shadow-sm">
                No additional stories are available in{" "}
                {config.label.toLowerCase()} right now.
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <section aria-labelledby={`${config.slug}-related-articles`}>
              <h2
                id={`${config.slug}-related-articles`}
                className="text-2xl leading-7 font-bold text-foreground"
              >
                Related Reads
              </h2>

              <div className="mt-4 overflow-hidden rounded-xl border border-header-border bg-background shadow-sm">
                {sidebarArticles.length > 0 ? (
                  sidebarArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="compact"
                    />
                  ))
                ) : (
                  <div className="px-5 py-6 text-sm leading-6 text-footer-muted">
                    More reporting for this section is coming soon.
                  </div>
                )}
              </div>
            </section>

            <section className="mt-8 rounded-xl border border-header-border bg-footer-surface p-6 shadow-sm">
              <h2 className="text-2xl leading-7 font-bold text-foreground">
                Newsletter Signup
              </h2>
              <p className="mt-2 text-sm leading-6 text-footer-muted">
                {config.newsletterDescription}
              </p>

              <form className="mt-5 space-y-3">
                <label
                  htmlFor={`${config.slug}-newsletter-email`}
                  className="sr-only"
                >
                  Email address
                </label>
                <input
                  id={`${config.slug}-newsletter-email`}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-header-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-footer-muted focus:border-header-accent"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-header-accent px-4 py-2.5 text-sm font-medium text-header-inverse shadow-sm transition-colors hover:bg-header-accent-hover"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}
