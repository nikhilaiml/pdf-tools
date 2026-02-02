import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../lib/blog-data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'UsePDF Blog – Tips, Tutorials, and Updates',
    description: 'Read the latest guides on how to manage, edit, and convert PDF files effectively. Stay updated with UsePDF news.',
    alternates: {
        canonical: 'https://usepdf.in/blog',
    },
    openGraph: {
        title: 'UsePDF Blog – PDF Tips & Tricks',
        description: 'Explore our collection of articles about PDF productivity.',
        url: 'https://usepdf.in/blog',
        type: 'website',
    }
};

export default function BlogPage() {
    return (
        <div className="bg-[#faf8f5] min-h-screen font-sans">
            <Navbar />

            <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-10">
                        Our Blog
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover tips, tutorials, and insights to maximize your productivity with PDF documents.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="h-48 bg-indigo-50 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder for blog image - using a generic pattern or icon could be better, but simple color block works for now */}
                                    <span className="text-6xl">📄</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 line-clamp-3 mb-4 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center text-indigo-600 font-semibold text-sm">
                                        Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
