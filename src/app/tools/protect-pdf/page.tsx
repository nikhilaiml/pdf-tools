'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const ProtectPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleProtect = async () => {
        if (!file || !password) {
            alert('Please select a file and enter a password.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);

            // Encrypt the PDF
            await (pdf as any).encrypt({
                userPassword: password,
                ownerPassword: password,
                permissions: {
                    printing: 'highResolution',
                    modifying: false,
                    copying: false,
                    annotating: false,
                    fillingForms: false,
                    contentAccessibility: false,
                    documentAssembly: false,
                },
            });

            const newPdfBytes = await pdf.save();

            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'protected.pdf';
            link.click();
            alert('PDF protected successfully!');
        } catch (error) {
            console.error('Error protecting PDF:', error);
            alert(`An error occurred: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Protect PDF</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={handleProtect}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Encrypting...' : 'Protect PDF'}
            </button>
        </div>
    );
};

export default ProtectPdfPage;
