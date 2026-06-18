import { useContext } from "react";
import BlogCard from "./BlogCard";
import { StoreContext } from "../context/StoreContext";

const LatestBlogs = () => {
  const { blogData } = useContext(StoreContext);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl my-4 text-gray-700 font-bold text-center sm:text-start px-4">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {(blogData || [])
          .slice(-6)
          .reverse()
          .map((blog) => (
            <BlogCard
              key={blog._id} // Fixed map key tracking link
              id={blog._id}
              title={blog.title}
              image={blog.image}
              category={blog.category}
              author_name={blog.author.name}
              author_image={blog.author.image}
              date={blog.createdAt}
            />
          ))}
      </div>
      <hr className="my-8 border-gray-200" />
    </div>
  );
};

export default LatestBlogs;