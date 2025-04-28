"use client";
import { FC } from 'react';
import BlogDetailHeader from './BlogDetailHeader';
import BlogDetailBody from './BlogDetailBody';
import useGetBlogByslug from '@/hooks/api/blog/useGetBlogBySlug';
import NoData from '@/components/NoData';
interface BlogDetailPageProps { 
    slug:string;
}
const BlogDetailPage : FC<BlogDetailPageProps>= ({slug}) => {
    const {data: blog, isPending}= useGetBlogByslug(slug);
    if(isPending){
        return <h1 className="text-center">Loading.....</h1>
    }

    if(!blog) {
       return  <NoData/>
    }
  return (
   <main className="container mx-auto max-w-6xl px-4">
    <BlogDetailHeader blog={blog} />
    <BlogDetailBody blog={blog} />
   </main>
  )
}

export default BlogDetailPage