'use client';

import dynamic from 'next/dynamic';

const FillSignClient = dynamic(() => import('./FillSignClient'), { ssr: false });

const FillAndSignClientWrapper = () => {
  return <FillSignClient />;
};

export default FillAndSignClientWrapper;
