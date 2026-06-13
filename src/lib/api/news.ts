import type {
  Article,
  CuratedArticleReference,
  LinkedArticle,
  RankedArticle,
  TopStory,
} from "@/types/news";

const NEWS_API_BASE_URL =
  process.env.NEWS_API_BASE_URL ?? "http://127.0.0.1:3001";

export const TOP_STORIES_REVALIDATE_SECONDS = 60;
export const ARTICLE_ROUTE_PREFIX = "/articles";

type NewsRequestInit = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

export function getArticleHref(articleId: number) {
  return `${ARTICLE_ROUTE_PREFIX}/${articleId}`;
}

function buildArticleIdQuery(articleIds: number[]) {
  return articleIds
    .map((articleId) => `id=${encodeURIComponent(String(articleId))}`)
    .join("&");
}

async function fetchNewsResponse(
  path: string,
  init?: NewsRequestInit,
): Promise<Response> {
  try {
    return await fetch(new URL(path, NEWS_API_BASE_URL), {
      ...init,
      headers: {
        accept: "application/json",
        ...init?.headers,
      },
    });
  } catch (error) {
    throw new Error(
      `Unable to reach the mock news API at ${NEWS_API_BASE_URL}. Start it with "pnpm mock:api".`,
      { cause: error },
    );
  }
}

async function fetchNewsJson<T>(
  path: string,
  init?: NewsRequestInit,
): Promise<T> {
  const response = await fetchNewsResponse(path, init);

  if (!response.ok) {
    throw new Error(
      `Mock news API request failed for ${path} with status ${response.status}.`,
    );
  }

  return (await response.json()) as T;
}

function withArticleHref(article: Article): LinkedArticle {
  return {
    ...article,
    href: getArticleHref(article.id),
  };
}

async function getCuratedArticles(
  collection: "editorPicks" | "hero" | "latestHeadlines" | "topStories",
): Promise<RankedArticle[]> {
  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };

  const curatedStories = await fetchNewsJson<CuratedArticleReference[]>(
    `/${collection}?_sort=rank&_order=asc`,
    { next },
  );

  if (curatedStories.length === 0) {
    return [];
  }

  const articles = await fetchNewsJson<Article[]>(
    `/articles?${buildArticleIdQuery(
      curatedStories.map((story) => story.articleId),
    )}`,
    { next },
  );

  const articlesById = new Map(
    articles.map((article) => [article.id, article] as const),
  );

  return curatedStories.map((story) => {
    const article = articlesById.get(story.articleId);

    if (!article) {
      throw new Error(
        `Top story reference ${story.id} points to missing article ${story.articleId}.`,
      );
    }

    return {
      ...withArticleHref(article),
      rank: story.rank,
    };
  });
}

export async function getHeroStory(): Promise<RankedArticle | null> {
  const [heroStory] = await getCuratedArticles("hero");
  return heroStory ?? null;
}

export async function getTopStories(): Promise<TopStory[]> {
  return getCuratedArticles("topStories");
}

export async function getLatestHeadlines(): Promise<RankedArticle[]> {
  return getCuratedArticles("latestHeadlines");
}

export async function getEditorPicks(): Promise<RankedArticle[]> {
  return getCuratedArticles("editorPicks");
}

export async function getArticleById(
  articleId: number,
): Promise<LinkedArticle | null> {
  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };
  const response = await fetchNewsResponse(`/articles/${articleId}`, { next });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Mock news API request failed for /articles/${articleId} with status ${response.status}.`,
    );
  }

  const article = (await response.json()) as Article;
  return withArticleHref(article);
}

export async function getArticlesByIds(
  articleIds: number[],
): Promise<LinkedArticle[]> {
  if (articleIds.length === 0) {
    return [];
  }

  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };
  const articles = await fetchNewsJson<Article[]>(
    `/articles?${buildArticleIdQuery(articleIds)}`,
    { next },
  );
  const articlesById = new Map(
    articles.map((article) => [article.id, article] as const),
  );

  return articleIds.flatMap((articleId) => {
    const article = articlesById.get(articleId);
    return article ? [withArticleHref(article)] : [];
  });
}
