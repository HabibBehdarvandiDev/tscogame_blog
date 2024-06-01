"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import Spinner from "@/components/ui/Spinner";
import { Input } from "@/components/ui/input";
import { AdminDashboardNav } from "@/routes/AdminDashboardNav";
import { BlogSchema } from "@/schemas/BlogSchema";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderCommand = () => {
  const [value, setValue] = useState("");
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [blogs, setBlogs] = useState<BlogSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (value) {
        setLoading(true);
        try {
          const response = await axios.get(`/api/blog`);
          const reponseData: BlogSchema[] = response.data;
          setBlogs(reponseData);
          setIsContainerVisible(true);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setIsContainerVisible(false);
        setBlogs([]);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchBlogs();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  const filterBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="relative">
      <div className="search-control relative">
        <Input
          placeholder="جستجوی نوشته و مقاله ..."
          className="pr-10 placeholder:text-gray-400 h-12 border-none"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setIsContainerVisible(e.target.value !== "");
          }}
        />
        <i className="text-gray-400 absolute top-1/2 right-4 -translate-y-1/2">
          {" "}
          <SearchIcon className="w-5 h-5 text-primary" />{" "}
        </i>
      </div>
      {isContainerVisible && (
        <div className="mt-2 bg-white rounded-md shadow-sm p-4 absolute w-full">
          {loading ? (
            <Spinner />
          ) : filterBlogs.length > 0 ? (
            filterBlogs.map((blog, index) => (
              <Link
                href={`/admin/blogs/${blog.id}`}
                key={index}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                passHref
                onClick={() => {
                  setValue("");
                  setIsContainerVisible(false);
                }}
              >
                {blog.title}
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              هیچ نوشته‌ای با این نام پیدا نشد.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderCommand;
