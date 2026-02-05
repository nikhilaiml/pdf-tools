import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';
import FillAndSignPdfClient from './FillAndSignPdfClient';

export const metadata: Metadata = {
    title: 'Fill and Sign PDF Online – Sign PDF Documents Free | UsePDF',
    description: 'Fill PDF forms and sign PDF documents online for free. Add electronic signatures securely. No installation required.',
};

export default function FillAndSignPdfPage() {
    const steps = [
        {
            title: "Upload PDF",
            description: "Upload the PDF document you want to sign or fill."
        },
        {
            title: "Fill & Sign",
            description: "Add text, dates, and your electronic signature."
        },
        {
            title: "Download",
            description: "Download the signed PDF document instantly."
        }
    ];

    const seoContent = (
        <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Fill and Sign a PDF Online</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Upload your PDF document</li>
                    <li>Fill text fields and add dates</li>
                    <li>Create or upload your signature</li>
                    <li>Place the signature anywhere on the PDF</li>
                    <li>Download the signed PDF instantly</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our Fill and Sign PDF Tool</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Fill and sign PDF documents online</li>
                    <li>Add electronic signatures easily</li>
                    <li>No watermark added</li>
                    <li>No registration or email required</li>
                    <li>Works on mobile, tablet, and desktop</li>
                    <li>Fast, secure, and privacy-focused</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Signing contracts and agreements</li>
                    <li>Filling government or office forms</li>
                    <li>Approving invoices and documents</li>
                    <li>Academic and business paperwork</li>
                    <li>Remote document signing</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">How can I fill and sign a PDF online?</h3>
                        <p>Simply upload your PDF to our tool, use the text and signature features to fill in the required information, and place your signature where needed.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Is this Fill and Sign PDF tool free?</h3>
                        <p>Yes, our tool is completely free to use. You can sign and fill as many PDF documents as you need without any cost.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are electronic signatures legally valid?</h3>
                        <p>In many jurisdictions, electronic signatures are legally binding for most business and personal transactions, but you should check your local laws for specific requirements.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are my PDF documents safe and private?</h3>
                        <p>Security is our top priority. We process your files securely, and they are never stored or shared with anyone.</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 p-8 rounded-2xl">
                <p className="mb-4">
                    UsePDF offers a complete suite of PDF tools.
                    Users can{' '}
                    <Link href="/tools/compress-pdf" className="text-blue-700 font-semibold hover:underline">
                        Compress PDF
                    </Link>{' '}
                    to reduce file size,{' '}
                    <Link href="/tools/merge-pdf" className="text-blue-700 font-semibold hover:underline">
                        Merge PDF
                    </Link>{' '}
                    documents together, or{' '}
                    <Link href="/tools/protect-pdf" className="text-blue-700 font-semibold hover:underline">
                        Protect PDF
                    </Link>{' '}
                    files with passwords. You can compress or protect PDFs before signing, or convert signed PDFs to Word using other tools on the website.
                </p>
            </section>
        </div>
    );

    return (
        <ToolPageLayout
            title="Fill and Sign PDF Online – Sign PDF Documents Free"
            subtitle="Fill PDF forms and sign PDF documents online. Add text, dates, and electronic signatures easily. Free, fast, and secure."
            steps={steps}
            seoContent={seoContent}
            showCta={false}
        >
            <FillAndSignPdfClient />
        </ToolPageLayout>
    );
}
