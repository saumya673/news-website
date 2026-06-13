import Image from "next/image";
import Link from "next/link";

import { formatPublishedAt } from "@/lib/utils/news";
import type { LinkedArticle } from "@/types/news";

export type ArticleCardVariant =
  | "compact"
  | "editor-pick"
  | "related"
  | "section"
  | "top-story";

type ArticleCardProps = {
  article: LinkedArticle;
  variant: ArticleCardVariant;
  showCategory?: boolean;
  showExcerpt?: boolean;
  showPublishedAt?: boolean;
  showReadTime?: boolean;
};

const articleCardVariants = {
  compact: {
    bodyClassName: "mt-1",
    contentClassName: "min-w-0",
    categoryClassName:
      "text-[0.7rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase",
    excerptClassName: "",
    imageClassName: "object-cover",
    imageWrapperClassName:
      "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg",
    linkClassName:
      "flex items-center gap-4 border-b border-header-border p-4 transition-colors last:border-b-0 hover:bg-header-hover",
    metaClassName: "mt-1 text-xs leading-4 text-footer-muted",
    showCategory: true,
    showExcerpt: false,
    showPublishedAt: true,
    showReadTime: false,
    sizes: "64px",
    titleClassName: "line-clamp-2 text-sm leading-5 font-semibold text-foreground",
  },
  "editor-pick": {
    bodyClassName: "",
    contentClassName: "space-y-3 px-4 py-4",
    categoryClassName:
      "text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase",
    excerptClassName: "",
    imageClassName:
      "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
    imageWrapperClassName: "relative aspect-[270/185.63] w-full",
    linkClassName:
      "group block overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)] transition-transform hover:-translate-y-0.5",
    metaClassName: "",
    showCategory: true,
    showExcerpt: false,
    showPublishedAt: false,
    showReadTime: false,
    sizes:
      "(min-width: 1280px) 270px, (min-width: 640px) calc((100vw - 7rem) / 2), 100vw",
    titleClassName:
      "font-serif text-[1.125rem] leading-6.25 font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-header-accent",
  },
  related: {
    bodyClassName: "space-y-3",
    contentClassName: "space-y-3 px-5 py-5",
    categoryClassName:
      "text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase",
    excerptClassName: "text-sm leading-6 text-header-muted",
    imageClassName:
      "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
    imageWrapperClassName: "relative aspect-16/10 w-full",
    linkClassName:
      "group block overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)] transition-transform hover:-translate-y-0.5",
    metaClassName: "text-sm leading-5 text-header-muted",
    showCategory: true,
    showExcerpt: false,
    showPublishedAt: true,
    showReadTime: true,
    sizes:
      "(min-width: 1280px) 368px, (min-width: 768px) calc((100vw - 8rem) / 2), 100vw",
    titleClassName:
      "font-serif text-[1.25rem] leading-7 font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-header-accent",
  },
  section: {
    bodyClassName: "space-y-3",
    contentClassName: "space-y-3 px-5 py-5",
    categoryClassName:
      "text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase",
    excerptClassName: "text-sm leading-6 text-header-muted",
    imageClassName:
      "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
    imageWrapperClassName: "relative aspect-16/10 w-full",
    linkClassName:
      "group block overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)] transition-transform hover:-translate-y-0.5",
    metaClassName: "text-sm leading-5 text-header-muted",
    showCategory: true,
    showExcerpt: true,
    showPublishedAt: true,
    showReadTime: true,
    sizes:
      "(min-width: 1280px) 420px, (min-width: 768px) calc((100vw - 10rem) / 2), 100vw",
    titleClassName:
      "font-serif text-[1.375rem] leading-7 font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-header-accent",
  },
  "top-story": {
    bodyClassName: "space-y-2",
    contentClassName: "space-y-4 px-6 py-6",
    categoryClassName:
      "text-[0.75rem] leading-4 font-semibold tracking-[0.3px] text-header-accent uppercase",
    excerptClassName: "text-sm leading-[1.55rem] text-header-muted",
    imageClassName:
      "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
    imageWrapperClassName: "relative aspect-368/230 w-full",
    linkClassName:
      "group block overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] bg-background shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_10%,transparent),0_1px_2px_-1px_color-mix(in_srgb,var(--foreground)_10%,transparent)] transition-transform hover:-translate-y-0.5",
    metaClassName: "",
    showCategory: true,
    showExcerpt: true,
    showPublishedAt: false,
    showReadTime: false,
    sizes:
      "(min-width: 1280px) 368px, (min-width: 768px) calc((100vw - 8rem) / 2), 100vw",
    titleClassName:
      "font-serif text-[1.75rem] leading-8 font-bold tracking-[-0.03em] text-foreground transition-colors group-hover:text-header-accent",
  },
} satisfies Record<
  ArticleCardVariant,
  {
    bodyClassName: string;
    contentClassName: string;
    categoryClassName: string;
    excerptClassName: string;
    imageClassName: string;
    imageWrapperClassName: string;
    linkClassName: string;
    metaClassName: string;
    showCategory: boolean;
    showExcerpt: boolean;
    showPublishedAt: boolean;
    showReadTime: boolean;
    sizes: string;
    titleClassName: string;
  }
>;

export default function ArticleCard({
  article,
  variant,
  showCategory,
  showExcerpt,
  showPublishedAt,
  showReadTime,
}: ArticleCardProps) {
  const variantConfig = articleCardVariants[variant];
  const shouldShowCategory = showCategory ?? variantConfig.showCategory;
  const shouldShowExcerpt = showExcerpt ?? variantConfig.showExcerpt;
  const shouldShowPublishedAt =
    showPublishedAt ?? variantConfig.showPublishedAt;
  const shouldShowReadTime = showReadTime ?? variantConfig.showReadTime;
  const metaParts = [];

  if (shouldShowPublishedAt) {
    metaParts.push(formatPublishedAt(article.publishedAt));
  }

  if (shouldShowReadTime) {
    metaParts.push(article.readTime);
  }

  return (
    <article>
      <Link href={article.href} className={variantConfig.linkClassName}>
        <div className={variantConfig.imageWrapperClassName}>
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes={variantConfig.sizes}
            className={variantConfig.imageClassName}
          />
        </div>

        <div className={variantConfig.contentClassName}>
          {shouldShowCategory ? (
            <p className={variantConfig.categoryClassName}>{article.category}</p>
          ) : null}

          <div className={variantConfig.bodyClassName}>
            <h3 className={variantConfig.titleClassName}>{article.title}</h3>

            {shouldShowExcerpt ? (
              <p className={variantConfig.excerptClassName}>{article.excerpt}</p>
            ) : null}
          </div>

          {metaParts.length > 0 ? (
            <p className={variantConfig.metaClassName}>{metaParts.join(" | ")}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
