/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import DeletePdfClient from './DeletePdfClient';
import { HelpCircle, Layers, Globe, Shield, Zap, Check, Smartphone, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delete PDF Pages Online – Remove Pages from PDF Free',
  description: 'Delete pages from PDF files online. Remove unwanted pages easily with no signup and no installation. Fast, secure, and browser-based processing.',
  keywords: ['delete pdf pages online', 'remove pages from pdf online', 'delete pages from pdf', 'remove pdf pages online free', 'delete pdf pages free'],
  alternates: {
    canonical: 'https://www.usepdf.in/tools/delete-pdf-pages',
  },
  openGraph: {
    title: 'Delete PDF Pages Online – Remove Pages from PDF Free',
    description: 'Delete pages from PDF files online. Remove unwanted pages easily with no signup and no installation. Fast, secure, and browser-based processing.',
    url: 'https://www.usepdf.in/tools/delete-pdf-pages',
    type: 'website',
  }
};

export default function DeletePagesPage() {
  // Schema Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is delete PDF pages online free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Delete PDF Pages tool is 100% free. You can remove pages from your documents without any cost or limitations."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to remove pages from a PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All processing happens in your browser for maximum security. Your files are never stored on our servers and are deleted automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Can I delete specific pages only?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can specify exactly which pages to remove by entering single page numbers (e.g., 5) or page ranges (e.g., 1-3)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install any software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No installation is required. UsePDF works entirely in your web browser, compatible with Windows, Mac, Linux, iOS, and Android."
        }
      }
    ]
  };

  const seoContent = (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* H1 & Intro Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Delete PDF Pages Online – Remove Pages from PDF Free</h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Users can <strong>delete pages from PDF files online</strong> instantly with UsePDF.
          Remove unwanted pages easily with just a few clicks.
          There is <strong>no signup or installation required</strong>.
          Enjoy fast, secure, and 100% browser-based processing for all your documents.
        </p>
      </section>

      {/* Features */}
      <section>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Delete PDF Pages Online Free", desc: "Remove pages from your PDF documents completely free of charge.", icon: Globe },
            { title: "Remove Specific Pages", desc: "Select and delete specific pages or ranges with precision.", icon: Layers },
            { title: "No Watermark", desc: "Your modified PDF remains clean with no added watermarks.", icon: Shield },
            { title: "No Login Required", desc: "Start removing pages instantly without creating an account.", icon: Zap },
            { title: "Works on Mobile & Desktop", desc: "Compatible with all devices and browsers for on-the-go editing.", icon: Smartphone },
            { title: "Secure & Privacy Focused", desc: "Files are processed locally and auto-deleted for your safety.", icon: Shield },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Delete PDF Pages */}
      <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Delete PDF Pages</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Upload PDF File", desc: "Select the PDF file you want to edit." },
            { step: "2", title: "Select Pages", desc: "Enter page numbers to remove." },
            { step: "3", title: "Delete PDF Pages", desc: "Process the file online instantly." },
            { step: "4", title: "Download", desc: "Save your updated PDF file." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-indigo-100 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {item.step}
              </span>
              <h3 className="font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases & Why Use */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Delete PDF Pages?</h2>
          <ul className="space-y-4">
            {[
              "Faster than other online PDF page remover tools",
              "Simple and clean interface for easy navigation",
              "No quality loss in the remaining pages",
              "100% browser-based processing for privacy"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Use Cases</h2>
          <ul className="space-y-4">
            {[
              "Remove blank pages from PDF documents",
              "Delete unwanted pages from scanned PDFs",
              "Clean up PDF documents before presentation",
              "Prepare PDFs for sharing or submission"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-indigo-600" />
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jsonLd.mainEntity.map((faq, i) => (
            <div key={i} className="bg-slate-50/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.name}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="border-t border-slate-200 pt-10 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Free PDF Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
            Split PDF
          </Link>
          <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
            Merge PDF
          </Link>
          <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
            Compress PDF
          </Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
            Free PDF Tools Online
          </Link>
        </div>
      </section>
    </div>
  );

  return (
    <DeletePdfClient seoContent={seoContent} />
  );
}
