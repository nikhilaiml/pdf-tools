'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Layers, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const FlattenPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (file: File) => {
        setFile(file);
    };

    const handleFlatten = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);

            const form = pdf.getForm();
            form.flatten();

            const newPdfBytes = await pdf.save();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `flattened-${file.name}`;
            link.click();
            alert('PDF forms flattened successfully!');
        } catch (error) {
            console.error('Error flattening PDF:', error);
            // Some PDFs don't have forms, causing an error if we try to get form.
            // Or maybe it succeeds but does nothing. 
            // We can check if form exists or catch the specific error.
            alert('An error occurred. The PDF might not contain flattenable forms.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Flatten PDF
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Convert interactive forms and annotations into static content.
            </p>

            {!file ? (
                <FileUploader onFileSelect={handleFileChange} label="Select PDF to Flatten" />
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <FileText className="text-blue-500" size={24} />
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                            <button
                                onClick={() => setFile(null)}
                                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                            >
                                Change be file
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleFlatten}
                        disabled={loading}
                        className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Layers size={20} />}
                        <span>{loading ? 'Processing...' : 'Flatten PDF'}</span>
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Useful for preventing further editing of form data.
                    </p>
                </div>
            )}
        </div>
    );
};

export default FlattenPdfPage;
