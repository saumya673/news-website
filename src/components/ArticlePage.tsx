import Image from "next/image";
import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";
import { formatPublishedAt } from "@/lib/utils/news";
import type { LinkedArticle } from "@/types/news";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 0)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatSectionName(section: string) {
  return section.charAt(0).toUpperCase() + section.slice(1);
}

export default function ArticlePage({
  article,
  relatedArticles,
}: {
  article: LinkedArticle;
  relatedArticles: LinkedArticle[];
}) {
  const initials = getInitials(article.author);

  return (
    <div className="bg-background">
      <section className="bg-hero-surface">
        <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-30 lg:py-12">
          <div className="mx-auto w-full max-w-300 lg:px-6">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm leading-5 text-header-muted"
            >
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <span aria-hidden="true">&gt;</span>
              <Link
                href={`/${article.section}`}
                className="transition-colors hover:text-foreground"
              >
                {formatSectionName(article.section)}
              </Link>
              <span aria-hidden="true">&gt;</span>
              <span className="font-medium text-foreground">
                {article.title}
              </span>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,32rem)] lg:items-start lg:gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-header-accent px-3 py-1 text-xs font-semibold tracking-wide text-header-inverse uppercase">
                  {article.category}
                </span>

                <h1 className="mt-5 font-serif text-4xl leading-tight font-bold tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.1]">
                  {article.title}
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-header-muted sm:text-[1.375rem] sm:leading-[1.7]">
                  {article.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-sm font-semibold text-foreground dark:bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)]">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm leading-5 font-semibold text-foreground">
                      {article.author}
                    </p>
                    <p className="text-sm leading-5 text-header-muted">
                      {formatPublishedAt(article.publishedAt)} |{" "}
                      {article.readTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-background shadow-[0_18px_50px_color-mix(in_srgb,var(--foreground)_14%,transparent)]">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-30 lg:py-14">
        <div className="mx-auto w-full max-w-300 lg:px-6">
          <article className="max-w-3xl space-y-7 text-[1.0625rem] leading-8 text-foreground">
            {article.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {relatedArticles.length > 0 ? (
            <section className="mt-14">
              <div className="flex items-center gap-3">
                <h2 className="shrink-0 font-serif text-2xl leading-8 font-bold tracking-[-0.03em] text-foreground">
                  Related Articles
                </h2>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--foreground)_12%,transparent)]" />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                    variant="related"
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
}
