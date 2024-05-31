import prisma from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import { MessageSchema } from "./MessageSchema";

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { error: "بدنه درخواست نباید خالی باشد" },
      { status: 400 }
    );
  }

  const validation = MessageSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.formErrors, { status: 400 });
  }

  const { fromUserId, toUserId, title, message } = validation.data;

  if (fromUserId === toUserId) {
    return NextResponse.json(
      { error: "شما اجازه ارسال پیام به خود را ندارید." },
      { status: 403 }
    );
  }

  const isUserExist = await prisma.user.findUnique({
    where: {
      id: toUserId,
    },
  });

  if (!isUserExist) {
    return NextResponse.json(
      { error: "کاربر مورد نظر وجود ندارد." },
      { status: 404 }
    );
  }

  try {
    const newMessage = await prisma.message.create({
      data: validation.data,
    });

    return NextResponse.json(
      {
        message: "پیام با موفقیت ارسال شد.",
        newMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "اوپس، پیام فرستاده نشد، لطفا دوباره امتحان کنید.",
      },
      { status: 500 }
    );
  }
}
