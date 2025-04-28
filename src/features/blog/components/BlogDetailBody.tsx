import { Blog } from "@/types/blog"
import { FC } from "react"

interface BlogDetailProps {
    blog:Blog
}

const BlogDetailBody: FC<BlogDetailProps> = ({blog}) => {
  return (
    <section>
      Mark
    </section>
  )
}

export default BlogDetailBody