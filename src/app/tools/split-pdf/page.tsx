import type { Metadata } from 'next';
import SplitPdfClient from './SplitPdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'Split PDF – Extract Pages from PDF Online',
    description: 'Split PDF files and extract pages accurately. UsePDF provides a free online tool to separate PDF pages instantly without quality loss.',
    alternates: {
        canonical: 'https://usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF – Extract Pages from PDF Online',
        description: 'Extract pages from your PDF documents easily with UsePDF. Free, fast, and secure.',
        url: 'https://usepdf.in/tools/split-pdf',
    }
};

export default function SplitPdfPage() {
    return (
        <>
            <SplitPdfClient />
            <SEOContent
                title="Split PDF Online – Extract Pages Instantly"
                description="Need to extract specific pages from a large PDF document? UsePDF's Split PDF tool allows you to separate PDF pages quickly and easily. Customize your page ranges and download exactly what you need."
                howTo={[
                    { step: 1, text: "Upload the PDF file you want to split." },
                    { step: 2, text: "Enter the start and end page numbers for the range you want to extract." },
                    { step: 3, text: "Click 'Split PDF Now' to process and download your new file." }
                ]}
                features={[
                    { title: "Precise Extraction", description: "Select exact page ranges to extract. Control exactly what goes into your new PDF." },
                    { title: "Fast Processing", description: "Our separation engine works instantly, even on large documents." },
                    { title: "No Watermarks", description: "Your output files are clean and professional, with no watermarks added." },
                    { title: "Secure Handling", description: "Your files are processed securely and deleted automatically." }
                ]}
                faq={[
                    { question: "Can I extract a single page?", answer: "Yes, simply set the 'Start Page' and 'End Page' to the same number (e.g., Start: 5, End: 5) to extract just that one page." },
                    { question: "Will the quality decrease?", answer: "No, splitting a PDF preserves the original quality of the pages. Text and images remain sharp." },
                    { question: "Is this tool free?", answer: "Yes, UsePDF provides this Split PDF tool completely free of charge." }
                ]}
            />
        </>
    );
}
