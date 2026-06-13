export interface ArticleImage {
  src: string;
  alt: string;
}

export interface Article {
  id: number;
  slug: string;
  section: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  publishedAt: string;
  readTime: string;
  image: ArticleImage;
  relatedIds: number[];
}

export interface LinkedArticle extends Article {
  href: string;
}

export interface RankedArticle extends LinkedArticle {
  rank: number;
}

export interface CuratedArticleReference {
  id: string;
  articleId: number;
  rank: number;
}

export type TopStory = RankedArticle;
