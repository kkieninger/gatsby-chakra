export interface PostData {
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
}

export interface Job {
  company: string;
  current: boolean;
  description: string;
  title: string;
  years: string;
}
