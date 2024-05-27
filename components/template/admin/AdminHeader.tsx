import React from "react";
import HeaderCommand from "./HeaderCommand";
import HeaderActions from "@/components/template/admin/HeaderActions";

const AdminHeader = () => {
  return (
    <header className="flex flex-col md:flex-row gap-5">
      <div className="header_command w-full sm:w-5/6">
        <HeaderCommand />
      </div>
      <div className="header_actions w-full sm:w-2/6">
        <HeaderActions />
      </div>
    </header>
  );
};

export default AdminHeader;
