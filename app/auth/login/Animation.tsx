"use client";
import Lottie from "lottie-react";
import loginAnimation from "@/public/loginAnimation.json";

const Animation = () => {
  return (
    <div>
      <Lottie animationData={loginAnimation} loop={false} />
    </div>
  );
};

export default Animation;
