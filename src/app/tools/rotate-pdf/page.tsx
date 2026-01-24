'use client';

import { useState } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';

const RotatePdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<number>(90);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleRotate = async () => {
    if (!file) {
      alert('Please select a file to rotate.');
      return;
    }

    setLoading(true);
    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);

      const pages = pdf.getPages();
      pages.forEach(page => {
        page.setRotation(degrees(rotation));
      });

      const newPdfBytes = await pdf.save();

      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'rotated.pdf';
      link.click();
      alert('PDF rotated successfully!');
    } catch (error) {
      console.error('Error rotating PDF:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Rotate PDF</h1>
      <div className="mb-8">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <select
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value))}
          className="bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={90}>90 degrees</option>
          <option value={180}>180 degrees</option>
          <option value={270}>270 degrees</option>
        </select>
      </div>
      <button
        onClick={handleRotate}
        disabled={loading}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Rotating...' : 'Rotate PDF'}
      </button>
    </div>
  );
};

export default RotatePdfPage;
