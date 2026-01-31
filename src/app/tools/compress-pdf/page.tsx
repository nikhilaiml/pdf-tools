import type { Metadata } from 'next';
import CompressPdfClient from './CompressPdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'Compress PDF – Reduce PDF File Size Online',
    description: 'Compress PDF files to reduce file size while maintaining quality. Best free online PDF compressor for easier sharing and storage.',
    alternates: {
        canonical: 'https://usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF – Reduce PDF File Size Online',
        description: 'Optimize your PDF files for web and email. Reduce size significantly without losing quality.',
        url: 'https://usepdf.in/tools/compress-pdf',
    }
};

export default function CompressPdfPage() {
    return (
        <>
            <CompressPdfClient />
            <SEOContent
                title="Compress PDF - Optimize Document Size"
                description="Make your PDF files lighter and easier to share with UsePDF's Compress PDF tool. We optimize the internal structure of your document to reduce file size significantly while preserving visual quality."
                howTo={[
                    { step: 1, text: "Select or drag your PDF file into the upload box." },
                    { step: 2, text: "Our tool automatically analyzes and compresses the file." },
                    { step: 3, text: "Download your smaller, optimized PDF file immediately." }
                ]}
                features={[
                    { title: "Smart Compression", description: "We use advanced algorithms to remove redundant data while keeping text and images sharp." },
                    { title: "Email Friendly", description: "Shrink large PDFs to fit within email attachment size limits easily." },
                    { title: "Web Optimization", description: "Compressed PDFs load faster on websites, improving user experience and SEO." },
                    { title: "Visual Quality", description: "We balance size reduction with visual fidelity to ensure your documents still look great." }
                ]}
                faq={[
                    { question: "How much will my file size reduce?", answer: "The reduction depends on the file content. Text-heavy files compress less than image-heavy files, which can often be reduced by up to 50-80%." },
                    { question: "Is it safe?", answer: "Yes, your files are encrypted during transfer and deleted from our servers automatically after processing." },
                    { question: "Can I compress password-protected PDFs?", answer: "You will need to unlock the PDF first using our Unlock PDF tool before compressing it." }
                ]}
            />
        </>
    );
}
