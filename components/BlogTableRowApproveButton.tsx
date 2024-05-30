"use client";

import { useEffect, useState } from "react";
import Checkmark from "./icons/Checkmark";
import { Button } from "./ui/button";
import SandClockIcon from "./icons/SandClockIcon";
import axios from "axios";
import toast from "react-hot-toast";
import { BlogsSchema } from "@/types/BlogsTableType";
import Spinner from "./ui/Spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BlogTableRowApproveButton = ({ blogId }: { blogId: number }) => {
  const [isApproved, setApproved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getApproveValue = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/blog/${blogId}`, {
          params: {
            blogId,
          },
        });

        if (response.status === 404) {
          toast.error(
            "نوشته مورد نظر وجود ندارد، لطفا صفحه را دوباره بارگزاری کنید."
          );
        }
        const blog: BlogsSchema = response.data;

        setApproved(blog.approved);
        setLoading(false);
      } catch (error) {
        toast.error(
          "خطای ارتباط با سرور، لطفا بعدا دوباره امتحان کنید و درصورت برطرف نشدن مشکل با پشتیبانی تماس بگیرید."
        );
      } finally {
        setLoading(false);
      }
    };
    getApproveValue();
  }, [isApproved]);

  const handleApprove = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `/api/blog/${blogId}`,
        {
          approved: !isApproved,
        },
        {
          params: {
            blogId,
          },
        }
      );

      if (response.status === 404) {
        toast.error(
          "نوشته مورد نظر وجود ندارد، لطفا صفحه را دوباره بارگزاری کنید."
        );
      }

      if (response.status === 200) {
        toast.success("نوشته مورد نظر بروزرسانی شد.");
      }
      setApproved(!isApproved);
    } catch (error) {
      toast.error(
        "خطای ارتباط با سرور، لطفا بعدا دوباره امتحان کنید و درصورت برطرف نشدن مشکل با پشتیبانی تماس بگیرید."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={handleApprove}
            disabled={loading}
          >
            {loading ? (
              <Spinner />
            ) : isApproved ? (
              <Checkmark className="w-5 h-5 text-green-500" />
            ) : (
              <SandClockIcon className="w-5 h-5 text-gray-400" />
            )}
          </Button>
          <TooltipContent>
            <p>{isApproved ? "لغو تایید" : "تایید"}</p>
          </TooltipContent>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BlogTableRowApproveButton;
