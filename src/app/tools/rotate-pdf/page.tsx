import type { Metadata } from 'next';
import RotatePdfClient from './RotatePdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'Rotate PDF – Rotate PDF Pages Online for Free',
    description: 'Rotate specific pages or entire PDF documents permanently. UsePDF offers a free online tool to rotate PDF pages 90, 180, or 270 degrees.',
    alternates: {
        canonical: 'https://usepdf.in/tools/rotate-pdf',
    },
    openGraph: {
        title: 'Rotate PDF – Rotate PDF Pages Online for Free',
        description: 'Permanently rotate your PDF files. Fix upside-down scans or change orientation easily.',
        url: 'https://usepdf.in/tools/rotate-pdf',
    }
};

export default function RotatePdfPage() {
    return (
        <>
            <RotatePdfClient />
            <SEOContent
                title="Rotate PDF Online - Fix Page Orientation"
                description="Scanned your document upside down? Need to change a page from portrait to landscape? UsePDF's Rotate PDF tool lets you permanently rotate specific pages or the entire document. View your pages, select the ones you want to rotate, and save your changes instantly."
                howTo={[
                    { step: 1, text: "Upload your PDF file." },
                    { step: 2, text: "Select pages to rotate or use the sidebar presets to rotate all pages (Portrait, Landscape)." },
                    { step: 3, text: "Use the rotation dial to fine-tune the angle if needed." },
                    { step: 4, text: "Click 'Rotate PDF Now' to save and download." }
                ]}
                features={[
                    { title: "Visual Rotation", description: "See exactly how your pages will look before you save." },
                    { title: "Bulk Rotation", description: "Rotate the entire document at once with our one-click presets." },
                    { title: "Custom Angles", description: "Not just 90 degrees! Use our drag dial to set custom rotation angles." },
                    { title: "Permanent Fix", description: "The rotation is saved to the file, so it opens correctly in any PDF viewer." }
                ]}
                faq={[
                    { question: "Can I rotate just one page?", answer: "Yes, you can click on individual pages to rotate them without affecting the rest of the document." },
                    { question: "Is the rotation permanent?", answer: "Yes, once you download the file, the rotation is permanently applied." },
                    { question: "Can I rotate a password-protected PDF?", answer: "You must remove the password first using our Unlock PDF tool." }
                ]}
            />
        </>
    );
}
