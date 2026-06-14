import type {
  Article,
  CuratedArticleReference,
  LinkedArticle,
  RankedArticle,
  TopStory,
} from "@/types/news";

const NEWS_API_BASE_URL =
  process.env.NEWS_API_BASE_URL ?? "http://127.0.0.1:3001";
const NEWS_API_DATA_PATH = process.env.NEWS_API_DATA_PATH?.trim() || null;

export const TOP_STORIES_REVALIDATE_SECONDS = 60;
export const ARTICLE_ROUTE_PREFIX = "/articles";
export type NewsSection = Article["section"];

type CuratedCollection =
  | "editorPicks"
  | "hero"
  | "latestHeadlines"
  | "topStories";

type NewsApiDocument = {
  articles: Article[];
} & Record<CuratedCollection, CuratedArticleReference[]>;

type NewsRequestInit = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

export function getArticleHref(articleSlug: string) {
  return `${ARTICLE_ROUTE_PREFIX}/${encodeURIComponent(articleSlug)}`;
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
    const setupHint = NEWS_API_DATA_PATH
      ? `Check NEWS_API_BASE_URL (${NEWS_API_BASE_URL}) and NEWS_API_DATA_PATH (${NEWS_API_DATA_PATH}).`
      : 'Start the local mock API with "pnpm mock:api", or configure NEWS_API_DATA_PATH for a hosted single-document mock.';

    throw new Error(
      `Unable to reach the mock news API at ${NEWS_API_BASE_URL}. ${setupHint}`,
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
    href: getArticleHref(article.slug),
  };
}

async function getNewsApiDocument(
  init?: NewsRequestInit,
): Promise<NewsApiDocument> {
  if (!NEWS_API_DATA_PATH) {
    throw new Error(
      "NEWS_API_DATA_PATH must be configured to use the single-document news API mode.",
    );
  }

  return fetchNewsJson<NewsApiDocument>(NEWS_API_DATA_PATH, init);
}

function mapCuratedArticles(
  curatedStories: CuratedArticleReference[],
  articles: Article[],
): RankedArticle[] {
  const sortedCuratedStories = [...curatedStories].sort((left, right) => {
    return left.rank - right.rank;
  });
  const articlesById = new Map(
    articles.map((article) => [article.id, article] as const),
  );

  return sortedCuratedStories.map((story) => {
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

async function getCuratedArticles(
  collection: CuratedCollection,
): Promise<RankedArticle[]> {
  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };

  if (NEWS_API_DATA_PATH) {
    const newsApiDocument = await getNewsApiDocument({ next });
    return mapCuratedArticles(
      newsApiDocument[collection],
      newsApiDocument.articles,
    );
  }

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
  return mapCuratedArticles(curatedStories, articles);
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

export async function getArticleBySlug(
  articleSlug: string,
): Promise<LinkedArticle | null> {
  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };

  if (NEWS_API_DATA_PATH) {
    const newsApiDocument = await getNewsApiDocument({ next });
    const article = newsApiDocument.articles.find(
      (candidate) => candidate.slug === articleSlug,
    );

    return article ? withArticleHref(article) : null;
  }

  const articles = await fetchNewsJson<Article[]>(
    `/articles?slug=${encodeURIComponent(articleSlug)}`,
    { next },
  );
  const article = articles[0];

  return article ? withArticleHref(article) : null;
}

export async function getArticlesByIds(
  articleIds: number[],
): Promise<LinkedArticle[]> {
  if (articleIds.length === 0) {
    return [];
  }

  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };

  if (NEWS_API_DATA_PATH) {
    const newsApiDocument = await getNewsApiDocument({ next });
    const articlesById = new Map(
      newsApiDocument.articles.map((article) => [article.id, article] as const),
    );

    return articleIds.flatMap((articleId) => {
      const article = articlesById.get(articleId);
      return article ? [withArticleHref(article)] : [];
    });
  }

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

export async function getArticlesBySection(
  section: NewsSection,
): Promise<LinkedArticle[]> {
  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };

  if (NEWS_API_DATA_PATH) {
    const newsApiDocument = await getNewsApiDocument({ next });

    return newsApiDocument.articles
      .filter((article) => article.section === section)
      .sort((left, right) => {
        return (
          new Date(right.publishedAt).getTime() -
          new Date(left.publishedAt).getTime()
        );
      })
      .map(withArticleHref);
  }

  const articles = await fetchNewsJson<Article[]>(
    `/articles?section=${encodeURIComponent(section)}&_sort=publishedAt&_order=desc`,
    { next },
  );

  return articles.map(withArticleHref);
}
