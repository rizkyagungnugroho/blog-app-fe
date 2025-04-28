import { Blog } from "@/types/blog";
import { FC } from "react";
import { format } from "date-fns";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface BlogHeaderProps {
  blog: Blog;
}

const BlogDetailHeader: FC<BlogHeaderProps> = ({ blog }) => {
  return (
    <section className="mt-10 space-y-2">
      {/* Category badge */}
      <Badge
        variant="outline"
        className="rounded-sm bg-green-100 text-green-100 capitalize"
      >
        {blog.category}
      </Badge>

      {/* Title */}
      <h1 className="text-3xl font-bold">{blog.title}</h1>

      {/* Created date and author */}
      <p>
        {/* Gunakan createdAt jika itu yang benar */}
        {format(new Date(blog.createAt), "dd MMM yyyy")} - {blog.user?.name}
      </p>

      {/* Thumbnail image */}
      <div className="relative h-[300px]">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          className="rounded-sm object-cover"
          fill
        />
      </div>
    </section>
  );
};

export default BlogDetailHeader;
