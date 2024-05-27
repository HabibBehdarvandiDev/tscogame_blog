import { DashboardLinks } from "@/types/DashboardLinksType";
import DashboardIcon from "@/components/icons/DashboardIcon";
import ChartRoseIcon from "@/components/icons/ChartRoseIcon";
import LicenseIcon from "@/components/icons/LicenseIcon";
import UserGroupIcon from "@/components/icons/UserGroupeIcon";
import MoneySecurityIcon from "@/components/icons/MoneySecurityIcon";

export const AdminDashboardNav: DashboardLinks[] = [
  {
    title: "داشبورد",
    href: "/admin/dashboard",
    icon: <DashboardIcon className="w-6 h-6" />,
  },
  {
    title: "نوشته ها",
    href: "/admin/blogs",
    icon: <LicenseIcon className="w-6 h-6" />,
  },
  {
    title: "نویسنده ها",
    href: "/admin/writers",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    title: "آنالیز",
    href: "/admin/analyze",
    icon: <ChartRoseIcon className="w-6 h-6" />,
  },
  {
    title: "وضعیت حساب ها",
    href: "/admin/payment-status",
    icon: <MoneySecurityIcon className="w-6 h-6" />,
  },
];
