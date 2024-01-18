import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function POST(req: NextRequest) {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    if (!session) {
      return new Response('Session not found', {status: 400})
    }
    
    await supabase.auth.signOut();

    return NextResponse.redirect(new URL("/", req.url), {
      status: 302,
    });
}
