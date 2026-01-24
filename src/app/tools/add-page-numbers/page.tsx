'use client';

import { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const AddPageNumbersPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleProcess = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const pages = pdf.getPages();
            const totalPages = pages.length;

            pages.forEach((page, idx) => {
                const { width } = page.getSize();
                const text = `${idx + 1} / ${totalPages}`;
                page.drawText(text, {
                    x: width - 80,
                    y: 20,
                    size: 12,
                    color: rgb(0, 0, 0),
                });
            });

            const newPdfBytes = await pdf.save();

            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'page-numbers.pdf';
            link.click();
            alert('Page numbers added successfully!');
        } catch (error) {
            console.error('Error adding page numbers:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Add Page Numbers</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-gray-400 mt-2 text-sm">Adds "Page X / Y" to the bottom right of each page.</p>
            </div>

            <button
                onClick={handleProcess}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Processing...' : 'Add Page Numbers'}
            </button>
        </div>
    );
};

export default AddPageNumbersPage;
