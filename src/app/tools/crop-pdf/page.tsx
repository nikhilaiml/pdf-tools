import type { Metadata } from 'next';
import CropPdfClient from './CropPdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'Crop PDF – Trim PDF Margins Online Free',
    description: 'Crop PDF files online for free. Adjust visible area, trim white margins, and resize PDF pages visually with UsePDF.',
    alternates: {
        canonical: 'https://usepdf.in/tools/crop-pdf',
    },
    openGraph: {
        title: 'Crop PDF – Trim PDF Margins Online Free',
        description: 'Visually crop your PDF documents. Select the area you want to keep and remove the rest.',
        url: 'https://usepdf.in/tools/crop-pdf',
    }
};

export default function CropPdfPage() {
    return (
        <>
            <CropPdfClient />
            <SEOContent
                title="Crop PDF Online - Trim Document Structure"
                description="Too much white space in your PDF? Need to focus on a specific part of a page? UsePDF's Visual Crop tool lets you adjust the visible area of your PDF document easily. Drag, resize, and crop pages to perfection."
                howTo={[
                    { step: 1, text: "Upload your PDF file." },
                    { step: 2, text: "Use the visual overlay to select the area you want to keep." },
                    { step: 3, text: "Choose to apply the crop to all pages or just the current one." },
                    { step: 4, text: "Click 'Crop PDF' to save your new document." }
                ]}
                features={[
                    { title: "Visual Selector", description: "No need to guess margin numbers. See exactly what you are cropping with our visual editor." },
                    { title: "Batch Cropping", description: "Apply the same crop area to all pages in your document instantly." },
                    { title: "Precision Control", description: "Adjust the crop box with easy-to-use drag handles." },
                    { title: "Private & Secure", description: "Cropping is done securely. Your files are deleted automatically." }
                ]}
                faq={[
                    { question: "Does this delete content outside the crop area?", answer: "Visually, yes. Technically, it adjusts the 'CropBox' of the PDF, hiding the outer content." },
                    { question: "Can I crop different pages differently?", answer: "Currently, you can crop all pages or a single page at a time. For different crops per page, you would need to process them individually." },
                    { question: "Is it free?", answer: "Yes, UsePDF Crop tool is completely free to use." }
                ]}
            />
        </>
    );
}
