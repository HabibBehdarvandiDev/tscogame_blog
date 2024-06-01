import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const tags = await prisma.tags.findMany();
  return NextResponse.json(tags, { status: 200 });
}
