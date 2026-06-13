import type { Article, CuratedArticleReference, TopStory } from "@/types/news";

const NEWS_API_BASE_URL =
  process.env.NEWS_API_BASE_URL ?? "http://127.0.0.1:3001";

export const TOP_STORIES_REVALIDATE_SECONDS = 60;

type NewsRequestInit = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

function buildArticleIdQuery(articleIds: number[]) {
  return articleIds
    .map((articleId) => `id=${encodeURIComponent(String(articleId))}`)
    .join("&");
}

async function fetchNewsJson<T>(
  path: string,
  init?: NewsRequestInit,
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(new URL(path, NEWS_API_BASE_URL), {
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

  if (!response.ok) {
    throw new Error(
      `Mock news API request failed for ${path} with status ${response.status}.`,
    );
  }

  return (await response.json()) as T;
}

export async function getTopStories(): Promise<TopStory[]> {
  const next = { revalidate: TOP_STORIES_REVALIDATE_SECONDS };

  const curatedStories = await fetchNewsJson<CuratedArticleReference[]>(
    "/topStories?_sort=rank&_order=asc",
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
      ...article,
      href: `/${article.section}`,
      rank: story.rank,
    };
  });
}
