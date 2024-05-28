import UserGroupIcon from "@/components/icons/UserGroupeIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserDefaultImage from "@/public/images/userDefaultImage.jpg";
import { UserObjType } from "@/types/User";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

type ProfileProps = {
  userObj?: UserObjType;
};

const Profile = ({ userObj }: ProfileProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="bg-transparent rounded-xl px-5 py-1 flex items-center align-middle gap-4">
          <Avatar>
            <AvatarImage
              src={userObj?.profileUrl ? userObj.profileUrl : ""}
              alt="پروفایل"
            />
            <AvatarFallback>پروفایل</AvatarFallback>
          </Avatar>
          <h4 className="hidden md:inline-block text-nowrap">
            سلام، {userObj?.fisrtName}{" "}
          </h4>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60 flex flex-col rounded-xl p-2">
        <Link
          href={"#"}
          className="flex gap-4 justify-start items-center align-middle hover:bg-gray-100/50 hover:text-primary p-2 rounded-xl"
        >
          <i>
            {" "}
            <UserGroupIcon className="w-5 h-5" />{" "}
          </i>
          <p>کاربران</p>
        </Link>
        <Separator className="my-2" />
        <Link
          href={"#"}
          className="flex gap-4 justify-start items-center align-middle hover:bg-gray-100/50 hover:text-primary p-2 rounded-xl"
        >
          <i>
            {" "}
            <UserGroupIcon className="w-5 h-5" />{" "}
          </i>
          <p>کاربران</p>
        </Link>
        <Link
          href={"#"}
          className="flex gap-4 justify-start items-center align-middle hover:bg-gray-100/50 hover:text-primary p-2 rounded-xl"
        >
          <i>
            {" "}
            <UserGroupIcon className="w-5 h-5" />{" "}
          </i>
          <p>کاربران</p>
        </Link>
        <Link
          href={"#"}
          className="flex gap-4 justify-start items-center align-middle hover:bg-gray-100/50 hover:text-primary p-2 rounded-xl"
        >
          <i>
            {" "}
            <UserGroupIcon className="w-5 h-5" />{" "}
          </i>
          <p>کاربران</p>
        </Link>
        <Link
          href={"#"}
          className="flex gap-4 justify-start items-center align-middle hover:bg-gray-100/50 hover:text-primary p-2 rounded-xl"
        >
          <i>
            {" "}
            <UserGroupIcon className="w-5 h-5" />{" "}
          </i>
          <p>کاربران</p>
        </Link>
        
        <Separator className="my-2" />

        <Link
          href={"#"}
          className="flex gap-4 justify-start items-center align-middle text-primary p-2 rounded-xl"
        >
          <i>
            {" "}
            <UserGroupIcon className="w-5 h-5" />{" "}
          </i>
          <p>کاربران</p>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
