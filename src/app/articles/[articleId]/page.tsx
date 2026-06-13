import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticlePage from "@/components/ArticlePage";
import { getArticleById, getArticlesByIds } from "@/lib/api/news";

type ArticleRoutePageProps = {
  params: Promise<{
    articleId: string;
  }>;
};

function parseArticleId(value: string) {
  const articleId = Number(value);

  if (!Number.isInteger(articleId) || articleId <= 0) {
    return null;
  }

  return articleId;
}

export async function generateMetadata({
  params,
}: ArticleRoutePageProps): Promise<Metadata> {
  const { articleId } = await params;
  const parsedArticleId = parseArticleId(articleId);

  if (parsedArticleId === null) {
    return {
      title: "Article | The Herald",
    };
  }

  const article = await getArticleById(parsedArticleId);

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
  const { articleId } = await params;
  const parsedArticleId = parseArticleId(articleId);

  if (parsedArticleId === null) {
    notFound();
  }

  const article = await getArticleById(parsedArticleId);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getArticlesByIds(article.relatedIds);

  return <ArticlePage article={article} relatedArticles={relatedArticles} />;
}
