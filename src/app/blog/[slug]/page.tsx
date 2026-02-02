import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, BlogPost } from '../../../lib/blog-data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

interface Props {
    params: {
        slug: string;
    };
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | UsePDF Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `https://usepdf.in/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://usepdf.in/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
        return null; // TS Check, notFound() throws
    }

    // JSON-LD Schema for Blog Posting
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "datePublished": post.date,
        // "image": "...", // Add if image is available
        "url": `https://usepdf.in/blog/${post.slug}`
    };

    return (
        <div className="bg-[#faf8f5] min-h-screen font-sans">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="pt-28 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>

                <article className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    {/* Header */}
                    <header className="mb-10 text-center">
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2 text-indigo-500" />
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                                {post.readTime}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Newsletter / CTA Placeholder */}
                <div className="mt-12 bg-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Want more PDF tips?</h3>
                        <p className="text-indigo-100 mb-6 max-w-xl mx-auto">Check out our suite of free PDF tools to handle any document task.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/#tools" className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
                                Explore Tools
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
