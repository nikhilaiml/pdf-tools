'use client';

import { FileText, AlertCircle } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
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
                        By using PDF Tools, you agree to these Terms of Service. If you do not agree, please do not use our services.
                    </p>
                </div>

                {/* Terms Content */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600">
                            By accessing or using PDF Tools ("Service"), you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                        <p className="text-gray-600">
                            PDF Tools provides online tools for PDF document manipulation including merging, splitting, compressing, converting, and other PDF-related operations. The service is provided "as is" and "as available."
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
                        <div className="text-gray-600 space-y-3">
                            <p>You agree to use the Service only for lawful purposes. You may not:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Use the Service to process illegal or unauthorized content</li>
                                <li>Attempt to bypass any limitations or restrictions</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Use automated systems to access the Service excessively</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p className="text-gray-600">
                            The Service and its original content, features, and functionality are owned by PDF Tools and are protected by international copyright, trademark, and other intellectual property laws. You retain all rights to your uploaded content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
                        <p className="text-gray-600">
                            You are solely responsible for the content you process using our Service. You represent that you have all necessary rights to the files you upload. We do not claim ownership of any content you process.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                        <p className="text-gray-600">
                            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-600">
                            IN NO EVENT SHALL PDF TOOLS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                        <p className="text-gray-600">
                            We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last updated" date. Continued use of the Service constitutes acceptance of modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                        <p className="text-gray-600">
                            Questions about these Terms? Contact us at{' '}
                            <a href="mailto:legal@pdftools.com" className="text-purple-600 hover:underline">legal@pdftools.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
