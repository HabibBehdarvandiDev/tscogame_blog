import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const blogs = await prisma.blog.findMany();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      {
        error: "مشکلی هنگام ارتباط با سرور پیش آمده، لطفا بعدا تلاش کنید.",
      },
      { status: 500 }
    );
  }
}
