import { Metadata } from 'next';
import ClientWrapper from '@/components/mapComponents/ClientWrapper';
export const metadata: Metadata = {
  title: 'Tiendas de energia',
  description: 'Tiendas de energia en Mexico',
};
import '../styles/maps.css';

export default function Shops() {
  return (
    <main className="">
      <ClientWrapper />
    </main>
  );
}
