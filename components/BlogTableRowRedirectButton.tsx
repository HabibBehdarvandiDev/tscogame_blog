"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import RedirectSquare from "./icons/RedirectSquare";

const BlogTableRowRedirectButton = ({ blogId }: { blogId: number }) => {
  return (
    <Button size={"icon"} variant={"outline"} asChild>
      <Link href={`/admin/blogs/${blogId}`}>
        <RedirectSquare className="w-5 h-5" />
      </Link>
    </Button>
  );
};

export default BlogTableRowRedirectButton;
