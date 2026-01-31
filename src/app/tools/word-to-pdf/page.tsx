import type { Metadata } from 'next';
import WordToPdfClient from './WordToPdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'Word to PDF Converter – Convert Docx to PDF Online',
    description: 'Convert Microsoft Word documents to PDF format online for free. Preserve formatting and ensure your document looks the same on any device.',
    alternates: {
        canonical: 'https://usepdf.in/tools/word-to-pdf',
    },
    openGraph: {
        title: 'Word to PDF Converter – Convert Docx to PDF Online',
        description: 'Convert Docx files to professional PDF documents with UsePDF. Fast, accurate, and free.',
        url: 'https://usepdf.in/tools/word-to-pdf',
    }
};

export default function WordToPdfPage() {
    return (
        <>
            <WordToPdfClient />
            <SEOContent
                title="Word to PDF Converter - Create Professional PDFs"
                description="Convert your Microsoft Word documents (.docx) into high-quality PDF files. Perfect for sharing resumes, contracts, and reports that need to look exactly the same on every screen."
                howTo={[
                    { step: 1, text: "Select your Word (.docx) file." },
                    { step: 2, text: "Preview the document to ensure everything looks correct." },
                    { step: 3, text: "Click 'Download PDF' to save your new file." }
                ]}
                features={[
                    { title: "Exact Formatting", description: "Your font styles, images, and layout remain exactly as they were in Word." },
                    { title: "Privacy First", description: "Files are processed securely and your privacy is our top priority." },
                    { title: "Universal Format", description: "PDFs can be opened on any device without needing Microsoft Word installed." },
                    { title: "Free Online Tool", description: "Convert as many files as you need without any cost." }
                ]}
                faq={[
                    { question: "Do I need Microsoft Word installed?", answer: "No, you don't need Word installed on your computer to use this online converter." },
                    { question: "Does it support .doc files?", answer: "Currently we support the modern .docx format, which is the standard for Word documents since 2007." },
                    { question: "Is my file secure?", answer: "Yes, all uploaded files are encrypted and automatically deleted from our servers." }
                ]}
            />
        </>
    );
}
