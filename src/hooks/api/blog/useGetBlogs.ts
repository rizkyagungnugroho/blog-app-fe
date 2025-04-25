"use client"

import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { PageableResponse, PaginationQueris } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetBlogsQuery extends PaginationQueris{
    search?:string;
    
}

const useGetBlogs = (queries?: GetBlogsQuery) => {
  return useQuery({
    queryKey: ["blogs", queries],
    queryFn: async () => {
        const {data} = await axiosInstance.get<PageableResponse<Blog>>("/blogs", {params: queries});

        
        return data;
    }

  });
};

export default useGetBlogs