'use client';

import dynamic from 'next/dynamic';
// Esto es útil para cargar componentes solo en el cliente o para hacer code-splitting (cargar solo cuando se necesita).
const MapView = dynamic(() => import('./MapView'), { ssr: false });
// Aquí se está importando el componente `MapView` de forma dinámica.
// La opción `ssr: false` indica que NO debe renderizarse en el servidor (Server-Side Rendering),
// solo en el cliente. Esto es útil cuando `MapView` usa APIs del navegador como `window` o `document`
// que no existen en el servidor.
const ClientWrapper = () => {
  return <MapView />;
};

export default ClientWrapper;
