'use client';

import { Eye, FileCheck, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GDPRPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            GDPR Compliance
                        </h1>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            Our commitment to protecting your data under GDPR.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Key Rights */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Eye className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Right to Access</h3>
                            <p className="text-gray-500 text-sm">Request a copy of your personal data.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FileCheck className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Right to Erasure</h3>
                            <p className="text-gray-500 text-sm">Request deletion of your data.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Right to Restrict</h3>
                            <p className="text-gray-500 text-sm">Limit how we process your data.</p>
                        </div>
                    </div>

                    {/* GDPR Content */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is GDPR?</h2>
                            <p className="text-gray-600">
                                The General Data Protection Regulation (GDPR) is a comprehensive data protection law in the EU that gives individuals greater control over their personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
                            <div className="space-y-4">
                                {['Right to be Informed', 'Right of Access', 'Right to Rectification', 'Right to Erasure', 'Right to Data Portability', 'Right to Object'].map((right, index) => (
                                    <div key={right} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{right}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Comply</h2>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                                <li>Files are processed locally in your browser</li>
                                <li>Minimal data collection with clear purposes</li>
                                <li>Transparent privacy policy and consent</li>
                                <li>Secure data handling with encryption</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercise Your Rights</h2>
                            <p className="text-gray-600">
                                Contact our Data Protection Officer at{' '}
                                <a href="mailto:dpo@pdftools.com" className="text-purple-600 hover:underline">dpo@pdftools.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
