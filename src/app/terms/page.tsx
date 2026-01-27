'use client';

import { AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services.
                        </p>
                        <p className="text-purple-200 text-sm mt-4">Last updated: January 2025</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Notice */}
                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8 flex gap-4">
                        <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                        <p className="text-purple-800 text-sm">
                            By using PDF Tools, you agree to these Terms of Service.
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600">
                                By accessing or using PDF Tools, you agree to be bound by these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="text-gray-600">
                                PDF Tools provides online tools for PDF document manipulation including merging, splitting, compressing, converting, and other PDF-related operations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
                            <div className="text-gray-600 space-y-3">
                                <p>You agree to use the Service only for lawful purposes. You may not:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Use the Service to process illegal content</li>
                                    <li>Attempt to bypass any limitations</li>
                                    <li>Interfere with or disrupt the Service</li>
                                    <li>Violate any applicable laws</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                            <p className="text-gray-600">
                                The Service and its content are owned by PDF Tools and protected by intellectual property laws. You retain all rights to your uploaded content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer</h2>
                            <p className="text-gray-600">
                                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
                            <p className="text-gray-600">
                                Questions? Contact us at{' '}
                                <a href="mailto:legal@pdftools.com" className="text-purple-600 hover:underline">legal@pdftools.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
