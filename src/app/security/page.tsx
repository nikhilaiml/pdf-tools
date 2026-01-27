'use client';

import { Shield, Lock, Server, Eye, CheckCircle, Globe } from 'lucide-react';

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Security
                    </h1>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                        Your security is our top priority. Learn how we protect your data.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Security Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">SSL Encryption</h3>
                        <p className="text-gray-500 text-sm">256-bit encryption for all connections.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Server className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Local Processing</h3>
                        <p className="text-gray-500 text-sm">Files never leave your device.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Eye className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">No Data Access</h3>
                        <p className="text-gray-500 text-sm">We can't see your file contents.</p>
                    </div>
                </div>

                {/* Security Details */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Security Approach</h2>
                        <p className="text-gray-600">
                            At PDF Tools, we've designed our service with security as a fundamental principle. Unlike many online PDF tools that upload your files to servers, our tools process everything locally in your browser.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Protect You</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Client-Side Processing</h3>
                                    <p className="text-gray-600 text-sm">All PDF operations happen directly in your browser. Your files are never uploaded to our servers.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">HTTPS Everywhere</h3>
                                    <p className="text-gray-600 text-sm">All connections to our website are encrypted using TLS 1.3 with 256-bit encryption.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">No File Storage</h3>
                                    <p className="text-gray-600 text-sm">We don't store your files. Once you close the browser tab, your files are gone.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Regular Security Audits</h3>
                                    <p className="text-gray-600 text-sm">We conduct regular security assessments to identify and address vulnerabilities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Secure Infrastructure</h3>
                                    <p className="text-gray-600 text-sm">Our website is hosted on enterprise-grade infrastructure with DDoS protection.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices for Users</h2>
                        <div className="text-gray-600 space-y-3">
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Always access our website via https://</li>
                                <li>Keep your browser updated for latest security patches</li>
                                <li>Use private/incognito mode for sensitive documents</li>
                                <li>Clear browser cache/history after processing sensitive files</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Report a Vulnerability</h2>
                        <p className="text-gray-600">
                            Found a security issue? We appreciate responsible disclosure. Please report security vulnerabilities to{' '}
                            <a href="mailto:security@pdftools.com" className="text-purple-600 hover:underline">security@pdftools.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
