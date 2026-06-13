import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SectionFeaturePage from "@/components/SectionFeaturePage";
import { getArticlesByIds, getArticlesBySection } from "@/lib/api/news";
import { sectionPages } from "@/lib/section-pages";

export const metadata: Metadata = sectionPages.tech.metadata;

export default async function TechPage() {
  const sectionArticles = await getArticlesBySection("tech");
  const featuredArticle = sectionArticles[0];

  if (!featuredArticle) {
    notFound();
  }

  const relatedArticles = await getArticlesByIds(featuredArticle.relatedIds);

  return (
    <SectionFeaturePage
      config={sectionPages.tech.config}
      featuredArticle={featuredArticle}
      relatedArticles={relatedArticles}
      sectionArticles={sectionArticles.slice(1)}
    />
  );
}
