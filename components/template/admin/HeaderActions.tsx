"use server";
import prisma from "@/utils/db";
import MessegaesButton from "./MessegaesButton";
import NotificationButton from "./NotificationButton";
import Profile from "./Profile";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "@/hooks/useCookie";
import {UserObjType} from "@/types/User"

type decodedToken = {
  user_id: number;
  user_role: string;
};

const HeaderActions = async () => {
  const fetchUser = async () => {
    // get token
    const token = await getCookie({ name: "token" });

    if (token) {
      const decodedToken: decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;

      const user:UserObjType = await prisma.user.findFirst({ where: { id: userId } });

      return user;
    }
  };

  const userObj = await fetchUser();

  return (
    <div className="flex w-full gap-3 justify-evenly align-middle items-center">
      <div className="flex gap-8">
        <NotificationButton />
      </div>
      <div className="seperator w-[1px] h-9 bg-gray-200 rounded-md"></div>
      <div>
        <Profile userObj={userObj} />
      </div>
    </div>
  );
};

export default HeaderActions;
