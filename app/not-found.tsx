"use client";
import { Button } from "@/components/ui/button";
import animation from "@/public/404.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-w-screen min-h-screen overflow-hidden flex flex-col justify-center items-center align-middle">
      <div className="flex flex-col max-w-sm space-y-5 p-4">
        <Lottie animationData={animation} loop={true} />
        <h1 className="text-6xl font-semibold leading-normal">
          صفحه مورد نظر پیدا نشد !
        </h1>
        <p className="text-justify">
          لطفا به آدرسی که وارد کردید دقت کنید و یا اگر بصورت اتوماتیک وارد این
          صفحه شدید با پشتیبانی تماس بگیرید.
        </p>

        <Button className="font-semibold" onClick={() => router.push("/")}>
          بازگشت به خانه
        </Button>
        <Button
          variant={"ghost"}
          className="font-semibold"
          onClick={() => router.push("/")}
        >
          تماس با پشتیانی
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
