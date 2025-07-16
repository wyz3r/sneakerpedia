'use client';

import SneakerCard from '@/components/SneakerCard';
import { useEffect, useState } from 'react';

type Sneaker = {
  id: string;
  name: string;
  brand: string;
  year: number;
  model: string;
  releaseDate: string;
  image: string;
  description?: string;
};
export default function SneakerClientList() {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchSneakers() {
      const res = await fetch('/api/sneakers');
      const data = await res.json();
      setSneakers(data);
      setLoading(false);
    }

    fetchSneakers();
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Sneakers (Client Side)</h1>
      {loading ? (
        <p>Cargando desde la API...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sneakers.map((s) => (
            <div key={s.id}>
              <div className="text-blue-500 text-xs mb-1">Renderizado en cliente</div>
              <SneakerCard sneaker={s} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
