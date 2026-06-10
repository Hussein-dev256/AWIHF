import newsSeed from '@/content/news.json';

export type CmsNewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  content: string[];
};

export type NewsPost = CmsNewsArticle;

function normalizeNewsArticle(article: CmsNewsArticle): NewsPost {
  return {
    slug: article.slug,
    title: article.title,
    category: article.category,
    date: article.date,
    excerpt: article.excerpt,
    image: article.image,
    author: article.author,
    readTime: article.readTime,
    content: article.content,
  };
}

async function fetchNewsFromCms(): Promise<CmsNewsArticle[]> {
  // Future Sanity integration should replace only this source function.
  return newsSeed as CmsNewsArticle[];
}

export async function getNewsPosts() {
  const articles = await fetchNewsFromCms();
  return articles.map(normalizeNewsArticle);
}

export async function getFeaturedNewsPosts(limit = 3) {
  const articles = await getNewsPosts();
  return articles.slice(0, limit);
}

export async function getNewsPost(slug: string) {
  const articles = await getNewsPosts();
  return articles.find((post) => post.slug === slug);
}
