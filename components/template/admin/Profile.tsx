import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import UserDefaultImage from "@/public/images/userDefaultImage.jpg";

const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="bg-white border rounded-xl px-5 py-1 flex items-center align-middle gap-4">
          <Avatar>
            <AvatarImage src={UserDefaultImage.src} alt="پروفایل" />
            <AvatarFallback>پروفایل</AvatarFallback>
          </Avatar>
          <h4>نام کاربری</h4>
        </div>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};

export default Profile;
