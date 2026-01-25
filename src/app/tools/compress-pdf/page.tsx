'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Minimize2, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const CompressPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (file: File) => {
    setFile(file);
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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Compress PDF
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Reduce the size of your PDF files efficiently while maintaining quality.
      </p>

      {!file ? (
        <FileUploader onFileSelect={handleFileChange} label="Select PDF to Compress" />
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
            onClick={handleCompress}
            disabled={loading}
            className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? <Loader2 className="animate-spin" /> : <Minimize2 size={20} />}
            <span>{loading ? 'Compressing...' : 'Compress PDF Check'}</span>
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Removes redundant data and optimizes internal structure.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompressPdfPage;
