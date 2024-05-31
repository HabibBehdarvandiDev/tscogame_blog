import BlogTableRowApproveButton from "@/components/BlogTableRowApproveButton";
import BlogTableRowDeleteButton from "@/components/BlogTableRowDeleteButton";
import MessageToWriter from "@/components/MessageToWriter";
import { Badge } from "@/components/ui/badge";
import prisma from "@/utils/db";

const BlogPage = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  if (isNaN(parseInt(blogId))) {
    return <p>آیدی نامعتبر</p>;
  }

  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(blogId),
    },
    include: {
      authors: {
        include: {
          user: true,
        },
      },
      blogtags: {
        include: {
          tags: true,
        },
      },
    },
  });

  if (!blog) {
    return <p>نوشته مورد نظر وجود ندارد.</p>;
  }

  return (
    <div>
      <section className="w-full bg-white shadow-sm p-4 rounded-xl flex justify-start align-middle items-center gap-4">
        <BlogTableRowApproveButton blogId={parseInt(blogId)} />
        <BlogTableRowDeleteButton blogId={parseInt(blogId)} />
        <MessageToWriter authorId={blog.authorId!} />
      </section>
      <section className="flex mt-5 w-full gap-2">
        <div className="bg-white shadow-sm p-4 w-5/6 rounded-xl h-[75vh] overflow-x-hidden">
          <div className="flex flex-col gap-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {blog.title}
            </h1>
            <div className="flex gap-2">
              {blog.blogtags.map((blogtag, index) => (
                <Badge key={index} className="text-nowrap mr-1 cursor-pointer">
                  {blogtag.tags.tagName}
                </Badge>
              ))}
            </div>
          </div>
          <section className="mt-5">{blog.content}</section>
        </div>
        <aside className="bg-white shadow-sm p-4 w-1/6 rounded-xl">aside</aside>
      </section>
    </div>
  );
};

export default BlogPage;
