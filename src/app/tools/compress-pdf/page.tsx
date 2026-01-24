'use client';

import { useState } from 'react';

import { PDFDocument } from 'pdf-lib';

const CompressPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleCompress = async () => {
    if (!file) {
      alert('Please select a file to compress.');
      return;
    }

    setLoading(true);
    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);

      // Re-saving with useObjectStreams: true (default) and without adding new content
      // often optimizes the file structure.
      const newPdfBytes = await pdf.save({
        useObjectStreams: true,
        addDefaultPage: false,
        objectsPerTick: 50,
      });

      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `compressed-${file.name}`;
      link.click();
      alert('PDF processed! Note: Browser-based compression is limited. For maximum compression, server-side tools are recommended.');
    } catch (error) {
      console.error('Error compressing PDF:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Compress PDF</h1>
      <div className="mb-8">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-400 mt-2 text-sm">
          Optimizes PDF structure to reduce size. (Results may vary depending on file content)
        </p>
      </div>
      <button
        onClick={handleCompress}
        disabled={loading}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Compressing...' : 'Compress PDF'}
      </button>
      <div className="mt-8">
        {file && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Selected File:</h3>
            <p className="text-lg">{file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompressPdfPage;
