"use client";
import { Button } from "@/components/ui/button";
import animation from "@/public/403.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";

const unauthorize = () => {
  const router = useRouter();
  return (
    <div className="min-w-screen min-h-screen overflow-hidden flex flex-col justify-center items-center align-middle">
      <div className="flex flex-col max-w-sm space-y-5 p-4">
        <Lottie animationData={animation} loop={true} />
        <h1 className="text-6xl font-semibold">عدم دسترسی</h1>
        <p>شما دسترسی به صفحه مورد نظر را ندارید !</p>

        <Button className="font-semibold" onClick={() => router.push("/")}>
          بازگشت به خانه
        </Button>
      </div>
    </div>
  );
};

export default unauthorize;
