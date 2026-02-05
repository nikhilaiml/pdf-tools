import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '../../components/ToolPageLayout';
import CropPdfClient from './CropPdfClient';

export const metadata: Metadata = {
    title: 'Crop PDF Online – Trim PDF Margins Free | UsePDF',
    description: 'Crop PDF online to remove margins and unwanted areas. Free, fast, and secure PDF cropping tool. No installation required.',
};

export default function CropPdfPage() {
    const steps = [
        {
            title: "Upload PDF",
            description: "Upload the PDF document you want to crop."
        },
        {
            title: "Select Area",
            description: "Drag to select the exact area you want to keep."
        },
        {
            title: "Crop & Download",
            description: "Click 'Crop PDF' to download your trimmed document instantly."
        }
    ];

    const seoContent = (
        <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Crop a PDF Online</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Upload your PDF document</li>
                    <li>Select the area you want to crop</li>
                    <li>Adjust margins or rotate pages if needed</li>
                    <li>Click the Crop PDF button</li>
                    <li>Download your cropped PDF instantly</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our Crop PDF Tool</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Crop PDF files online without quality loss</li>
                    <li>Remove white margins and unwanted areas</li>
                    <li>No watermark added</li>
                    <li>No sign-up required</li>
                    <li>Works on all devices</li>
                    <li>Fast and accurate PDF cropping</li>
                    <li>Secure and privacy-focused</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>Trimming white margins from scanned PDFs</li>
                    <li>Cropping documents for printing</li>
                    <li>Cleaning up academic PDFs</li>
                    <li>Preparing PDFs for presentations</li>
                    <li>Editing legal and office documents</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">How can I crop a PDF online?</h3>
                        <p>You can easily crop a PDF by uploading it to our tool, selecting the area you want to keep using the visual editor, and clicking the Crop button.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Can I trim margins from a PDF file?</h3>
                        <p>Yes, our tool is perfect for trimming unwanted white margins from scanned documents or other PDF files to make them look cleaner.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Is this Crop PDF tool free?</h3>
                        <p>Absolutely! This tool is 100% free to use. You can crop as many pages as you need without any cost.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Are my PDF files safe?</h3>
                        <p>Yes, security is our priority. All processing is done efficiently, and your files are never stored on our servers.</p>
                    </div>
                </div>
            </section>

            <section className="bg-purple-50 p-8 rounded-2xl">
                <p className="mb-4">
                    Looking for more tools? UsePDF offers a complete suite of solutions.
                    Users can{' '}
                    <Link href="/tools/compress-pdf" className="text-purple-600 font-semibold hover:underline">
                        Compress PDF
                    </Link>{' '}
                    to reduce size,{' '}
                    <Link href="/tools/merge-pdf" className="text-purple-600 font-semibold hover:underline">
                        Merge PDF
                    </Link>{' '}
                    files together, or{' '}
                    <Link href="/tools/rotate-pdf" className="text-purple-600 font-semibold hover:underline">
                        Rotate PDF
                    </Link>{' '}
                    pages. You can compress, merge, or rotate PDFs before or after cropping using other tools available on the website.
                </p>
            </section>
        </div>
    );

    return (
        <ToolPageLayout
            title="Crop PDF Online – Trim PDF Margins Easily"
            subtitle="Crop PDF files online to remove margins, white space, or unwanted areas. It's free, fast, secure, and fully browser-based."
            steps={steps}
            seoContent={seoContent}
        >
            <CropPdfClient />
        </ToolPageLayout>
    );
}
