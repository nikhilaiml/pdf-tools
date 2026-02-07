'use client';

import Link from 'next/link';

export default function HomeSEOText() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Popular Online PDF Tools Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Popular PDF Tools</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                            <Link href="/tools/compress-pdf" className="block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600">Compress PDF</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Reduce file size while maintaining quality.
                                </p>
                            </Link>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                            <Link href="/tools/merge-pdf" className="block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600">Merge PDF</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Combine multiple PDFs into one document.
                                </p>
                            </Link>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                            <Link href="/tools/split-pdf" className="block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600">Split PDF</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Extract pages or separate PDF ranges.
                                </p>
                            </Link>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                            <Link href="/tools/pdf-to-word" className="block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600">PDF to Word</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Convert PDF documents to editable Word files.
                                </p>
                            </Link>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                            <Link href="/tools/word-to-pdf" className="block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600">Word to PDF</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Create professional PDFs from Word docs.
                                </p>
                            </Link>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                            <Link href="/tools/pdf-to-jpg" className="block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-indigo-600">PDF to JPG</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Convert PDF pages into high-quality images.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SEO Content Section */}
                <div className="prose prose-slate max-w-none text-center">
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF offers a complete suite of **online pdf tools** to simplify your document management. Whether you need to **compress merge split pdf** files or convert documents for work, our platform handles it all directly in your browser.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Designed for students, professionals, and offices, our **free pdf tools** ensure efficiency and privacy. **Work with pdf files** securely without software installation – just upload, process, and download.
                    </p>
                </div>

            </div>
        </section>
    );
}
