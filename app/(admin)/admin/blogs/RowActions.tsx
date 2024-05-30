import BlogTableRowApproveButton from "@/components/BlogTableRowApproveButton";
import BlogTableRowDeleteButton from "@/components/BlogTableRowDeleteButton";
import BlogTableRowRedirectButton from "@/components/BlogTableRowRedirectButton";

const RowActions = ({ blogId }: { blogId: number }) => {
  return (
    <div className="w-full flex justify-start items-center align-middle gap-2">
      <BlogTableRowDeleteButton blogId={blogId} />
      <BlogTableRowRedirectButton blogId={blogId} />
      <BlogTableRowApproveButton blogId={blogId} />
    </div>
  );
};

export default RowActions;
