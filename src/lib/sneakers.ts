import data from '@/data/sneakers.json';
import { Sneaker } from '@/types/sneaker';

export async function getSneakers(): Promise<Sneaker[]> {
  return data;
}
