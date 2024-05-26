import Image from "next/image";
import Animation from "./Animation";
import LoginForm from "./LoginForm";
import LoginImage from "@/public/images/chairextend.jpg";

const LoginPage = () => {
  return (
    <div className="bg-white min-h-screen min-w-screen flex overflow-hidden">
      <div className="login w-full xl:w-1/2 bg-white flex justify-center items-center align-middle">
        <LoginForm />
      </div>
      <div className="hidden xl:flex xl:w-1/2 xl:m-8 xl:rounded-4xl justify-center align-middle items-center bg-primary relative">
        <Image
          src={LoginImage.src}
          alt="chair"
          layout="fill"
          objectFit="cover"
          className="rounded-4xl"
        />
        <div className="absolute top-9 right-16 text-white flex justify-start items-center w-full gap-4">
          <p>یک سیستم بی نقص</p>{" "}
          <div className="w-[150px] h-[1.5px] rounded-sm bg-white"></div>
        </div>

        <div className="absolute bottom-9 right-16 text-white flex flex-col w-full gap-4 pl-5">
          <h1 className="text-7xl font-semibold">
            ساخته <br /> شده <br /> برای شما
          </h1>
          <p className="max-w-screen-sm leading-10">
            به جامعه نویسندگان حرفه‌ای بازی‌ها بپیوندید و خلاقیت خود را به اوج
            برسانید!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
