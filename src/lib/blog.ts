import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    // SEO Schemas
    faq?: { question: string; answer: string }[];
    howTo?: {
        name: string;
        description: string;
        steps: { name: string; text: string; }[];
    };
};

export function getPostSlugs() {
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
        return [];
    }
    return fs.readdirSync(contentDirectory);
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const realSlug = slug.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, `${realSlug}.md`);

        if (!fs.existsSync(fullPath)) return null;

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            title: data.title || '',
            date: data.date || '',
            description: data.description || '',
            faq: data.faq || null,
            howTo: data.howTo || null,
            content,
        };
    } catch (err) {
        console.error("Error reading post:", slug, err);
        return null;
    }
}

export function getAllPosts(): BlogPost[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .filter(slug => slug.endsWith('.md'))
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
