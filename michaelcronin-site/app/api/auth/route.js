import { NextResponse } from "next/server";

const PAGE_LABELS = {
  // italy:     "ITALIA",
  edinburgh: "EDINBURGH",
  london:    "LONDON",
  leeds:     "LEEDS",
  kilkenny:  "KILKENNY",
  flagmount: "FLAGMOUNT",
  malta:        "MALTA",
  anniversary: "ANNIVERSARY",
};

export async function POST(request) {
  const { password, slug } = await request.json();

  if (!slug || !PAGE_LABELS[slug]) {
    return NextResponse.json({ error: "Unknown page" }, { status: 400 });
  }

  const envKey = `PASSWORD_${slug.toUpperCase()}`;
  const expected = process.env[envKey];

  if (!expected || password !== expected) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(`auth_${slug}`, `${process.env.AUTH_SECRET}-${slug}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}
