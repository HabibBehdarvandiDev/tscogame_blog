import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body;

  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { error: "can't parse the Body!" },
      { status: 400 }
    );
  }

  
}
