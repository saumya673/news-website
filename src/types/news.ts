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

export interface CuratedArticleReference {
  id: string;
  articleId: number;
  rank: number;
}

export interface TopStory extends Article {
  href: string;
  rank: number;
}
