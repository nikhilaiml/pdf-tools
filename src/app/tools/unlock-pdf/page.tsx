'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const UnlockPdfPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUnlock = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        setLoading(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            // pdf-lib currently doesn't support decrypting with a password directly via `load` if it's strongly encrypted, 
            // BUT it often can load if you don't need to read content immediately OR if you save it again without password.
            // Wait, pdf-lib `load` accepts `password` option in recent versions? Actually no, standard pdf-lib has limited decryption. 
            // However, we can TRY to load it. If it fails, it usually means we need the password. 
            // Actually, pdf-lib docs say: "You can load encrypted PDFs if you have the password." -> PDFDocument.load(..., { password: ... })

            const pdf = await PDFDocument.load(pdfBytes, { password, ignoreEncryption: false });

            // Saving without password effectively removes it
            const newPdfBytes = await pdf.save();

            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'unlocked.pdf';
            link.click();
            alert('PDF unlocked successfully!');
        } catch (error) {
            console.error('Error unlocking PDF:', error);
            const msg = (error as Error).message;
            if (msg.includes('Password') || msg.includes('encrypted')) {
                alert('Incorrect password or file is strongly encrypted. Please check the password.');
            } else {
                alert(`An error occurred: ${msg}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Unlock PDF</h1>

            <div className="mb-8">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <input
                    type="password"
                    placeholder="Enter Password (if known/required)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-400 mt-2">
                    Note: This tool removes the password from the PDF. You must provide the current password to unlock it first.
                </p>
            </div>

            <button
                onClick={handleUnlock}
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Unlocking...' : 'Unlock PDF'}
            </button>
        </div>
    );
};

export default UnlockPdfPage;
