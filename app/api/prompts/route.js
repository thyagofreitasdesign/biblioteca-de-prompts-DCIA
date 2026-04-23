import { NextResponse } from 'next/server';
import { getAllPrompts } from '@/lib/prompts';

export async function GET() {
  return NextResponse.json(getAllPrompts());
}
