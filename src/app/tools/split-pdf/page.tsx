'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const SplitPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSplit = async () => {
    if (!file || !startPage || !endPage) {
      alert('Please select a file and specify a page range.');
      return;
    }

    setLoading(true);
    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const newPdf = await PDFDocument.create();

      const start = parseInt(startPage, 10) - 1;
      const end = parseInt(endPage, 10);

      if (isNaN(start) || isNaN(end) || start < 0 || end > pdf.getPageCount() || start >= end) {
        alert('Invalid page range.');
        setLoading(false);
        return;
      }

      const pageIndices = Array.from({ length: end - start }, (_, i) => start + i);
      const copiedPages = await newPdf.copyPages(pdf, pageIndices);
      copiedPages.forEach((page) => newPdf.addPage(page));

      const newPdfBytes = await newPdf.save();

      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'split.pdf';
      link.click();
      alert('PDF split successfully!');
    } catch (error) {
      console.error('Error splitting PDF:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Split PDF</h1>
      <div className="mb-8">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <input
          type="text"
          placeholder="Start Page"
          value={startPage}
          onChange={(e) => setStartPage(e.target.value)}
          className="w-32 bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="End Page"
          value={endPage}
          onChange={(e) => setEndPage(e.target.value)}
          className="w-32 bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSplit}
        disabled={loading}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Splitting...' : 'Split PDF'}
      </button>
    </div>
  );
};

export default SplitPdfPage;
