import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SectionFeaturePage from "@/components/SectionFeaturePage";
import { getArticlesByIds, getArticlesBySection } from "@/lib/api/news";
import { sectionPages } from "@/lib/section-pages";

export const metadata: Metadata = sectionPages.world.metadata;

export default async function WorldPage() {
  const sectionArticles = await getArticlesBySection("world");
  const featuredArticle = sectionArticles[0];

  if (!featuredArticle) {
    notFound();
  }

  const relatedArticles = await getArticlesByIds(featuredArticle.relatedIds);

  return (
    <SectionFeaturePage
      config={sectionPages.world.config}
      featuredArticle={featuredArticle}
      relatedArticles={relatedArticles}
      sectionArticles={sectionArticles.slice(1)}
    />
  );
}
