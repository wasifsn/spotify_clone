import { NextResponse } from 'next/server';

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;
    const { origin } = req.nextUrl;
    if (!token) {
      return NextResponse.redirect(`${origin}/signin`);
    }
  }
}
