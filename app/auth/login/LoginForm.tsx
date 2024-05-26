"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Logo from "@/public/images/logo.png";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form className="px-4 min-w-min max-w-md w-full flex flex-col space-y-4">
      <Avatar className="w-20 h-20 self-center">
        <AvatarImage src={Logo.src} alt="TscogameLogo.png" />
        <AvatarFallback>Tsco Game</AvatarFallback>
      </Avatar>

      <p className="form_description self-center text-slate-500">
        لطفا اطلاعات حساب خود را وارد نمائید.
      </p>
      <div className="form_wrapper space-y-6">
        <div className="form_control">
          <Input type="text" placeholder="نام کاربری" />
        </div>
        <div className="form_control relative">
          <Input type={visible ? "text" : "password"} placeholder="رمز عبور" />
          <Button
            variant={"link"}
            type="button"
            className="absolute top-1/2 left-0 -translate-y-1/2"
            onClick={() => setVisible((prev) => !prev)}
          >
            {!visible ? (
              <FiEye className="w-5 h-5" />
            ) : (
              <FiEyeOff className="w-5 h-5" />
            )}
          </Button>
        </div>
        <div className="form_control">
          <Button className="w-full" type="submit">
            ورود
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
