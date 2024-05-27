"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { Input } from "@/components/ui/input";
import { AdminDashboardNav } from "@/routes/AdminDashboardNav";
import Link from "next/link";
import { useState } from "react";

const HeaderCommand = () => {
  const [value, setValue] = useState("");
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const filterRoutes = AdminDashboardNav.filter((route) => {
    return route.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <div className="search-control relative">
        <Input
          placeholder="جستجوی نوشته و مقاله ..."
          className="pr-10 placeholder:text-gray-400 "
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setIsContainerVisible(e.target.value !== "");
          }}
        />
        <i className="text-gray-400 absolute top-1/2 right-4 -translate-y-1/2">
          {" "}
          <SearchIcon className="w-5 h-5" />{" "}
        </i>
      </div>
      {isContainerVisible && (
        <div className="mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4">
          {filterRoutes.length > 0 ? (
            filterRoutes.map((route, index) => (
              <Link
                href={route.href}
                key={index}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                passHref
                onClick={() => {
                  setValue("");
                  setIsContainerVisible(false);
                }}
              >
                {route.title}
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              هیچ نوشته‌ای با این نام پیدا نشد.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderCommand;
