// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  // Redirect to login if there's no token and user is trying to access a protected route
  if (!token) {
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    if (!isAuthPage) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    return NextResponse.next();
  }

  // Redirect to `/onboarding` if the user hasn't completed onboarding
  if (token.sub) {
    const isOnboardingPage = req.nextUrl.pathname === '/onboarding';
    const isDashboardPage = req.nextUrl.pathname === '/dashboard';

    // Use the token data to decide the redirection without direct Prisma calls
    if (!token.isOnboarded && !isOnboardingPage && isDashboardPage) {
      return NextResponse.redirect(new URL('/onboarding', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/onboarding'],
};
