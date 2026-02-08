/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import DeletePdfClient from './DeletePdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Trash2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delete PDF Pages Online Free – Remove Unwanted Pages Easily',
  description: 'Delete PDF pages online free. Remove unwanted pages from PDF files. No signup, no watermark. Fast, secure PDF page remover tool.',
  keywords: [
    'delete pdf pages online free',
    'delete pages from pdf',
    'remove pages from pdf',
    'delete pdf pages online',
    'remove pdf pages online',
    'delete pdf no signup',
    'delete pdf without watermark',
    'remove unwanted pages from pdf',
    'pdf page remover',
    'cut pages from pdf',
    'delete pages from large pdf',
    'pdf editor delete pages'
  ],
  alternates: {
    canonical: 'https://www.usepdf.in/tools/delete-pdf-pages',
  },
  openGraph: {
    title: 'Delete PDF Pages Online Free – Remove Unwanted Pages Easily',
    description: 'Delete PDF pages online free. Remove unwanted pages instantly. No signup, no watermark. Fast & secure.',
    url: 'https://www.usepdf.in/tools/delete-pdf-pages',
    type: 'website',
    siteName: 'UsePDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete PDF Pages Online Free – Remove Pages Instantly',
    description: 'Delete PDF pages online free. No signup, no watermark. Secure PDF page remover tool.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function DeletePagesPage() {
  // FAQs
  const faqs = [
    {
      name: "Is Delete PDF Pages online free?",
      acceptedAnswer: {
        text: "Yes, our delete PDF pages online free tool is 100% free forever. There are no hidden charges, subscriptions, or limits. Remove pages from unlimited PDF files without paying anything."
      }
    },
    {
      name: "Can I delete only one page from a PDF?",
      acceptedAnswer: {
        text: "Yes, you can delete a single page or multiple pages at once. Simply select the pages you want to remove and our pdf page remover will handle the rest instantly."
      }
    },
    {
      name: "Will deleting pages affect PDF quality?",
      acceptedAnswer: {
        text: "No, our tool maintains the original quality of remaining pages. We remove unwanted pages from pdf without any compression or quality loss. Your edited PDF looks exactly like the original."
      }
    },
    {
      name: "Is signup or registration required?",
      acceptedAnswer: {
        text: "No signup required. Simply upload your PDF, select pages to delete, and download instantly. We believe in delete pdf no signup approach for maximum convenience and privacy."
      }
    },
    {
      name: "Does this tool work on mobile devices?",
      acceptedAnswer: {
        text: "Absolutely! Our online PDF page remover works perfectly on Android phones, iPhones, tablets, and laptops. No app installation needed—works directly in your browser."
      }
    },
    {
      name: "Can I delete pages from large PDF files?",
      acceptedAnswer: {
        text: "Yes, our tool handles delete pages from large pdf efficiently. You can remove pages from documents with many pages. Processing may take a few extra seconds for very large files."
      }
    },
    {
      name: "Is my PDF data safe when deleting pages online?",
      acceptedAnswer: {
        text: "Your security is our priority. We use SSL encryption for all transfers. Files are processed securely and automatically deleted from our servers within one hour."
      }
    }
  ];

  // How-To Steps
  const howToSteps = [
    {
      name: "Upload Your PDF File",
      text: "Click the upload button or drag and drop your PDF document. Our pdf page remover accepts files of any size."
    },
    {
      name: "Select Pages to Delete",
      text: "Choose the specific pages you want to remove. You can select single pages, multiple pages, or page ranges to cut pages from pdf."
    },
    {
      name: "Download Updated PDF",
      text: "Click 'Delete Pages' and download your modified PDF. The result is delete pdf without watermark and ready for immediate use."
    }
  ];

  // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Delete PDF Pages Online Free",
        "description": "Delete PDF pages online free. Remove unwanted pages from PDF files without watermark or signup.",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "url": "https://www.usepdf.in/tools/delete-pdf-pages",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Delete PDF Pages Online Free",
        "description": "Step-by-step guide to delete pages from pdf and remove unwanted pages without watermark or signup.",
        "totalTime": "PT1M",
        "step": howToSteps.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.name,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.acceptedAnswer.text
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.usepdf.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tools",
            "item": "https://www.usepdf.in/tools"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Delete PDF Pages",
            "item": "https://www.usepdf.in/tools/delete-pdf-pages"
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Introduction */}
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-slate-700 leading-relaxed">
          Need to <strong>delete PDF pages online free</strong>? Whether you're removing blank pages from assignments,
          cleaning up reports, or preparing documents for form submissions—our <strong>pdf page remover</strong> makes
          it effortless. No signup. No watermark. Just instant page removal.
        </p>
        <p className="text-sm text-slate-500 mt-3">
          Trusted by students, professionals, and businesses worldwide.
        </p>
      </section>

      {/* What is Delete PDF Tool */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Delete PDF Pages Tool?</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          A <strong>delete PDF pages tool</strong> allows you to permanently remove specific pages from your PDF documents.
          Unlike splitting, which creates separate files, deleting removes pages completely from the original document.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          This is incredibly useful when you have blank pages, confidential information, or irrelevant content that needs
          to be removed. Our <strong>pdf editor delete pages</strong> feature handles this in seconds, directly in your browser.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Online page removal tools are preferred because they require no software installation, work on any device,
          and provide instant results. Simply upload, select pages to remove, and download your clean PDF.
        </p>
      </section>

      {/* Why Delete PDF Pages */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Do People Delete PDF Pages?</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Remove blank or extra pages from documents",
            "Delete confidential or sensitive information",
            "Prepare PDFs for form submission requirements",
            "Reduce file size by removing unnecessary pages",
            "Share only the required content with others",
            "Clean up scanned documents before sharing"
          ].map((reason, i) => (
            <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to Delete - Steps */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Delete PDF Pages Online Free</h2>
        <p className="text-slate-600 mb-6">
          Follow these simple steps to <strong>remove pages from pdf</strong> in seconds:
        </p>
        <div className="space-y-4">
          {howToSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                <p className="text-slate-600 text-sm">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center">
          ✓ No signup required &nbsp; ✓ No watermark added &nbsp; ✓ 100% free
        </p>
      </section>

      {/* Features */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF Delete PDF Tool</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
            { icon: <Trash2 className="w-6 h-6 text-red-500" />, title: "Delete Any Pages", desc: "Remove single or multiple pages" },
            { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Original Quality", desc: "No quality loss in remaining pages" },
            { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure & Private", desc: "Files auto-delete in 1 hour" },
            { icon: <Smartphone className="w-6 h-6 text-orange-500" />, title: "Works Everywhere", desc: "Mobile, tablet, and desktop" },
            { icon: <Lock className="w-6 h-6 text-blue-500" />, title: "No Watermark", desc: "Clean professional output" }
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="p-2 bg-white rounded-lg shadow-sm">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases for Deleting PDF Pages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Students & Assignments", desc: "Remove extra or blank pages from assignments before submitting to college portals or professors." },
            { title: "Official & Government Forms", desc: "Prepare clean PDFs by removing unnecessary pages before uploading to official submission portals." },
            { title: "Business Report Cleanup", desc: "Delete outdated or irrelevant pages from reports before sharing with clients or stakeholders." },
            { title: "Printing Selected Content", desc: "Remove pages you don't need to print, saving paper and ensuring only relevant content is printed." },
            { title: "Removing Confidential Pages", desc: "Delete sensitive or private pages before sharing documents externally for security purposes." }
          ].map((useCase, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{useCase.title}</h3>
              <p className="text-slate-600 text-sm">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-600" />
          Is It Safe to Delete PDF Pages Online?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Absolutely! Your security is our top priority. We use <strong>SSL encryption</strong> for all file transfers,
          ensuring your documents are protected during upload and download.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Our tool processes files securely, and all uploaded documents are stored only temporarily.
          Files are <strong>automatically deleted within one hour</strong> after processing is complete.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We never access, share, or sell your documents. Your privacy is guaranteed with our privacy-first approach.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Edited PDF vs Original PDF – Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                <th className="p-4 font-semibold text-slate-900 border-b">Original PDF</th>
                <th className="p-4 font-semibold text-slate-900 border-b">Edited PDF (Pages Deleted)</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b">
                <td className="p-4 font-medium">File Size</td>
                <td className="p-4">Larger (all pages)</td>
                <td className="p-4">Smaller (fewer pages)</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-4 font-medium">Page Relevance</td>
                <td className="p-4">May include unwanted pages</td>
                <td className="p-4">Only necessary content</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Sharing Convenience</td>
                <td className="p-4">Larger file to share</td>
                <td className="p-4">Clean, focused document</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-4 font-medium">Professional Look</td>
                <td className="p-4">May have blank/extra pages</td>
                <td className="p-4">Polished and refined</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Best Use Case</td>
                <td className="p-4">Complete document storage</td>
                <td className="p-4">Sharing, forms & printing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-indigo-600" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50/50 rounded-xl p-5 hover:bg-slate-50 transition-colors">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why UsePDF is Better */}
      <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF Delete PDF Tool?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "No Annoying Ads", desc: "Clean interface without distracting advertisements" },
            { title: "No Forced Registration", desc: "Start deleting pages immediately without creating accounts" },
            { title: "Precise Page Selection", desc: "Delete exactly the pages you want to remove" },
            { title: "Works on Any Device", desc: "Seamless experience on phone, tablet, or computer" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Delete PDF Pages?</h2>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF editing.
          Remove unwanted pages in seconds and share clean documents effortlessly.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
        >
          Delete Pages Now – It's Free
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Internal Links */}
      <section className="border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
            Split PDF Pages Online
          </Link>
          <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
            Merge PDF Files Online
          </Link>
          <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
            Compress PDF Online Free
          </Link>
          <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
            Rearrange PDF Pages
          </Link>
          <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
            Rotate PDF Pages Online
          </Link>
          <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
            Convert PDF to JPG Online
          </Link>
        </div>
      </section>
    </div>
  );

  return (
    <DeletePdfClient seoContent={seoContent} />
  );
}
