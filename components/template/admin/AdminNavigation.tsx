"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import { AdminDashboardNav } from "@/routes/AdminDashboardNav";
import { usePathname } from "next/navigation";

const AdminNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center align-middle justify-start p-4 w-1/5">
      <div className="nav_logo my-5 w-full flex items-center justify-center align-middle">
        <Link href={"/admin/dashboard"}>
          <Image src={Logo.src} alt="Logo" width={85} height={85} />
        </Link>
      </div>
      <div className="nav_links w-full p-4 min-h-min flex flex-col gap-4">
        {AdminDashboardNav.map((link, index) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={index}
              href={link.href}
              className={`p-5 rounded-2xl flex justify-start align-middle items-center ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-transparent text-zinc-400 hover:text-zinc-500"
              }`}
            >
              <p className="flex text-nowrap text-md align-middle items-center justify-center gap-4">
                <i>{link.icon}</i>
                <span>{link.title}</span>
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default AdminNavigation;
