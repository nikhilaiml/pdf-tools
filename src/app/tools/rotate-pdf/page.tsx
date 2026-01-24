'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';

const RotatePdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<number>(90);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Render PDF Preview
  useEffect(() => {
    if (!file || !canvasRef.current) return;

    const renderPreview = async () => {
      try {
        // Dynamically import pdfjs to avoid SSR issues
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

        const fileData = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: fileData });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1); // Render first page

        const viewport = page.getViewport({ scale: 0.5 }); // Scale down for preview
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext as any).promise;
        }
      } catch (error) {
        console.error('Error rendering preview:', error);
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
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Rotate PDF</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Controls */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Settings</h2>

          <div className="mb-8">
            <label className="block text-gray-300 mb-2">1. Select PDF File</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="bg-gray-700 text-white rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-300 mb-2">2. Rotation Angle</label>
            <div className="flex space-x-4">
              {[90, 180, 270].map((deg) => (
                <button
                  key={deg}
                  onClick={() => setRotation(deg)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${rotation === deg
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
            className={`bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg w-full transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Processing...' : 'Download Rotated PDF'}
          </button>
        </div>

        {/* Right Column: Live Preview */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2 w-full">Live Preview</h2>

          {file ? (
            <div className="relative p-8 border-2 border-dashed border-gray-600 rounded bg-gray-900/50">
              {/* Canvas Container with Rotation */}
              <div style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease-in-out' }}>
                <canvas ref={canvasRef} className="max-w-full h-auto shadow-2xl" />
              </div>
            </div>
          ) : (
            <div className="text-gray-500 flex flex-col items-center">
              <span className="material-icons text-6xl mb-2">preview</span>
              <p>Select a file to see preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RotatePdfPage;
