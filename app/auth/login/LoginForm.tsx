"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Logo from "@/public/images/logo.png";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="px-4 min-w-min max-w-md w-full flex flex-col space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Avatar className="w-20 h-20 self-center">
        <AvatarImage src={Logo.src} alt="TscogameLogo.png" />
        <AvatarFallback>Tsco Game</AvatarFallback>
      </Avatar>

      <p className="form_description self-center text-slate-500">
        لطفا اطلاعات حساب خود را وارد نمائید.
      </p>
      <div className="form_wrapper space-y-6">
        <div className="form_control flex flex-col space-y-3">
          <Input
            type="text"
            placeholder="نام کاربری"
            {...register("username", {
              required: "لطفا نام کاربری خود را وارد کنید.",
            })}
          />
          {errors.username && (
            <span className="text-destructive text-sm font-semibold">
              {errors.username && errors.username.message}
            </span>
          )}
        </div>
        <div className="form_control flex flex-col space-y-3">
          <div className="relative">
            <Input
              type={visible ? "text" : "password"}
              placeholder="رمز عبور"
              {...register("password", {
                required: "لطفا رمز عبور خود را وارد کنید.",
              })}
            />
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

          {errors.password && (
            <span className="text-destructive text-sm font-semibold">
              {errors.password && errors.password.message}
            </span>
          )}
        </div>
        <div className="form_control flex flex-col space-y-4">
          <Button className="w-full" type="submit">
            ورود
          </Button>

          {errors.root && (
            <div className="p-4 text-sm text-destructive bg-destructive/10 rounded-md">
              {errors.root && errors.root.message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
