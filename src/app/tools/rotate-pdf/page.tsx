'use client';

import { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument, degrees } from 'pdf-lib';
import { Loader2, FileText, RefreshCw } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

const RotatePdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<number>(90);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (file: File) => {
    setFile(file);
  };

  // Render PDF Preview
  useEffect(() => {
    if (!file || !canvasRef.current) return;

    const renderPreview = async () => {
      try {
        const fileData = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: fileData });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1); // Render first page

        const viewport = page.getViewport({ scale: 0.8 });
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await page.render(renderContext as any).promise;
        }
      } catch (error) {
        console.error('Preview Error:', error);
      }
    };

    renderPreview();
  }, [file]);

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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `rotated-${file.name}`;
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Rotate PDF
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Permanently rotate all pages in your PDF document.
      </p>

      {!file ? (
        <FileUploader onFileSelect={handleFileChange} label="Select PDF to Rotate" />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 h-fit">
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

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Rotation Angle</label>
              <div className="grid grid-cols-3 gap-4">
                {[90, 180, 270].map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setRotation(deg)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all border-2 ${rotation === deg
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-sm'
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {deg}°
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleRotate}
              disabled={loading}
              className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {loading ? <Loader2 className="animate-spin" /> : <RefreshCw size={20} />}
              <span>{loading ? 'Processing...' : 'Rotate Application'}</span>
            </button>
          </div>

          {/* Preview */}
          <div className="bg-gray-100 dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 flex items-center justify-center min-h-[500px] overflow-hidden">
            <div
              className="shadow-2xl transition-transform duration-500 ease-in-out bg-white"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <canvas ref={canvasRef} className="max-w-full h-auto" style={{ maxHeight: '600px' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RotatePdfPage;
