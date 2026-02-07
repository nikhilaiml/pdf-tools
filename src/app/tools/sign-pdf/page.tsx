import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';
import SignPdfClient from './SignPdfClient';

export const metadata: Metadata = {
    title: 'Sign PDF Online – Fill and Sign PDF Documents Free | UsePDF',
    description: 'Sign PDF documents online for free. Fill forms, add electronic signatures, and download securely. No signup or installation required.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/sign-pdf',
    },
    openGraph: {
        title: 'Sign PDF Online – Fill and Sign PDF Documents Free | UsePDF',
        description: 'Sign PDF documents online for free. Fill forms, add electronic signatures, and download securely. No signup or installation required.',
        url: 'https://www.usepdf.in/tools/sign-pdf',
    }
};

export default function SignPdfPage() {
    const steps = [
        {
            title: "Upload PDF",
            description: "Upload the PDF document you want to sign."
        },
        {
            title: "Sign PDF",
            description: "Create your signature and place it on the document."
        },
        {
            title: "Download",
            description: "Download the signed PDF instantly."
        }
    ];

    const seoContent = (
        <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Sign a PDF Online</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Upload your PDF document</li>
                    <li>Fill text fields and add dates</li>
                    <li>Create or upload your signature</li>
                    <li>Place the signature anywhere on the PDF</li>
                    <li>Download the signed PDF instantly</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our Sign PDF Tool</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Sign PDF documents online in seconds</li>
                    <li>Fill and sign PDF forms easily</li>
                    <li>No watermark added</li>
                    <li>No registration or email required</li>
                    <li>Works on mobile, tablet, and desktop</li>
                    <li>Secure, private, and fast</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Signing contracts and agreements</li>
                    <li>Filling government and office forms</li>
                    <li>Approving invoices and documents</li>
                    <li>Business and remote work paperwork</li>
                    <li>Academic and personal documents</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">How can I sign a PDF online?</h3>
                        <p>Simply upload your PDF to UsePDF, select the signature tool, draw or type your signature, and place it on the document. It's that easy!</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Is this Sign PDF tool free to use?</h3>
                        <p>Yes, our tool is 100% free. You can fill and sign as many documents as you need without any hidden fees or subscriptions.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are electronic signatures legally valid?</h3>
                        <p>Yes, electronic signatures are generally legally binding for most transactions, but we recommend checking with your local laws for specific use cases.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are my documents safe and private?</h3>
                        <p>Absolutely. We prioritize your privacy. All signing happens securely in your browser, and your files are never stored on our servers.</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 p-8 rounded-2xl">
                <p className="mb-4">
                    Need to do more with your PDFs? UsePDF has you covered.
                    Users can{' '}
                    <Link href="/tools/compress-pdf" className="text-blue-700 font-semibold hover:underline">
                        Compress PDF
                    </Link>{' '}
                    files to save space,{' '}
                    <Link href="/tools/merge-pdf" className="text-blue-700 font-semibold hover:underline">
                        Merge PDF
                    </Link>{' '}
                    documents, or{' '}
                    <Link href="/tools/protect-pdf" className="text-blue-700 font-semibold hover:underline">
                        Protect PDF
                    </Link>{' '}
                    files with passwords. You can compress or protect PDF files before signing, or convert signed PDFs into Word using other tools available on the website.
                </p>
            </section>
        </div>
    );

    return (
        <ToolPageLayout
            title="Sign PDF Online – Fill and Sign PDF Documents Free"
            subtitle="Sign PDF documents online. Fill forms, add text, and electronic signatures easily. Free, fast, and secure."
            steps={steps}
            seoContent={seoContent}
            showCta={false}
        >
            <SignPdfClient />
        </ToolPageLayout>
    );
}
