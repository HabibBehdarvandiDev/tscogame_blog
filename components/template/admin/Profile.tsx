import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserDefaultImage from "@/public/images/userDefaultImage.jpg";
import { UserObjType } from "@/types/User";

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
              src={
                userObj?.profileUrl ? userObj.profileUrl : ""
              }
              alt="پروفایل"
            />
            <AvatarFallback>پروفایل</AvatarFallback>
          </Avatar>
          <h4 className="hidden md:inline-block text-nowrap">سلام، {userObj?.fisrtName} </h4>
        </div>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};

export default Profile;
