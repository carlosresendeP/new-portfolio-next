import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Routes to protect - logic merged from middleware.ts
  const protectedPaths = ["/login", "/register", "/admin"];
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path),
  );

  // 1. Check if the user is trying to set the admin key
  const adminKey = searchParams.get("admin_key");
  const validAdminKey = process.env.ADMIN_ACCESS_KEY;

  if (adminKey) {
    // If key matches, set the cookie and redirect to the same URL without the key
    if (adminKey === validAdminKey) {
      const response = NextResponse.redirect(new URL(pathname, request.url));
      // Set a long-lived cookie (e.g., 30 days)
      response.cookies.set("admin_mode", "true", {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
      });
      return response;
    }
  }

  // 2. If trying to access a protected path
  if (isProtectedPath) {
    const hasAdminCookie = request.cookies.get("admin_mode")?.value === "true";

    // If no cookie, redirect to home
    if (!hasAdminCookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/register/:path*", "/admin/:path*"],
};
