import type { Metadata } from 'next';
import HtmlToPdfClient from './HtmlToPdfClient';
import SEOContent from '../../components/SEOContent';

export const metadata: Metadata = {
    title: 'HTML to PDF Converter – Convert Webpages or Code',
    description: 'Convert HTML code or Website URLs to PDF files online for free. Capture full webpages instantly with UsePDF.',
    alternates: {
        canonical: 'https://usepdf.in/tools/html-to-pdf',
    },
    openGraph: {
        title: 'HTML to PDF Converter – Convert Webpages or Code',
        description: 'Turn websites or HTML snippets into PDF documents. Accurate rendering and free download.',
        url: 'https://usepdf.in/tools/html-to-pdf',
    }
};

export default function HtmlToPdfPage() {
    return (
        <>
            <HtmlToPdfClient />
            <SEOContent
                title="HTML & URL to PDF Converter"
                description="Need to save a website as a PDF? UsePDF offers a dual-mode converter: simply paste Raw HTML code or enter a live URL. Our advanced engine captures the webpage exactly as it looks and converts it into a high-quality PDF document."
                howTo={[
                    { step: 1, text: "Choose your mode: 'Raw HTML' or 'From URL'." },
                    { step: 2, text: "Paste your code or enter the website address (e.g., https://google.com)." },
                    { step: 3, text: "Click 'Download PDF' to capture and save the document." }
                ]}
                features={[
                    { title: "Dual Capture Mode", description: "Convert both static HTML snippets or dynamic live websites." },
                    { title: "High Fidelity", description: "Our URL converter uses a real browser engine to ensure the PDF looks exactly like the website." },
                    { title: "Fast Processing", description: "Get your PDF in seconds, no matter how complex the page is." },
                    { title: "Dev Friendly", description: "Perfect for developers needing to generate reports or documentations from HTML." }
                ]}
                faq={[
                    { question: "Does styling (CSS) work?", answer: "Yes! If you provide a URL, we capture all styles. For raw HTML, inline styles work best." },
                    { question: "Can I convert pages behind a login?", answer: "No, our server cannot access private pages that require a login. Only public URLs work." },
                    { question: "Is it free?", answer: "Yes, you can convert unlimited pages for free." }
                ]}
            />
        </>
    );
}
