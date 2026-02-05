import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';
import ComparePdfClient from './ComparePdfClient';

export const metadata: Metadata = {
    title: 'Compare PDF Online – Find Difference Between Two PDFs Free',
    description: 'Compare two PDF files online and instantly find differences. Free, secure, and easy-to-use PDF comparison tool.',
};

export default function ComparePdfPage() {
    const steps = [
        {
            title: "Upload Files",
            description: "Upload the first and second PDF files you want to compare."
        },
        {
            title: "Compare PDF",
            description: "Click the button to instantly find differences between the two files."
        },
        {
            title: "View Result",
            description: "See a detailed comparison highlighting added and removed text."
        }
    ];

    const seoContent = (
        <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Compare Two PDF Files</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Upload the first PDF file</li>
                    <li>Upload the second PDF file</li>
                    <li>Click on the Compare PDF button</li>
                    <li>Instantly view differences between the two PDFs</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our PDF Comparison Tool</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Easily find difference between two PDFs</li>
                    <li>No watermark added</li>
                    <li>No sign-up or registration required</li>
                    <li>Fast and accurate comparison</li>
                    <li>Works on all devices (mobile, tablet, desktop)</li>
                    <li>Secure and privacy-focused</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Comparing contracts and legal documents</li>
                    <li>Reviewing document revisions</li>
                    <li>Academic and office document comparison</li>
                    <li>Verifying changes in edited PDF files</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">How can I compare two PDFs online?</h3>
                        <p>Simply upload your two PDF files to our free online tool, click the compare button, and we will highlight the text differences for you instantly.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Is this PDF comparison tool free to use?</h3>
                        <p>Yes, our PDF comparison tool is completely free. You can find the difference between two PDFs without any hidden costs or subscriptions.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are my PDF files safe and private?</h3>
                        <p>Absolutely. We prioritize your privacy. All processing happens securely in your browser, and your files are never stored on our servers.</p>
                    </div>
                </div>
            </section>

            <section className="bg-purple-50 p-8 rounded-2xl">
                <p className="mb-4">
                    Need more PDF tools? We offer a wide range of solutions. You can{' '}
                    <Link href="/tools/compress-pdf" className="text-purple-600 font-semibold hover:underline">
                        Compress PDF
                    </Link>{' '}
                    to reduce file size,{' '}
                    <Link href="/tools/merge-pdf" className="text-purple-600 font-semibold hover:underline">
                        Merge PDF
                    </Link>{' '}
                    to combine multiple documents, or{' '}
                    <Link href="/tools/split-pdf" className="text-purple-600 font-semibold hover:underline">
                        Split PDF
                    </Link>{' '}
                    to separate pages. Users may compress or merge PDF files before comparing them using other PDF tools available on the website.
                </p>
            </section>
        </div>
    );

    return (
        <ToolPageLayout
            title="Compare PDF Files Online – Find Difference Between Two PDFs"
            subtitle="Compare two PDF files online and highlight differences in text. Our tool is free, secure, fast, and completely browser-based."
            steps={steps}
            seoContent={seoContent}
        >
            <ComparePdfClient />
        </ToolPageLayout>
    );
}
