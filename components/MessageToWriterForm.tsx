"use client";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import MailIcon from "./icons/MailIcon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CookieValueTypes, getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";

type Inputs = {
  title: string;
  message: string;
};
interface MyJwtPayload {
  user_id: number;
  user_role: string;
}

const MessageToWriterForm = ({ authorId }: { authorId: number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const token: CookieValueTypes = getCookie("token");
      const decoded = jwtDecode<MyJwtPayload>(token!);

      const response = await axios.post(`/api/message`, {
        fromUserId: decoded.user_id!,
        toUserId: authorId,
        title: data.title,
        message: data.message,
      });

      if (response.status === 200) {
        toast.success(response.data.message!);
      }
    } catch (error:any) {
        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;
            const errorMessage = error.response.data.error;
            
            if (status === 400) {
              toast.error(errorMessage || "Bad request.");
            } else if (status === 403) {
              toast.error(errorMessage || "Forbidden.");
            } else if (status === 404) {
              toast.error(errorMessage || "Not found.");
            } else {
              toast.error("An unexpected error occurred.");
            }
          } else {
            toast.error("پیام ارسال نشد، لطفا دوباره تلاش کنید.");
          }
    }
  };

  return (
    <form
      className="my-4 w-full flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input placeholder="موضوع پیام" {...register("title")} />
      <Textarea placeholder="متن پیام ..." {...register("message")} />
      <Button className="flex items-center gap-2">
        <MailIcon className="w-5 h-5" /> <span>ارسال</span>
      </Button>
    </form>
  );
};

export default MessageToWriterForm;
