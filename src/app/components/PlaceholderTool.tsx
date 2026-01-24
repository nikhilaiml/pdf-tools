'use client';

import React from 'react';

interface PlaceholderToolProps {
    title: string;
    description: string;
}

const PlaceholderTool: React.FC<PlaceholderToolProps> = ({ title, description }) => {
    return (
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-400 mb-8">{description}</p>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <span className="material-icons text-6xl text-gray-500 mb-4">construction</span>
                <h2 className="text-2xl font-semibold mb-2">Feature Coming Soon</h2>
                <p className="text-gray-400 mb-6">
                    We are currently working on the <strong>{title}</strong> functionality.
                    This tool requires complex processing that is being optimized for your browser.
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default PlaceholderTool;
