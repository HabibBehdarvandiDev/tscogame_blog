import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const url = new URL(request.url);

  if (role === "admin" && url.pathname.startsWith("/admin")) {
    return NextResponse.next();
  } else if (role === "writer" && url.pathname.startsWith("/writer")) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/writer/:path*"],
};
