import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const BACKEND_URL = "https://codecanvas-backend.vercel.app"
const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  const blog = blogData.find((b) => b._id === id);
  
  return (
    blog && (
      <div className="rounded-md border border-gray-200 p-5 max-w-3xl flex flex-col gap-3 items-center justify-center mx-auto py-8">
        <img
          className="transition-transform duration-300 hover:scale-105 rounded-md"
          src={`${BACKEND_URL}/images/${blog.image}`}
          alt=""
        />
        {/* FIX: Changed invalid text-2cl class to text-2xl */}
        <p className="text-2xl font-bold text-gray-800">{blog.title}</p>
        <p className="text-[#4B6BFB] font-semibold">{blog.category}</p>
        <p className="text-gray-700 leading-relaxed text-center">{blog.description}</p>
        <div className="flex gap-2 items-center justify-center my-2">
          <p className="text-lg font-bold text-gray-600">Author: {blog.author.name}</p>
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={`${BACKEND_URL}/images/${blog.author.image}`}
            alt=""
          />
        </div>
        <p className="text-sm text-gray-500">
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    )
  );
};

export default SingleBlog;