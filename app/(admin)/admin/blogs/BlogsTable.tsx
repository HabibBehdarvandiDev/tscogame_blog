import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/utils/db";
import RowActions from "./RowActions";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const BlogsTable = async () => {
  const blogs = await prisma.blog.findMany({
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

  return (
    <Table className="bg-white rounded-xl shadow-sm overflow-hidden">
      <TableCaption>لیست کل نوشته ها</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-right">فعالیت</TableHead>
          <TableHead className="text-right">آیدی</TableHead>
          <TableHead className="text-right">تیتر</TableHead>
          <TableHead className="text-right">محتوا</TableHead>
          <TableHead className="text-right">تگ</TableHead>
          <TableHead className="text-right">نویسنده</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog, index) => (
          <TableRow key={blog.id}>
            <TableCell className="text-right">
              <RowActions blogId={blog.id} />
            </TableCell>
            <TableCell className="text-right">{blog.id}</TableCell>
            <TableCell className="text-right">{blog.title}</TableCell>
            <TableCell className="text-right max-w-[200px] text-nowrap truncate">
              {blog.content}
            </TableCell>
            <TableCell className="text-right">
              {blog.blogtags.map((blogtag, index) => (
                <Badge key={index} className="text-nowrap mr-1 cursor-pointer">
                  <Link href={`/admin/blogs/blogTag?=${blogtag.tags.tagName}`}>
                    {blogtag.tags.tagName}
                  </Link>
                </Badge>
              ))}
            </TableCell>
            <TableCell className="text-right">
              {blog.authors?.user?.fisrtName} {blog.authors?.user?.lastname}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
