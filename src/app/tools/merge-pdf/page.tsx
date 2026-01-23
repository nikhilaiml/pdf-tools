'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const MergePdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least two files to merge.');
      return;
    }

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const pdfBytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();

      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'merged.pdf';
      link.click();
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('An error occurred while merging the PDFs. Please try again.');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Merge PDF</h1>
      <div className="mb-8">
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleMerge}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg"
      >
        Merge PDFs
      </button>
      <div className="mt-8">
        {files.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Selected Files:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index} className="text-lg">{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MergePdfPage;
