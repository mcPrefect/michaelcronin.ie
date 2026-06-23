import { NextResponse } from "next/server";

// Maps URL prefix → slug used for cookie + env var lookup
const PROTECTED = {
  // "/italy":     "italy",
  "/edinburgh": "edinburgh",
  "/london":    "london",
  "/leeds":     "leeds",
  "/kilkenny":  "kilkenny",
  "/flagmount": "flagmount",
  "/malta":     "malta",
  "/anniversary": "anniversary",
};

function getSlug(pathname) {
  for (const [prefix, slug] of Object.entries(PROTECTED)) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) return slug;
  }
  return null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const slug = getSlug(pathname);

  if (!slug) return NextResponse.next();

  const token = request.cookies.get(`auth_${slug}`)?.value;
  const expected = `${process.env.AUTH_SECRET}-${slug}`;

  if (token === expected) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
