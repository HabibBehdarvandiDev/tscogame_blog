import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  if (!token || !role) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const url = new URL(request.url);

  if (role === "admin" && url.pathname.startsWith("/admin")) {
    return NextResponse.next();
  } else if (role === "writer" && url.pathname.startsWith("/writer")) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/unauthorize", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/writer/:path*"],
};
