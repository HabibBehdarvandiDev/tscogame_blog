import BlogsTable from "./BlogsTable";
import NewBlogButton from "./NewBlogButton";
import ReloadButton from "./ReloadButton";

const AdminBlogsPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="table_filter w-full flex items-center align-middle justify-start gap-4 bg-white p-4 rounded-xl shadow-sm">
        <NewBlogButton />
        <ReloadButton />
        <span>select by tag</span>
        <span>select by author</span>
        <span>select by approved State</span>
      </div>
      <div className="table w-full h-screen overflow-hidden">
        <BlogsTable />
      </div>
    </div>
  );
};

export default AdminBlogsPage;
