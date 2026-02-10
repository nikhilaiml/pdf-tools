export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'merge-pdf-online-free',
    title: 'How to Merge PDF Files Online for Free',
    excerpt: 'Learn the fastest way to combine multiple PDF files into a single document without installing any software.',
    date: 'Feb 01, 2026',
    readTime: '5 min read',
    tags: ['merge pdf', 'tutorial', 'free tools'],
  },
  {
    id: '2',
    slug: 'split-pdf-pages',
    title: 'Split PDF Pages: Extract the Pages You Need',
    excerpt: 'A quick guide to split PDF files by page range or extract single pages in seconds.',
    date: 'Jan 28, 2026',
    readTime: '4 min read',
    tags: ['split pdf', 'pdf cutter', 'how-to'],
  },
  {
    id: '3',
    slug: 'compress-pdf-without-quality-loss',
    title: 'Compress PDF Without Losing Quality',
    excerpt: 'Reduce PDF file size while keeping text and images crisp. Perfect for email and uploads.',
    date: 'Jan 20, 2026',
    readTime: '6 min read',
    tags: ['compress pdf', 'optimize', 'tips'],
  },
];
