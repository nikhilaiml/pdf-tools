'use client';

import { Scale, FileText, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LegalPage() {
    const legalDocs = [
        {
            title: 'Terms of Service',
            description: 'The terms and conditions governing your use of PDF Tools.',
            href: '/terms',
            icon: FileText,
            color: 'bg-blue-100',
            iconColor: 'text-blue-600',
        },
        {
            title: 'Privacy Policy',
            description: 'How we collect, use, and protect your personal information.',
            href: '/privacy',
            icon: Shield,
            color: 'bg-green-100',
            iconColor: 'text-green-600',
        },
        {
            title: 'Cookie Policy',
            description: 'Information about how we use cookies and similar technologies.',
            href: '/cookies',
            icon: Globe,
            color: 'bg-orange-100',
            iconColor: 'text-orange-600',
        },
        {
            title: 'GDPR Compliance',
            description: 'Our commitment to GDPR and data protection regulations.',
            href: '/gdpr',
            icon: Scale,
            color: 'bg-purple-100',
            iconColor: 'text-purple-600',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Legal Information
                        </h1>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            Important legal documents and policies for PDF Tools.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Legal Documents Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {legalDocs.map((doc) => (
                            <Link key={doc.title} href={doc.href}>
                                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer h-full">
                                    <div className={`w-12 h-12 ${doc.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <doc.icon className={`w-6 h-6 ${doc.iconColor}`} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{doc.title}</h3>
                                    <p className="text-gray-500 text-sm">{doc.description}</p>
                                    <span className="inline-block mt-4 text-purple-600 text-sm font-medium">Read More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Company Info */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>

                        <div className="space-y-6 text-gray-600">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Registered Business</h3>
                                <p>PDF Tools Inc.</p>
                                <p>123 PDF Street, Tech City, TC 12345</p>
                                <p>United States</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                                <p>Email: <a href="mailto:legal@pdftools.com" className="text-purple-600 hover:underline">legal@pdftools.com</a></p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Copyright Notice</h3>
                                <p>© {new Date().getFullYear()} PDF Tools. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
