import { NextResponse } from "next/server"
import { auth } from "./lib/auth"
import { headers } from "next/headers"

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    // const islogdin = true

    if (session) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/sing-up', request.url))
}

export const config = {
    matcher: ['/profile','/All-teils/:path*']
}