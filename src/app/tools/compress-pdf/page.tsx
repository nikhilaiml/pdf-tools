'use client';

import { useState } from 'react';

const CompressPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);

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

    alert(
      'PDF compression is a complex process that typically requires server-side processing. This functionality is not yet implemented.' 
    );
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Compress PDF</h1>
      <div className="mb-8">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleCompress}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg"
      >
        Compress PDF
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
