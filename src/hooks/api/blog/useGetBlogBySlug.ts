"use client"

import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { PageableResponse, PaginationQueris } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";


const useGetBlogByslug = (slug: string) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
        const {data} = await axiosInstance.get<Blog>(`/blogs/${slug}`);
        return data;
    }

  });
};

export default useGetBlogByslug;