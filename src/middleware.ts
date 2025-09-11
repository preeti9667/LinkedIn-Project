import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {

    const path = req.nextUrl.pathname
    
    const isPublicPath = path === '/home' || path === '/login'


    const userId = req.cookies.get('loggedInUser')?.value



    if (isPublicPath && userId) {
        return NextResponse.redirect(new URL('/feed', req.url))
    }

    if (!isPublicPath && !userId) {
        return NextResponse.redirect(new URL('/home', req.url))
    }

}
export const config = {
    matcher: ['/', '/login', '/feed']
}