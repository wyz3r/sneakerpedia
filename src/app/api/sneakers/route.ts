import { getSneakers } from '@/lib/sneakers';
import { NextResponse } from 'next/server';

export async function GET() {
  const sneakers = await getSneakers();
  return NextResponse.json(sneakers);
}
