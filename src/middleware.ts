import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const { pathname, search } = url;
    const hostname = request.headers.get('host');

    // Check if we're on the production environment (approximate check by hostname)
    // We want to force www on production, but not necessarily on localhost
    // Assuming 'usepdf.in' is the production text to look for.
    const isProd = hostname && hostname.includes('usepdf.in');

    if (isProd) {
        if (hostname === 'usepdf.in') {
            const newUrl = new URL(`https://www.usepdf.in${pathname}${search}`);
            return NextResponse.redirect(newUrl, 301);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
