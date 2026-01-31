import type { Metadata } from 'next';
import MergePdfClient from './MergePdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'Merge PDF – Combine PDF Files Online for Free',
    description: 'Merge multiple PDF files into one document in seconds. UsePDF offers a fast, secure, and free online PDF merger tool. No installation required.',
    alternates: {
        canonical: 'https://usepdf.in/tools/merge-pdf',
    },
    openGraph: {
        title: 'Merge PDF – Combine PDF Files Online for Free',
        description: 'Combine PDFs effortlessly with UsePDF. The easiest way to merge PDF files online.',
        url: 'https://usepdf.in/tools/merge-pdf',
    }
};

export default function MergePdfPage() {
    return (
        <>
            <MergePdfClient />
            <SEOContent
                title="Merge PDF Files Online - Fast, Free & Secure"
                description="Combine multiple PDF files into a single, organized document with UsePDF's Merge PDF tool. Whether you're merging invoices, reports, or study notes, our tool makes it simple and secure. No software installation needed—just upload, arrange, and merge."
                howTo={[
                    { step: 1, text: "Click 'Select Files' or drag and drop your PDFs into the upload area." },
                    { step: 2, text: "Arrange your files in the desired order by dragging them." },
                    { step: 3, text: "Click 'Merge PDFs Now' and download your combined document instantly." }
                ]}
                features={[
                    { title: "Universal Compatibility", description: "Works on all devices—Windows, Mac, Linux, iOS, and Android. Merge PDFs anywhere, anytime." },
                    { title: "Drag & Drop Interface", description: "Intuitively arrange your documents with our easy-to-use drag and drop interface." },
                    { title: "Batch Processing", description: "Merge many files at once. Our server processes them efficiently and quickly." },
                    { title: "High Quality Output", description: "Your merged PDF retains the quality and formatting of the original documents." }
                ]}
                faq={[
                    { question: "Is it free to merge PDFs?", answer: "Yes! UsePDF is 100% free to use for merging PDF files. There are no hidden charges." },
                    { question: "How many files can I merge?", answer: "You can merge multiple files at once. There is no strict limit, but we recommend keeping it reasonable for best performance." },
                    { question: "Do I need to install software?", answer: "No. Our tool is entirely web-based. You only need a browser and an internet connection." }
                ]}
            />
        </>
    );
}
