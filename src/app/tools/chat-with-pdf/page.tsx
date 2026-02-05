/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

import Link from 'next/link';
import { Check, Shield, Zap, Smartphone, FileText, Layout, HelpCircle, Bot, Brain } from 'lucide-react';

import ChatWithPdfWrapper from './ChatWithPdfWrapper';

export const metadata: Metadata = {
    title: 'Chat with PDF Online – Ask Questions from PDF Using AI',
    description: 'Chat with PDF files online using AI for free. Ask questions, get summaries, and find answers instantly from your PDF documents. No signup required.',
    keywords: [
        'chat with pdf',
        'chat with pdf ai',
        'chat with pdf free',
        'ai chat with pdf',
        'ai to chat with pdf',
        'chat with pdf free ai',
        'pdf chat online',
        'ask questions from pdf',
        'pdf ai chat'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/chat-with-pdf',
    },
    openGraph: {
        title: 'Chat with PDF Online – Ask Questions from PDF Using AI',
        description: 'Interact with your PDF documents using AI. Upload a file, ask questions, and get instant, accurate answers for free.',
        url: 'https://usepdf.in/tools/chat-with-pdf',
        type: 'website',
    }
};

export default function ChatWithPdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I chat with a PDF using AI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your PDF to UsePDF, and our AI will analyze it. You can then type your questions into the chatbox to get instant answers drawn directly from the document's content."
                }
            },
            {
                "@type": "Question",
                "name": "Is Chat with PDF free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI chat tool is completely free. You can upload PDFs and ask as many questions as you need without any subscription or hidden fees."
                }
            },
            {
                "@type": "Question",
                "name": "Can I ask questions from large PDFs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our tool is capable of processing larger documents, allowing you to find specific information or summaries even from extensive reports and books."
                }
            },
            {
                "@type": "Question",
                "name": "Is my PDF data secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Security is our top priority. Your files are processed securely and are never shared. We maintain strict privacy standards to ensure your data remains confidential."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install any software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, our Chat with PDF tool works entirely in your web browser. There is no software to download or install, making it accessible from any device."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload your PDF file",
            description: "Select the document you want to analyze from your device."
        },
        {
            title: "Let AI analyze the document",
            description: "Wait a moment while our AI reads and understands the content."
        },
        {
            title: "Ask questions or request summaries",
            description: "Type your query in the chat to get specific info or overview."
        },
        {
            title: "Get instant answers from the PDF",
            description: "Receive accurate responses derived directly from your file."
        }
    ];

    const seoContent = (
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* What Is Chat with PDF */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Chat with PDF?</h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                    <p>
                        <strong>Chat with PDF</strong> is a revolutionary way to interact with your digital documents using artificial intelligence. Instead of manually scrolling through hundreds of pages to find a specific piece of information, you can simply have a conversation with your file. Our tool uses advanced AI to "read" and understand the content of your PDF, allowing you to ask questions, request summaries, or clarify complex points in seconds. It transforms static documents into interactive knowledge bases, saving you significant time and effort.
                    </p>
                </div>
            </section>

            {/* How To Chat */}
            <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Chat with a PDF Using AI</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our AI Chat with PDF Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "AI-Powered Analysis", desc: "Chat with PDF files intelligently.", icon: Bot },
                        { title: "Instant Answers", desc: "Get responses in seconds.", icon: Zap },
                        { title: "Document Summaries", desc: "Quickly grasp key points.", icon: FileText },
                        { title: "Large File Support", desc: "Works with extensive docs.", icon: Layout },
                        { title: "Secure & Private", desc: "Your data stays confidential.", icon: Shield },
                        { title: "Free AI Chat", desc: "No cost to use features.", icon: Brain },
                        { title: "Universal Access", desc: "Mobile, tablet, desktop ready.", icon: Smartphone },
                        { title: "No Registration", desc: "Start chatting immediately.", icon: HelpCircle },
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                            <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* AI Technology */}
            <section className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">AI Technology Behind Chat with PDF</h2>
                <p className="leading-relaxed mb-0 text-slate-300">
                    Our tool leverages cutting-edge artificial intelligence to understand document structure and meaning. By employing techniques similar to <strong>chat with pdf using langchain</strong> and RAG (Retrieval-Augmented Generation) pipelines, we ensure that the answers you receive are accurate and contextually relevant. The AI breaks down your document into manageable chunks to find the most pertinent information for every query, delivering a seamless <strong>deepseek chat with pdf</strong> experience that feels like talking to a knowledgeable assistant.
                </p>
            </section>

            {/* Why Use UsePDF */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF for AI Chat with PDF</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF provides a frictionless way to unlock the value in your documents. Our <strong>chat with pdf free ai</strong> tool removes barriers to information, making it easy for students, researchers, and professionals to digest content quickly. We combine the power of advanced <strong>pdf ai chat</strong> with a commitment to user privacy and ease of use. With no software to install and a simple, intuitive interface, you can focus on getting answers rather than managing tools.
                    </p>
                    <ul className="space-y-3">
                        {["Completely Free to Use", "Privacy-Focused Design", "No Learning Curve"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ask Questions from PDF with Confidence</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Whether you are studying for an exam, reviewing a legal contract, or analyzing a financial report, accuracy matters. Our AI is designed to retrieve and synthesize information directly from your source file, minimizing hallucinations and ensuring reliable answers. You can verify the information easily, as the tool effectively acts as your smart reading companion for any PDF document.
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

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-10 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Free PDF Tools</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/tools/pdf-summary" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF Summary
                    </Link>
                    <Link href="/tools/pdf-to-text" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF to Text
                    </Link>
                    <Link href="/tools/search-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Search PDF
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        All PDF Tools
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Unlock the knowledge within your documents with UsePDF's intelligent chat tool. Our platform allows you to chat with pdf ai capabilities, enabling you to ask questions, request summaries, and get instant answers from any PDF file. Whether you're a student needing to understand a textbook or a professional reviewing a contract, our ai chat with pdf feature makes reading faster and more interactive. It's fully online, completely free, and requires no software installation. Experience the future of document interaction and save hours of reading time today.";

    return (
        <ChatWithPdfWrapper
            seoContent={seoContent}
            title="Chat with PDF Online – Ask Questions from PDF Using AI"
            subtitle={introText}
            steps={steps}
        />
    );
}
