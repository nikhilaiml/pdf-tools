import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="block h-full group">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 group-hover:shadow-md transition-all duration-300 h-full flex flex-col group-hover:-translate-y-1">
                <p className="text-sm text-slate-500 mb-3">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 leading-snug">
                    {post.title}
                </h2>
                <p className="text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {post.description}
                </p>
                <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Read Tutorial
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
