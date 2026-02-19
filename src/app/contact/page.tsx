import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact UsePDF - Get Support & Feedback',
    description: 'Need help or have feedback? Contact the UsePDF team. We offer email support for all our free PDF tools.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#faf8f5] font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Touch</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Have a question, bug report, or feature request? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                We are a small, dedicated team. We try our best to respond to all inquiries within 24-48 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Email Us</h3>
                                        <p className="text-slate-600 mb-1">For general inquiries and support:</p>
                                        <a href="mailto:contact@usepdf.in" className="text-indigo-600 font-medium hover:underline">contact@usepdf.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Support Hours</h3>
                                        <p className="text-slate-600">Monday - Friday</p>
                                        <p className="text-slate-600">9:00 AM - 6:00 PM (IST)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Location</h3>
                                        <p className="text-slate-600">Digital Nomad Team</p>
                                        <p className="text-slate-600">Based in India 🇮🇳</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ / Direct Action */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-indigo-500" />
                                Common Questions
                            </h2>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                    <h3 className="font-medium text-slate-900 mb-1">Found a bug?</h3>
                                    <p className="text-sm text-slate-600 mb-2">Please let us know which tool and browser you are using.</p>
                                    <a href="mailto:bugs@usepdf.in" className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                        Report Bug <Send className="w-3 h-3" />
                                    </a>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                    <h3 className="font-medium text-slate-900 mb-1">Feature Request?</h3>
                                    <p className="text-sm text-slate-600 mb-2">We build what you need. Tell us what tool we should add next.</p>
                                    <a href="mailto:features@usepdf.in" className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                                        Suggest Feature <Send className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact UsePDF",
                        "description": "Contact Us page for UsePDF.in",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "UsePDF",
                            "url": "https://www.usepdf.in",
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
