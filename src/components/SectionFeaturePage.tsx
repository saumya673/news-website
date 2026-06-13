import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { icons } from "@/lib/svg/icons";

type RelatedArticle = {
  href: string;
  image: {
    src: string;
    alt: string;
  };
  publishedAt: string;
  title: string;
};

export type SectionFeaturePageData = {
  author: string;
  category: string;
  closing: string[];
  excerpt: string;
  figureCredit: string;
  heroArtwork: ReactNode;
  heroGlowClasses: readonly string[];
  intro: string[];
  newsletterDescription: string;
  publishedAt: string;
  quote: string;
  readMoreClassName: string;
  readTime: string;
  relatedArticles: readonly RelatedArticle[];
  sectionHeading: string;
  slug: string;
  title: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function RelatedArticleCard({
  href,
  image,
  publishedAt,
  title,
}: RelatedArticle) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 border-b border-header-border p-4 transition-colors last:border-b-0 hover:bg-header-hover"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-lg">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <h3 className="line-clamp-2 text-sm leading-5 font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-4 text-footer-muted">{publishedAt}</p>
      </div>
    </Link>
  );
}

export default function SectionFeaturePage({
  data,
}: {
  data: SectionFeaturePageData;
}) {
  const ArrowRightIcon = icons.arrowRight;
  const initials = getInitials(data.author);
  const storyId = `${data.slug}-story`;

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-[#0b0d1a] text-white">
        {data.heroGlowClasses.map((className) => (
          <div key={className} className={className} />
        ))}

        <div className="relative mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-30 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-12">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-header-accent px-3 py-1 text-xs font-semibold tracking-[0.025em] text-header-inverse uppercase">
                {data.category}
              </span>

              <h1 className="mt-5 font-serif text-4xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.15]">
                {data.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:text-[1.375rem] sm:leading-[1.7]">
                {data.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-sm leading-5 font-semibold text-white">
                    {data.author}
                  </p>
                  <p className="text-sm leading-5 text-white/70">
                    {data.publishedAt} | {data.readTime}
                  </p>
                </div>
              </div>

              <Link
                href={`#${storyId}`}
                className={`mt-7 inline-flex items-center gap-1.5 text-sm leading-5 font-semibold transition-colors ${data.readMoreClassName}`}
              >
                <span>Read More</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {data.heroArtwork}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-30 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
          <article id={storyId} className="max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm leading-5 text-footer-muted"
            >
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span>&gt;</span>
              <span className="font-medium text-foreground">{data.category}</span>
            </nav>

            <p className="mt-4 text-sm leading-5 italic text-footer-muted">
              {data.figureCredit}
            </p>

            <div className="mt-10 space-y-8 text-[1.0625rem] leading-8 text-foreground">
              {data.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <blockquote className="border-l-4 border-header-border pl-6 font-serif text-2xl leading-9 italic text-footer-muted">
                {data.quote}
              </blockquote>

              <div>
                <h2 className="font-serif text-3xl leading-tight font-bold text-foreground">
                  {data.sectionHeading}
                </h2>
                {data.closing.map((paragraph) => (
                  <p key={paragraph} className="mt-5">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <section aria-labelledby={`${data.slug}-related-articles`}>
              <h2
                id={`${data.slug}-related-articles`}
                className="text-2xl leading-7 font-bold text-foreground"
              >
                Related Articles
              </h2>

              <div className="mt-4 overflow-hidden rounded-xl border border-header-border bg-background shadow-sm">
                {data.relatedArticles.map((story) => (
                  <RelatedArticleCard key={story.title} {...story} />
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl border border-header-border bg-footer-surface p-6 shadow-sm">
              <h2 className="text-2xl leading-7 font-bold text-foreground">
                Newsletter Signup
              </h2>
              <p className="mt-2 text-sm leading-6 text-footer-muted">
                {data.newsletterDescription}
              </p>

              <form className="mt-5 space-y-3">
                <label htmlFor={`${data.slug}-newsletter-email`} className="sr-only">
                  Email address
                </label>
                <input
                  id={`${data.slug}-newsletter-email`}
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
