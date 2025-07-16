// type Sneaker = {
//   id: string;
//   name: string;
//   brand: string;
//   year: number;
//   model: string;
//   releaseDate: string;
//   image: string;
//   description?: string;
// };

import { Sneaker } from '@/types/sneaker';

export default function SneakerCard({ sneaker }: { sneaker: Sneaker }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">{sneaker.name}</h2>
      <p className="text-sm text-gray-600">
        {sneaker.brand} – {sneaker.releaseDate}
      </p>
    </div>
  );
}
