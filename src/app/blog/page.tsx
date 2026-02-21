import { getAllPosts } from '@/lib/blog';
import BlogClient from './BlogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF Help Guides & Tutorials | UsePDF',
    description: 'Expert guides, tutorials, and tips on how to merge, split, compress, and edit PDF files efficiently and securely.',
    alternates: {
        canonical: 'https://www.usepdf.in/blog',
    }
};

export default function BlogPage() {
    const posts = getAllPosts();
    return <BlogClient initialPosts={posts} />;
}
