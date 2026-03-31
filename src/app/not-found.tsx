import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 – Page Not Found | UsePDF.in',
    description: 'The page you are looking for does not exist. Browse our free PDF tools or return to the homepage.',
};

const popularTools = [
    { name: 'Compress PDF', href: '/tools/compress-pdf', desc: 'Reduce PDF file size' },
    { name: 'Merge PDF', href: '/tools/merge-pdf', desc: 'Combine multiple PDFs' },
    { name: 'Split PDF', href: '/tools/split-pdf', desc: 'Extract pages from PDF' },
    { name: 'PDF to JPG', href: '/tools/pdf-to-jpg', desc: 'Convert PDF to images' },
    { name: 'PDF to Word', href: '/tools/pdf-to-word', desc: 'Convert PDF to Word' },
    { name: 'Rotate PDF', href: '/tools/rotate-pdf', desc: 'Rotate PDF pages' },
];

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center px-4 py-16">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Illustration */}
                <div className="text-8xl md:text-9xl font-bold text-indigo-200 mb-4 select-none">
                    404
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Page Not Found
                </h1>
                <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let us help you find what you need.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                        ← Go to Homepage
                    </Link>
                    <Link
                        href="/tools"
                        className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium border border-indigo-200 hover:bg-indigo-50 transition-colors"
                    >
                        Browse All Tools
                    </Link>
                </div>

                {/* Popular Tools */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">
                        Popular Free PDF Tools
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {popularTools.map((tool) => (
                            <Link
                                key={tool.href}
                                href={tool.href}
                                className="p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group"
                            >
                                <div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600">
                                    {tool.name}
                                </div>
                                <div className="text-xs text-slate-500 mt-1">{tool.desc}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
