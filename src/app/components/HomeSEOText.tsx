'use client';

import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function HomeSEOText() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* SEO Pillar Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">All-in-One Online PDF Editor – Free & Secure</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-slate-600 leading-relaxed">
                            UsePDF is a <strong>free online PDF editor</strong> that helps you manage documents effortlessly.
                            With tools to merge, split, compress, delete and reorder PDF pages, you can handle any PDF task
                            in seconds—without installing software or creating an account.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Our <strong>online PDF tools</strong> are designed for students, professionals, and businesses.
                            Whether you need to <strong>merge PDF files</strong>, <strong>compress PDF</strong> for email,
                            or <strong>split PDF</strong> pages—UsePDF makes it simple, fast, and completely free.
                        </p>
                    </div>
                </div>

                {/* Popular PDF Tools Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Popular PDF Tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <Link href="/tools/merge-pdf" className="block bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Merge PDF</h3>
                            <p className="text-slate-500 text-xs mt-1">Combine files into one</p>
                        </Link>
                        <Link href="/tools/split-pdf" className="block bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Split PDF Online</h3>
                            <p className="text-slate-500 text-xs mt-1">Extract pages from PDF</p>
                        </Link>
                        <Link href="/tools/compress-pdf" className="block bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Compress PDF</h3>
                            <p className="text-slate-500 text-xs mt-1">Reduce file size fast</p>
                        </Link>
                        <Link href="/tools/delete-pdf-pages" className="block bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Delete PDF Pages</h3>
                            <p className="text-slate-500 text-xs mt-1">Remove unwanted pages</p>
                        </Link>
                        <Link href="/tools/rearrange-pdf" className="block bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Reorder PDF</h3>
                            <p className="text-slate-500 text-xs mt-1">Rearrange page order</p>
                        </Link>
                        <Link href="/tools/pdf-to-jpg" className="block bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all text-center group">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">PDF to JPG</h3>
                            <p className="text-slate-500 text-xs mt-1">Convert to images</p>
                        </Link>
                    </div>
                </div>

                {/* Security & Privacy Section */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 mb-16">
                    <div className="flex items-start gap-4 max-w-3xl mx-auto">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Files Are Safe</h2>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    SSL encryption for secure transfers
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Files auto-deleted within 1 hour
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    No data stored or shared
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Internal Links - SEO Boost */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Explore All PDF Tools</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            Merge PDF
                        </Link>
                        <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            Split PDF
                        </Link>
                        <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            Compress PDF
                        </Link>
                        <Link href="/tools/delete-pdf-pages" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            Delete PDF Pages
                        </Link>
                        <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            Reorder PDF
                        </Link>
                        <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            PDF to JPG
                        </Link>
                        <Link href="/tools/jpg-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                            JPG to PDF
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
