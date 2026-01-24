'use client';

import { useState } from 'react';
import { PDFDocument, rgb, degrees } from 'pdf-lib';

const AddWatermarkPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState('CONFIDENTIAL');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleAddWatermark = async () => {
        if (!file || !text) {
            alert('Please select a file and enter watermark text.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const pages = pdf.getPages();

            pages.forEach(page => {
                const { width, height } = page.getSize();
                page.drawText(text, {
                    x: width / 2 - (text.length * 15) / 2, // Approximate centering
                    y: height / 2,
                    size: 50,
                    color: rgb(0.95, 0.1, 0.1),
                    opacity: 0.3,
                    rotate: degrees(45),
                });
            });

            const newPdfBytes = await pdf.save();

            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'watermarked.pdf';
            link.click();
            alert('Watermark added successfully!');
        } catch (error) {
            console.error('Error adding watermark:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Add Watermark</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <input
                    type="text"
                    placeholder="Watermark Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={handleAddWatermark}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Processing...' : 'Add Watermark'}
            </button>
        </div>
    );
};

export default AddWatermarkPage;
