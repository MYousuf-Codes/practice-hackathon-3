import { NextResponse } from 'next/server';

const MOCK_API_URL = process.env.MOCK_API_URL;

export async function GET(req: Request, { params }: { params: { id: string } }) {
  if (!MOCK_API_URL) {
    return NextResponse.json({ message: 'MOCK_API_URL is not defined' }, { status: 500 });
  }

  const { id } = params;

  try {
    const response = await fetch(`${MOCK_API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${id}: ${response.statusText}`);
    }

    const product = await response.json();

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
