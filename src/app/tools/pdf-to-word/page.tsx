import type { Metadata } from 'next';
import PdfToWordClient from './PdfToWordClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'PDF to Word Converter – Convert PDF to Docx Online',
    description: 'Convert PDF files to editable Word documents (Docx) for free. Extract text and formatting accurately with UsePDF.',
    alternates: {
        canonical: 'https://usepdf.in/tools/pdf-to-word',
    },
    openGraph: {
        title: 'PDF to Word Converter – Convert PDF to Docx Online',
        description: 'Turn your PDFs into editable Word documents instantly. Free and easy to use.',
        url: 'https://usepdf.in/tools/pdf-to-word',
    }
};

export default function PdfToWordPage() {
    return (
        <>
            <PdfToWordClient />
            <SEOContent
                title="PDF to Word Converter - Edit Your PDFs"
                description="Need to edit a PDF file? Convert it to a Microsoft Word document (.docx) with UsePDF. Our tool extracts text, tables, and images, creating an editable document that preserves the original layout as much as possible."
                howTo={[
                    { step: 1, text: "Upload your PDF file to the converter." },
                    { step: 2, text: "Wait for the conversion process to finish extracting text and formatting." },
                    { step: 3, text: "Download your new Word document and start editing." }
                ]}
                features={[
                    { title: "Editable Output", description: "Get a fully editable Word file. No more retyping text from locked PDFs." },
                    { title: "Formatting Preservation", description: "We aim to keep your fonts, paragraphs, and tables intact during conversion." },
                    { title: "Fast & Secure", description: "Convert files in seconds. Your data is encrypted and deleted after processing." },
                    { title: "No Login Required", description: "Start converting immediately without creating an account." }
                ]}
                faq={[
                    { question: "Can I convert scanned PDFs?", answer: "Our tool works best with native PDFs. Scanned PDFs (images of text) might require OCR software which we are currently upgrading." },
                    { question: "Is the layout guaranteed?", answer: "We try our best to preserve layout, but complex designs might require some adjustments in Word." },
                    { question: "Is it free?", answer: "Yes, UsePDF offers PDF to Word conversion for free." }
                ]}
            />
        </>
    );
}
