'use client';

import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('./MapView'), { ssr: false });
const ClientWrapper = () => {
  return <MapView />;
};

export default ClientWrapper;
