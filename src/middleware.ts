// export { auth as middleware } from "@/auth"
import { NextResponse } from "next/server"
import { auth } from "@/auth"

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const session = await auth()

  // List of protected routes
  const protectedRoutes = ["/dashboard", "/profile"]

  // Check if the current path is in the protected routes
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // If it's a protected route and there's no session, redirect to sign-in
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
}
