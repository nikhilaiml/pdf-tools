import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Zap, Globe, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About UsePDF - Free & Secure Online PDF Tools',
    description: 'Learn about UsePDF’s mission to provide fast, free, and privacy-focused PDF tools. We process files locally for maximum security.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#faf8f5] font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">
                        Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Document Workflow</span> Privately
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We are a team of privacy advocates and developers building the fastest, most secure way to handle PDFs online—without ever uploading your files to a server.
                    </p>
                </div>

                {/* Mission / Story Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                In a world where data privacy is constantly under threat, we noticed a gap in the market: most online PDF tools require you to upload your sensitive documents to their servers for processing.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                At UsePDF, we believe your files are <strong>your</strong> business. That&apos;s why we engineered a client-side processing engine that handles almost every task directly in your browser. Fast, secure, and private by design.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    icon: Shield,
                                    title: "Privacy First",
                                    desc: "We prioritize local processing. Your files don't leave your device unless absolutely necessary (e.g. for complex conversions), and even then, they are deleted instantly."
                                },
                                {
                                    icon: Zap,
                                    title: "Lightning Fast",
                                    desc: "By leveraging your browser's power, we eliminate upload and download times for most tools. Instant results, zero lag."
                                },
                                {
                                    icon: Globe,
                                    title: "Accessible to All",
                                    desc: "Productivity tools shouldn't be luxury items. UsePDF is and will always remain 100% free for everyone, everywhere."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="shrink-0 bg-slate-50 p-3 rounded-xl h-fit">
                                        <item.icon className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Team Section (EEAT Signal) */}
                <div className="bg-white py-20 border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
                            <Users className="w-4 h-4" /> The People Behind the Code
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Built by Developers, for Everyone</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Founder / Core Team Placeholder */}
                            {/* Replace with real info if available, using generic professional profiles for now as per strategy */}
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    JS
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Engineering Team</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-4">Core Development</p>
                                <p className="text-slate-600 text-sm">
                                    Obsessed with WebAssembly and browser performance. Dedicated to making complex PDF operations run smoothly in JavaScript.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    UX
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Design Team</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-4">Product Experience</p>
                                <p className="text-slate-600 text-sm">
                                    Focused on creating an intuitive, clutter-free interface that helps users get their work done in seconds, not minutes.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    S
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Security Team</h3>
                                <p className="text-indigo-600 font-medium text-sm mb-4">Data Privacy</p>
                                <p className="text-slate-600 text-sm">
                                    Constantly auditing our architecture to ensure zero data leakage and maintaining strict compliance with privacy standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Stats */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Files Processed", value: "1M+" },
                            { label: "Happy Users", value: "500k+" },
                            { label: "Countries Served", value: "150+" },
                            { label: "Uptime", value: "99.9%" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About UsePDF",
                        "description": "UsePDF is a free, privacy-focused online PDF toolset capable of merging, splitting, compressing, and editing PDFs directly in the browser.",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "UsePDF",
                            "url": "https://www.usepdf.in",
                            "logo": "https://www.usepdf.in/logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "contact@usepdf.in",
                                "contactType": "customer support"
                            }
                        }
                    })
                }}
            />
        </div>
    );
}
