import { NextResponse } from 'next/server';

const MOCK_API_URL = process.env.MOCK_API_URL;

export async function GET() {
  if (!MOCK_API_URL) {
    return NextResponse.json({ message: 'MOCK_API_URL is not defined' }, { status: 500 });
  }

  try {
    const response = await fetch(MOCK_API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
