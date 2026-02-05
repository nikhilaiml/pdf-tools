/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import BatchProcessor from './BatchProcessor';
import ToolPageLayout from '../../components/ToolPageLayout';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, FileText, Layers, HelpCircle, Lock, Unlock, Minimize2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Batch PDF Processing Online – Process Multiple PDF Files at Once',
    description: 'Process multiple PDF files at once online for free. Compress, convert, flatten, or merge PDFs in bulk. Fast, secure, and no software required.',
    keywords: [
        'batch pdf processing',
        'process multiple pdf files',
        'bulk pdf processing',
        'batch process pdf',
        'multiple pdf files at once',
        'batch pdf tool',
        'bulk pdf tool',
        'pdf batch processing online',
        'handle multiple pdf files',
        'process pdfs together'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/batch-pdf-processing',
    },
    openGraph: {
        title: 'Batch PDF Processing Online – Process Multiple PDF Files at Once',
        description: 'Efficiently handle multiple PDF files with our free online batch processing tool. Compress, convert, and manage PDFs in bulk.',
        url: 'https://usepdf.in/tools/batch-pdf-processing',
        type: 'website',
    }
};

export default function BatchProcessingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is batch PDF processing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Batch PDF processing allows you to perform actions on multiple PDF files simultaneously, such as compressing or converting them, saving you significant time compared to processing files one by one."
                }
            },
            {
                "@type": "Question",
                "name": "How can I process multiple PDF files at once?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload all your desired PDF files to our batch tool, select the action you want to apply (like compression or flattening), and click start. The tool processes them all together."
                }
            },
            {
                "@type": "Question",
                "name": "Is batch PDF processing free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our batch processing tool is completely free to use. You can process multiple files without observing any hidden costs or subscription fees."
                }
            },
            {
                "@type": "Question",
                "name": "How many PDF files can I upload at once?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can upload multiple files in a single batch. While there is a reasonable limit to ensure performance, most users find it sufficient for their bulk processing needs."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to batch process PDF files online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We prioritize your privacy and security. All files processed through our service are handled securely and are automatically deleted from our servers after a short period."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload multiple PDF files",
            description: "Select, drag, and drop all the PDF documents you need to process at once."
        },
        {
            title: "Choose the required PDF action",
            description: "Select from options like compress, flatten, or convert to apply to all files."
        },
        {
            title: "Process all PDFs together in batch",
            description: "Click the start button to run the selected operation on all uploaded files simultaneously."
        },
        {
            title: "Download the processed PDF files",
            description: "Get your updated files individually or download them all together as a ZIP archive."
        }
    ];

    const seoContent = (
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* What Is Batch Processing */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Batch PDF Processing?</h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                    <p>
                        <strong>Batch PDF processing</strong> refers to the capability to execute a specific task on a large number of PDF files simultaneously, rather than handling each file individually. For users who deal with dozens or hundreds of documents—such as invoices, reports, or archives—this is a game-changer. Instead of repeating the same manual steps for every single document, <strong>bulk pdf processing</strong> automates the workflow. Whether you need to compress, convert, or flatten files, being able to <strong>batch process pdf</strong> documents saves hours of manual labor, reduces the risk of human error, and significantly boosts overall productivity.
                    </p>
                </div>
            </section>

            {/* How To Process */}
            <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Process Multiple PDF Files at Once</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-indigo-100 relative">
                            <span className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                {idx + 1}
                            </span>
                            <h3 className="font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our Batch PDF Processing Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "True Batch Processing", desc: "Handle many files in one go.", icon: Layers },
                        { title: "Process Multiple Files", desc: "Simultaneous execution.", icon: FileText },
                        { title: "Bulk Upload Support", desc: "Drag & drop folders of files.", icon: ArrowRight },
                        { title: "Fast & Efficient", desc: "High-speed server processing.", icon: Zap },
                        { title: "Secure File Handling", desc: "Privacy-first architecture.", icon: Shield },
                        { title: "No Watermark Added", desc: "Professional, clean results.", icon: Check },
                        { title: "Works on All Devices", desc: "Desktop, tablet, and mobile.", icon: Smartphone },
                        { title: "No Registration", desc: "Immediate access, no login.", icon: HelpCircle },
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                            <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tools Internal Links */}
            <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Batch PDF Tools You May Also Need</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/tools/compress-pdf" className="group block bg-white p-6 rounded-xl border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <Minimize2 className="w-6 h-6 text-indigo-600" />
                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Compress PDF</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Need to reduce file size? Use our tool to <span className="text-indigo-600 font-medium">batch compress PDF files</span> efficiently without losing quality.</p>
                    </Link>

                    <Link href="/tools/merge-pdf" className="group block bg-white p-6 rounded-xl border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <Layers className="w-6 h-6 text-indigo-600" />
                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Merge PDF</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Combine documents easily. You can <span className="text-indigo-600 font-medium">merge multiple PDF files</span> into a single, organized document in seconds.</p>
                    </Link>

                    <Link href="/tools/split-pdf" className="group block bg-white p-6 rounded-xl border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <FileText className="w-6 h-6 text-indigo-600" />
                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Split PDF</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Break large documents apart. Learn how to <span className="text-indigo-600 font-medium">split PDF files in batch</span> to extract pages or separate chapters.</p>
                    </Link>

                    <Link href="/tools/protect-pdf" className="group block bg-white p-6 rounded-xl border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <Lock className="w-6 h-6 text-indigo-600" />
                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Protect PDF</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Secure your data. You can <span className="text-indigo-600 font-medium">password protect multiple PDF files</span> at once to ensure confidentiality.</p>
                    </Link>

                    <Link href="/tools/unlock-pdf" className="group block bg-white p-6 rounded-xl border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <Unlock className="w-6 h-6 text-indigo-600" />
                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Unlock PDF</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Forgot a password? Use our tool to <span className="text-indigo-600 font-medium">unlock multiple PDF files</span> instantly and regain access.</p>
                    </Link>

                    <Link href="/" className="group block bg-white p-6 rounded-xl border border-slate-100 hover:border-indigo-300 hover:shadow-md transition-all flex items-center justify-center">
                        <div className="text-center">
                            <Globe className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">View All Tools</h3>
                            <p className="text-slate-600 text-sm mt-1">Explore our full suite</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Why Use & Quality */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF for Batch PDF Processing</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF is designed to be the ultimate productivity booster for managing documents. Our <strong>batch pdf processing</strong> tool empowers you to handle volume with ease, allowing you to process dozens of files in the time it usually takes to handle one. We combine powerful bulk processing capabilities with a secure, privacy-focused environment. Whether you are archiving business records or preparing study materials, our platform ensures you get the job done faster. Plus, it is completely online and free, meaning you can be productive from any device, anywhere, without installing software.
                    </p>
                    <ul className="space-y-3">
                        {["Secure & Confidential", "High-Volume Processing", "No Installation Required"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Batch Process PDF Files Without Losing Quality</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Quantity does not mean improving on quality. Our batch processor is engineered to treat every single file with the same high standards as an individual upload. We ensure that the original resolution, text clarity, and formatting of your documents are preserved throughout the process. Whether you are compressing or converting, you can trust that your professional and business documents will remain sharp and presentable.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {jsonLd.mainEntity.map((faq, idx) => (
                        <div key={idx} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 mb-3">{faq.name}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    const introText = "Streamline your document workflow with UsePDF's powerful batch processing tool. We understand that handling files one by one is time-consuming, which is why we allow you to batch pdf processing online for free. Upload multiple documents simultaneously and apply actions like compression, conversion, or flattening in a single click. Our service makes it easy to process multiple pdf files at once, significantly boosting your productivity. With no software installation needed and secure handling guaranteed, managing bulk document tasks has never been faster or easier. Experience efficient, high-quality bulk processing today.";

    return (
        <ToolPageLayout
            title="Batch PDF Processing Online – Process Multiple PDF Files at Once"
            subtitle={introText}
            steps={steps}
            showCta={false}
            seoContent={seoContent}
        >
            <BatchProcessor />
        </ToolPageLayout>
    );
}
