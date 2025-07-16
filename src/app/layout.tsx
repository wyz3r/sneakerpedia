// import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Navbar from '@/components/Navbar';
import './globals.css';
import Head from './head';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Ejemplo con tipografía Roboto y layout personalizado',
//   viewport: 'width=device-width, initial-scale=1',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={roboto.className}>
      <Head />

      <body className={`antialiased`}>
        <Navbar />
        <main className="h-screen" style={{ paddingTop: '56px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
