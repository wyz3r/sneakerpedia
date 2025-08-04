// 'use client';
import { Metadata } from 'next';
// import dynamic from 'next/dynamic';
// const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

import ClientWrapper from '@/components/ClientWrapper';

export const metadata: Metadata = {
  title: 'Tiendas de energia',
  description: 'Tiendas de energia en Mexico',
};

export default function Shops() {
  return (
    <main className="p-4">
      <ClientWrapper />
    </main>
  );
}
