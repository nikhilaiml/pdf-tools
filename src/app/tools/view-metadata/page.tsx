'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const ViewMetadataPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [metadata, setMetadata] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setMetadata(null);
        }
    };

    const handleViewMetadata = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);

            const info = {
                Title: pdf.getTitle() || 'N/A',
                Author: pdf.getAuthor() || 'N/A',
                Subject: pdf.getSubject() || 'N/A',
                Keywords: pdf.getKeywords() || 'N/A',
                Creator: pdf.getCreator() || 'N/A',
                Producer: pdf.getProducer() || 'N/A',
                CreationDate: pdf.getCreationDate()?.toLocaleString() || 'N/A',
                ModificationDate: pdf.getModificationDate()?.toLocaleString() || 'N/A',
                PageCount: pdf.getPageCount(),
            };

            setMetadata(info);
        } catch (error) {
            console.error('Error reading metadata:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">View PDF Metadata</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={handleViewMetadata}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg mb-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Reading...' : 'View Metadata'}
            </button>

            {metadata && (
                <div className="bg-gray-800 rounded-lg p-6 text-left shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">File Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(metadata).map(([key, value]) => (
                            <div key={key}>
                                <span className="text-gray-400 block text-sm">{key}</span>
                                <span className="text-white font-medium">{String(value)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewMetadataPage;
