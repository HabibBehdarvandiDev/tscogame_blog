"use client";

import MessegaesButton from "./MessegaesButton";
import NotificationButton from "./NotificationButton";
import Profile from "./Profile";

const HeaderActions = () => {
  return (
    <div className="flex w-full gap-3 justify-evenly align-middle items-center">
      <div className="flex gap-8">
        <MessegaesButton />
        <NotificationButton />
      </div>
      <div className="seperator w-[1px] h-9 bg-gray-200 rounded-md"></div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default HeaderActions;