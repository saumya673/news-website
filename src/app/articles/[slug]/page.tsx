import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import ArticlePage from "@/components/ArticlePage";
import { getArticleBySlug, getArticlesByIds } from "@/lib/api/news";

type ArticleRoutePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function normalizeArticleSlug(value: string) {
  const slug = value.trim().toLowerCase();

  if (slug.length === 0) {
    return null;
  }

  return slug;
}

export async function generateMetadata({
  params,
}: ArticleRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = normalizeArticleSlug(slug);

  if (normalizedSlug === null) {
    return {
      title: "Article | The Herald",
    };
  }

  const article = await getArticleBySlug(normalizedSlug);

  if (!article) {
    return {
      title: "Article Not Found | The Herald",
    };
  }

  return {
    title: `${article.title} | The Herald`,
    description: article.excerpt,
  };
}

export default async function ArticleRoutePage({
  params,
}: ArticleRoutePageProps) {
  const { slug } = await params;
  const normalizedSlug = normalizeArticleSlug(slug);

  if (normalizedSlug === null) {
    notFound();
  }

  const article = await getArticleBySlug(normalizedSlug);

  if (!article) {
    notFound();
  }

  if (slug !== article.slug) {
    redirect(article.href);
  }

  const relatedArticles = await getArticlesByIds(article.relatedIds);

  return <ArticlePage article={article} relatedArticles={relatedArticles} />;
}
