'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const JpgToPdfPage = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    const handleConvert = async () => {
        if (files.length === 0) {
            alert('Please select at least one image file.');
            return;
        }

        setLoading(true);
        try {
            const pdf = await PDFDocument.create();

            for (const file of files) {
                const imageBytes = await file.arrayBuffer();
                let image;

                // Check file type to embed correctly
                if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
                    image = await pdf.embedJpg(imageBytes);
                } else if (file.type === 'image/png') {
                    image = await pdf.embedPng(imageBytes);
                } else {
                    continue; // Skip unsupported formats
                }

                const page = pdf.addPage([image.width, image.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height,
                });
            }

            if (pdf.getPageCount() === 0) {
                throw new Error('No valid images were processed.');
            }

            const pdfBytes = await pdf.save();

            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'images.pdf';
            link.click();
            alert('Images converted to PDF successfully!');
        } catch (error) {
            console.error('Error converting images:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">JPG to PDF</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept="image/jpeg, image/png, image/jpg"
                    multiple
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-gray-400 mt-2 text-sm">Supported formats: JPG, PNG</p>
            </div>

            <div className="mb-8">
                {files.length > 0 && (
                    <div className="bg-gray-800 p-4 rounded text-left">
                        <h3 className="font-bold mb-2">Selected Images ({files.length}):</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            {files.map((f, i) => <li key={i}>{f.name}</li>)}
                        </ul>
                    </div>
                )}
            </div>

            <button
                onClick={handleConvert}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Converting...' : 'Convert to PDF'}
            </button>
        </div>
    );
};

export default JpgToPdfPage;
