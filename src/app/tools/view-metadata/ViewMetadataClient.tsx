'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Info, FileText, Cloud, Shield, Zap, Globe, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';

const ViewMetadataClient = () => {
    const [file, setFile] = useState<File | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [metadata, setMetadata] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setMetadata(null);
        } else {
            alert('Please select a valid PDF file.');
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleViewMetadata = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);

            const info = {
                Title: pdf.getTitle() || 'N/A',
                Author: pdf.getAuthor() || 'N/A',
                Subject: pdf.getSubject() || 'N/A',
                Keywords: pdf.getKeywords() || 'N/A',
                Creator: pdf.getCreator() || 'N/A',
                Producer: pdf.getProducer() || 'N/A',
                CreationDate: pdf.getCreationDate()?.toLocaleString() || 'N/A',
                ModificationDate: pdf.getModificationDate()?.toLocaleString() || 'N/A',
                PageCount: pdf.getPageCount(),
            };

            setMetadata(info);
        } catch (error) {
            console.error('Error reading metadata:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Select or drag and drop your PDF file to inspect its metadata."
        },
        {
            title: "Step 2: Inspect Info",
            description: "Click the button to extract and display all hidden document properties."
        },
        {
            title: "Step 3: View Results",
            description: "See title, author, creation date, page count, and more details instantly."
        }
    ];

    const seoContent = (
        <>
            <section className="mt-16 prose prose-slate max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is PDF Metadata?</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    PDF metadata contains hidden information inside a PDF document that isn't always visible in the content itself. This data, often referred to as "data about data," provides crucial context about the file. Common metadata fields include the document <strong>title</strong>, <strong>author</strong>, <strong>subject</strong>, <strong>keywords</strong>, producer software (creator), <strong>creation date</strong>, <strong>modification date</strong>, and total <strong>page count</strong>.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Inspect PDF Metadata?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Privacy & Security</h3>
                        <p className="text-slate-600">Before sharing sensitive documents, checking metadata ensures you aren't accidentally revealing hidden author names or editing history.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Verification</h3>
                        <p className="text-slate-600">Verify the authenticity of a document by checking its creation date and the software used to generate it.</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Inspect PDF Online?</h2>
                <p className="text-lg text-slate-700 mb-6">Using our free online tool, you can inspect PDF metadata in three simple steps:</p>
                <ol className="list-decimal pl-6 space-y-4 text-slate-700 mb-12">
                    <li className="pl-2"><span className="font-semibold">Upload your PDF file</span> by dragging it into the box or selecting it from your computer.</li>
                    <li className="pl-2">Click the <span className="font-semibold">"Inspect PDF Metadata Now"</span> button to start the analysis.</li>
                    <li className="pl-2">Instantly view all available document properties, including author, title, and dates.</li>
                </ol>

                <h2 className="text-3xl font-bold text-slate-900 mb-6">Is This PDF Metadata Viewer Secure?</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Yes, absolutely. Our <strong>inspect PDF online</strong> tool processes your files entirely within your web browser. This means your documents are <strong>never uploaded to a server</strong>. The extraction happens locally on your device, ensuring maximum privacy and security for your sensitive data. You can even use this tool offline once the page is loaded!
                </p>
            </section>

            {/* Features Section */}
            <section className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Use Our PDF Inspector?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Results</h3>
                        <p className="text-slate-600">View metadata instantly without installing any software.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Secure & Private</h3>
                        <p className="text-slate-600">Files are processed locally. No uploads, no storing.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">100% Free</h3>
                        <p className="text-slate-600">Free to use on any device, anywhere, anytime.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                <div className="grid gap-6 max-w-3xl mx-auto">
                    {[
                        {
                            q: "How can I inspect PDF metadata online?",
                            a: "Simply upload your PDF to our free tool and click 'Inspect PDF Metadata Now'. The tool will extract and display all hidden properties instantly in your browser."
                        },
                        {
                            q: "Can I see who created a PDF file?",
                            a: "Yes, if the 'Author' or 'Creator' metadata fields are set in the document, our tool will display this information."
                        },
                        {
                            q: "Is PDF metadata private?",
                            a: "Metadata is hidden from the main content view but is accessible to anyone with a viewer. Inspecting it ensures you don't accidentally share private details."
                        },
                        {
                            q: "Does this tool upload my file?",
                            a: "No. Your file is processed locally in your browser using JavaScript. It is never uploaded to our servers, maintaining 100% privacy."
                        }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                            <p className="text-slate-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Explore More PDF Tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { name: "Merge PDF", href: "/tools/merge-pdf" },
                        { name: "Split PDF Online", href: "/tools/split-pdf" },
                        { name: "Compress PDF", href: "/tools/compress-pdf" },
                        { name: "PDF to Word", href: "/tools/pdf-to-word" },
                        { name: "Rotate PDF", href: "/tools/rotate-pdf" },
                        { name: "Delete PDF Pages", href: "/tools/delete-pdf-pages" }
                    ].map((link, i) => (
                        <Link key={i} href={link.href} className="group flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors border border-slate-100 hover:border-indigo-100">
                            <span className="font-medium text-slate-700 group-hover:text-indigo-700">{link.name}</span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" />
                        </Link>
                    ))}
                </div>
            </section>

            <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How can I inspect PDF metadata online?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Simply upload your PDF to our free tool and click 'Inspect PDF Metadata Now'. The tool will extract and display all hidden properties instantly in your browser."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I see who created a PDF file?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, if the 'Author' or 'Creator' metadata fields are set in the document, our tool will display this information."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is PDF metadata private?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Metadata is hidden from the main content view but is accessible to anyone with a viewer. Inspecting it ensures you don't accidentally share private details."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does this tool upload my file?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Your file is processed locally in your browser using JavaScript. It is never uploaded to our servers, maintaining 100% privacy."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );

    return (
        <ToolPageLayout
            title="Inspect PDF Online – View Complete PDF Metadata Instantly"
            subtitle="Inspect hidden properties like title, author, and creation date. 100% free and secure."
            steps={steps}
            ctaText="Inspect PDF Metadata Now"
            onAction={handleViewMetadata}
            loading={loading}
            disabled={!file || !!metadata}
            showCta={!!file && !metadata}
            seoContent={seoContent}
            hideDefaultFeatures={true}
            hideTestimonials={true}
        >
            <h1 className="text-3xl font-bold mb-4">
                Inspect PDF Online – View Complete PDF Metadata Instantly
            </h1>
            {!file ? (
                <div
                    className={`
                        bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
                        transition-all duration-300 cursor-pointer
                        ${isDragging
                            ? 'border-indigo-500 bg-indigo-50 scale-[1.02]'
                            : 'border-slate-200 hover:border-indigo-400 hover:shadow-2xl'
                        }
                    `}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-indigo-100' : 'bg-slate-50'}`}>
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-indigo-500' : 'text-slate-400'}`} strokeWidth={1.5} />
                        </div>
                    </div>

                    <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-indigo-700' : 'text-slate-800'}`}>
                        Drag & Drop PDF Here
                    </p>
                    <p className="text-sm sm:text-base text-slate-500 text-center">or click to browse</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />

                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
                        <Shield className="w-3 h-3" />
                        Files are processed locally in your browser. Nothing is uploaded.
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-6 p-3 sm:p-4 bg-slate-50 rounded-xl">
                        <div className="p-2 sm:p-3 bg-indigo-100 rounded-lg">
                            <FileText className="text-indigo-500 w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-900 truncate text-sm sm:text-base">{file.name}</p>
                            <p className="text-xs sm:text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                            onClick={() => { setFile(null); setMetadata(null); }}
                            className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>

                    {!metadata && (
                        <button
                            onClick={handleViewMetadata}
                            disabled={loading}
                            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <Info size={20} />}
                            <span className="text-sm sm:text-base">{loading ? 'Processing...' : 'Inspect PDF Metadata Now'}</span>
                        </button>
                    )}

                    {metadata && (
                        <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200">
                            <h3 className="text-lg font-bold mb-4 text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                                <Info className="w-5 h-5 text-indigo-500" />
                                Document Properties
                            </h3>
                            <div className="space-y-0">
                                {Object.entries(metadata).map(([key, value], i) => (
                                    <div key={key} className={`flex flex-col sm:flex-row sm:justify-between py-3 ${i !== Object.entries(metadata).length - 1 ? 'border-b border-slate-200' : ''}`}>
                                        <span className="text-sm font-medium text-slate-500 mb-1 sm:mb-0 w-1/3">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <span className="text-sm font-semibold text-slate-900 break-all sm:text-right flex-1">
                                            {String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default ViewMetadataClient;
