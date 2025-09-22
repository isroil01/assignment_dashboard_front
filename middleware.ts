import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pages that require login
const protectedRoutes = [
  "/company",
  "/dashboard",
  "/profile",
  "/setting",
  "/report",
];

// Auth-only pages (login/signup) – should not be visited when logged in
const authPages = ["/auth", "/auth/signin", "/auth/signup"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const path = request.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) => path.startsWith(route));

  const isAuthPage = authPages.some((route) => path.startsWith(route));

  // 1. Redirect unauthenticated users from protected pages to login
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // 2. Redirect authenticated users away from login/signup pages
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 3. Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
