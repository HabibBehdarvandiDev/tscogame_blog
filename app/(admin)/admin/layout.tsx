import AdminAside from "@/components/template/admin/AdminAside";
import AdminHeader from "@/components/template/admin/AdminHeader";
import AdminNavigation from "@/components/template/admin/AdminNavigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden gap-3 justify-between">
      <AdminNavigation />
      <main className="w-full flex flex-col gap-6 p-6 bg-gray-100">
        <AdminHeader />
        {children}
      </main>
    </div>
  );
};

export default layout;
