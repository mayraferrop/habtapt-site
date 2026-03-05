import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  const expectedToken = process.env.REVALIDATION_SECRET;

  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { path, tag } = body as { path?: string; tag?: string };

    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({ revalidated: true, tag });
    }

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    // Revalidate all main pages
    revalidatePath('/', 'layout');
    return NextResponse.json({ revalidated: true, scope: 'all' });
  } catch {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}
