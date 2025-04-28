
import * as Yup from "yup";

export const CreateBlogSchema= Yup.object().shape({
    title:Yup.string().required("title is required"),
    category:Yup.string().required("category is required"),
    description:Yup.string().required("description is required"),
    content:Yup.string().required("content is required"),
    thumbnail:Yup.mixed().nullable().required("thumbnail is required"),
})