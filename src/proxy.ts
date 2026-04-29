import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/test" || pathname.startsWith("/test/")) {
    return new Response("Not Found", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
      status: 404,
    });
  }
}

export const config = {
  matcher: ["/test", "/test/:path*"],
};
