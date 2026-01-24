'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const ReorderPagesPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [pageOrder, setPageOrder] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState<number | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);

            try {
                const bytes = await selectedFile.arrayBuffer();
                const pdf = await PDFDocument.load(bytes);
                setPageCount(pdf.getPageCount());
                // Default order
                setPageOrder(Array.from({ length: pdf.getPageCount() }, (_, i) => i + 1).join(','));
            } catch (err) {
                console.error(err);
                alert('Failed to load PDF.');
            }
        }
    };

    const handleReorder = async () => {
        if (!file || !pageOrder) {
            alert('Please select a file and specify page order.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);
            const newPdf = await PDFDocument.create();
            const totalPages = pdf.getPageCount();

            const order = pageOrder.split(',').map(n => parseInt(n.trim()) - 1);

            // Validation
            if (order.some(n => isNaN(n) || n < 0 || n >= totalPages)) {
                throw new Error(`Invalid page numbers. Please enter numbers between 1 and ${totalPages}.`);
            }

            const copiedPages = await newPdf.copyPages(pdf, order);
            copiedPages.forEach(page => newPdf.addPage(page));

            const newPdfBytes = await newPdf.save();

            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'reordered.pdf';
            link.click();
            alert('Pages reordered successfully!');
        } catch (error) {
            console.error('Error reordering pages:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Reorder PDF Pages</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {pageCount && (
                    <p className="mt-2 text-gray-400">Document has {pageCount} pages.</p>
                )}
            </div>

            {file && (
                <div className="mb-8">
                    <label className="block text-left mb-2 text-gray-300">New Page Order (comma separated):</label>
                    <input
                        type="text"
                        value={pageOrder}
                        onChange={(e) => setPageOrder(e.target.value)}
                        className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 3, 1, 2"
                    />
                    <p className="text-sm text-gray-400 mt-2 text-left">
                        Enter the page numbers in the desired order. Example: To move page 3 to the start, allow 3, 1, 2, etc.
                    </p>
                </div>
            )}

            <button
                onClick={handleReorder}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Processing...' : 'Reorder Pages'}
            </button>
        </div>
    );
};

export default ReorderPagesPage;
