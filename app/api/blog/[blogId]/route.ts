import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { BlogSchema, PartialBlogSchema } from "./shcema";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const blogId = parseInt(searchParams.get("blogId") as string, 10);

  try {
    const isBlogExist = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!isBlogExist) {
      return NextResponse.json(
        {
          error: "نوشته مورد نظر پیدا نشد، لطفا صفحه را دوباره بارگزاری کنید.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(isBlogExist, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در برقراری ارتباط با سرور" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const blogId = parseInt(searchParams.get("blogId") as string, 10);

  const isBlogExist = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
  });

  if (!isBlogExist) {
    return NextResponse.json(
      { error: `نوشته با آیدی ${blogId} وجود ندارد.` },
      { status: 404 }
    );
  }

  try {
    await prisma.blogtags.deleteMany({
      where: {
        blogId: blogId,
      },
    });

    // Then delete the blog
    await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });

    return NextResponse.json(
      { message: "نوشته مورد نظر حذف شد." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "نوشته حذف نشده. مشکلی پیش آمده است." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const blogId = parseInt(searchParams.get("blogId") as string, 10);

  if (isNaN(blogId)) {
    return NextResponse.json(
      {
        error: "آیدی نوشته اشتباه است.",
      },
      { status: 400 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({
      error: "بدنه درخواست نباید خالی باشد",
    });
  }

  const PartialBlogSchema = BlogSchema.partial();

  const validation = PartialBlogSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.formErrors, { status: 400 });
  }

  const validatedData = validation.data;

  const existingBlog = await prisma.blog.findUnique({ where: { id: blogId } });

  if (!existingBlog) {
    return NextResponse.json(
      {
        error: "نوشته مورد نظر پیدا نشد، لطفا صفحه را دوباره بارگزاری کنید.",
      },
      { status: 404 }
    );
  }

  try {
    const updatedblog = await prisma.blog.update({
      where: { id: blogId },
      data: validatedData,
    });

    if (!updatedblog) {
      return NextResponse.json(
        { error: "بروزرسانی نوشته با مشکل مواجه شد." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "نوشته بروزرسانی شد" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "بروزرسانی نوشته با مشکل مواجه شد. لطفا دوباره امتحان کنید",
      },
      { status: 500 }
    );
  }
}
