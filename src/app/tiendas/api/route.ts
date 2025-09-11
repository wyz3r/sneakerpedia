// import storeLocation from '../../data/stores.json';

export async function GET() {
  const storeLocation = await import('../../../data/stores.json').then((module) => module.default);
  return Response.json({ data: storeLocation });
}
