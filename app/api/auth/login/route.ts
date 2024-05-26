import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/utils/db";
import { LoginSchema } from "./LoginSchema";

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

  const validation = LoginSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 404 });
  }

  const { username, password } = validation.data;

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        error:
          "کاربری با این نام کاربری وجود ندارد لطفا با پشتیبانی تماس بگیرید.",
      },
      { status: 404 }
    );
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return NextResponse.json(
      { error: "رمز عبور و یا نام کاربری اشتباه است" },
      { status: 401 }
    );
  }

  const payload = {
    user_id: user.id,
    user_role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });

  return NextResponse.json({ token, role: user.role }, { status: 200 });
}
