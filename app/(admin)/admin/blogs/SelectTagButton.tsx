"use client";

import Spinner from "@/components/ui/Spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Tags = {
  id: number;
  tagName: string;
};

const SelectTagButton = () => {
  const [tags, setTags] = useState<Tags[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/tags");

        if (response.status !== 200) return null;

        setTags(response.data);
      } catch (error) {
        toast.error("نتونستم تگ هارو بگیرم.");
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  const handleValueChange = (value: string) => {
    console.log("selected value :", value);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="فیلتر بر اساس تگ" className="!text-right" />
      </SelectTrigger>
      <SelectContent>
        {!loading ? (
          <>
            <SelectItem value="default">بدون فیلتر</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag.id} value={tag.tagName}>
                {tag.tagName}
              </SelectItem>
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </SelectContent>
    </Select>
  );
};

export default SelectTagButton;
