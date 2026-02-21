import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    if (!post) {
        return { title: 'Post Not Found | UsePDF' };
    }

    return {
        title: `${post.title} | UsePDF Blog`,
        description: post.description,
        alternates: {
            canonical: `https://www.usepdf.in/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://www.usepdf.in/blog/${post.slug}`,
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    // Article Schema
    const articleSchema: Record<string, any> = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "UsePDF"
        }
    };

    // Build combined schema array
    const schemas: Record<string, any>[] = [articleSchema];

    if (post.faq && post.faq.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage" as any,
            "mainEntity": post.faq.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer
                }
            }))
        });
    }

    if (post.howTo) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "HowTo" as any,
            "name": post.howTo.name,
            "description": post.howTo.description,
            "step": post.howTo.steps.map((step, index) => ({
                "@type": "HowToStep",
                "url": `https://www.usepdf.in/blog/${post.slug}#step${index + 1}`,
                "name": step.name,
                "text": step.text
            }))
        });
    }

    return (
        <div className="bg-[#faf8f5] min-h-screen font-sans selection:bg-indigo-500/30 flex flex-col">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <main className="flex-grow pt-32 pb-24">
                <article className="max-w-4xl mx-auto px-6">
                    <header className="mb-12 text-center">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center text-slate-500 gap-4 mb-8">
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                            <span>•</span>
                            <span>By UsePDF Team</span>
                        </div>
                    </header>

                    <div className="prose prose-lg md:prose-xl prose-slate mx-auto max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl prose-img:shadow-md">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <div className="bg-indigo-50 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to try it yourself?</h3>
                            <p className="text-slate-600 mb-6">Use our free, secure, and private PDF tools directly in your browser.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/tools/merge-pdf" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors">
                                    Merge PDF
                                </Link>
                                <Link href="/tools/split-pdf" className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg shadow-sm transition-colors">
                                    Split PDF
                                </Link>
                                <Link href="/" className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg shadow-sm transition-colors">
                                    View All Tools
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
