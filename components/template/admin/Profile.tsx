import UserGroupIcon from "@/components/icons/UserGroupeIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserObjType } from "@/types/User";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import UserIcon from "@/components/icons/UserIcon";
import DoorIcon from "@/components/icons/DoorIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RankIcon from "@/components/icons/RankIcon";
import ArrowUp from "@/components/icons/ArrowUp";
import TradeUpIcon from "@/components/icons/TradeUpIcon";
import ChampionIcon from "@/components/icons/ChampionIcon";
import WalletIcon from "@/components/icons/WalletIcon";
import AddTeamIcon from "@/components/icons/AddTeamIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import CloudIcon from "@/components/icons/CloudIcon";

type ProfileProps = {
  userObj?: UserObjType;
};

const Profile = ({ userObj }: ProfileProps) => {
  return (
    <>
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <div className="bg-transparent rounded-xl px-5 py-1 flex items-center align-middle gap-4 cursor-pointer">
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
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4">
              <ChampionIcon className="mr-2 h-5 w-5 text-gray-400" />
              <span className="text-lg font-semibold flex gap-2">
                11/80
                <TradeUpIcon className="h-5 w-5 text-green-500" />
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-gray-400">
            حساب کاربری
          </DropdownMenuLabel>
          <DropdownMenuGroup className="py-2">
            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 cursor-pointer">
              <UserIcon className="mr-2 h-5 w-5 text-gray-400" />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                پروفایل
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 cursor-pointer">
              <WalletIcon className="mr-2 h-5 w-5 text-gray-400" />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                کیف پول
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 cursor-pointer">
              <UserGroupIcon className="mr-2 h-5 w-5 text-gray-400" />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                تیم نوسنده ها
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 cursor-pointer">
              <AddTeamIcon className="mr-2 h-5 w-5 text-gray-400" />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                دعوت از دوستان
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 cursor-pointer">
              <SupportIcon className="mr-2 h-5 w-5 text-gray-400" />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                پشتیبانی
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 cursor-pointer">
              <CloudIcon className="mr-2 h-5 w-5 text-gray-400" />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                API
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem className="flex justify-start align-middle items-center gap-4 text-primary hover:cursor-pointer">
              <DoorIcon className="mr-2 h-5 w-5 " />
              <Link
                href={"/writer/wallet"}
                className="font-semibold flex gap-2"
              >
                خروج
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Profile;
