import BlogsTable from "./BlogsTable";

const AdminBlogsPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="table_filter w-full flex gap-4 bg-white p-4 rounded-xl shadow-sm">
        <span>add</span>
        <span>reload</span>
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
