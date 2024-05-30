"use client";

import { useState } from "react";
import Trash from "./icons/Trash";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import Spinner from "./ui/Spinner";
import axios from "axios";

const BlogTableRowDeleteButton = ({ blogId }: { blogId: number }) => {
  const [deleting, setDeleting] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const response = await axios.delete(`/api/blog/${blogId}`, {
        params: {
          blogId,
        },
      });

      if (response.status === 404) {
        toast.success(
          `نوشته با آیدی مورد نظر پیدا نشد، لطفا صفحه را ریلود کنید.`
        );
      }

      if (response.status === 500) {
        toast.success("مشکل در برقراری ارتباط با سرور، نوشته حذف نشد.");
      }

      toast.success(
        `بلاگ با آیدی ${blogId} حذف شد. لطفا صفحه را ریلود کنید تا تغیرات را ببینید.`
      );
    } catch (error) {
      toast.error("اوپس حذف نشد، صفحه رو ریلود کن و دوباره امتحان کن.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="hover:text-destructive"
      onClick={handleDelete}
      disabled={deleting}
    >
      {deleting ? <Spinner /> : <Trash className="w-5 h-5" />}
    </Button>
  );
};

export default BlogTableRowDeleteButton;
