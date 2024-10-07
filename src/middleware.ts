import {  NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest){
    
    const path = req.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/home' 
   
    
    const userId = req.cookies.get('loggedInUser')?.value 
            


        if(isPublicPath && userId){
            return NextResponse.redirect(new URL('/home', req.url))
        }

        if(!isPublicPath && !userId){
            return NextResponse.redirect(new URL('/login', req.url))
        }
        
}
export const config = {
matcher:['/', '/login', '/feed']
}