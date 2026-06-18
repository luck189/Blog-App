import { Link } from "react-router-dom";
const BACKEND_URL = "https://codecanvas-backend.vercel.app"

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="border border-gray-200 shadow-md p-4 rounded-lg bg-white flex flex-col justify-between">
      <div>
        <Link to={`/blog/${id}`} className="overflow-hidden block rounded-md mb-3">
          <img
            src={`${BACKEND_URL}/images/${image}`}
            alt={title}
            className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <p className="text-[#4B6BFB] text-sm font-semibold mb-2">{category}</p>
        <h1 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-orange-600 transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h1>
      </div>

      <div className="flex gap-3 items-center mt-4 pt-3 border-t border-gray-100">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={`${BACKEND_URL}/images/${author_image}`}
          alt={author_name}
        />
        <div className="flex flex-col text-xs text-gray-500">
          <p className="font-semibold text-gray-700 text-sm">{author_name}</p>
          <p>
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;