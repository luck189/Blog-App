import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });
  const [blogs, setBlogs] = useState([]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await axios.post(
        "http://localhost:4000/blog/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      
      // FIX: Proper immutable state resetting instead of direct property mutations
      setFormData({
        title: "",
        category: "",
        description: "",
        image: null,
      });
    } catch (error) {
      const errMsg = error.response?.data?.message || error.message;
      toast.error(errMsg);
    }
  };

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/blog/all");
        setBlogs(res.data.blogs);
      } catch (error) {
        console.log("error", error);
      }
    };
    allBlogs();
  }, []);

  const removeBlog = async (blogId) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/blog/delete/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      // FIX: Added optional chaining to prevent server disconnect/network crashes
      const errMsg = error.response?.data?.message || error.message;
      toast.error(errMsg);
    }
  };

  return (
    <div className="flex h-auto">
      {/* side bar */}
      <div className="w-64 border-r border-gray-300 p-6">
        <h2 className="text-lg font-semibold mb-6 text-black">Dashboard</h2>
        <button
          className={`w-full text-left py-2 px-4 mb-2 rounded text-white font-medium cursor-pointer ${
            activeTab === "post" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("post")}
        >
          Post a Blog
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded text-white font-medium cursor-pointer ${
            activeTab === "list" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List of Blogs
        </button>
      </div>

      <div className="flex-1 p-6">
        {activeTab === "post" ? (
          <div>
            <h2 className="text-xl font-bold">Post a new blog</h2>
            <div className="mt-8">
              <form onSubmit={submitHandler} className="w-1/2 flex flex-col gap-3">
                <input
                  name="title"
                  value={formData.title}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Title"
                  className="border border-gray-300 rounded-md p-2 outline-none w-full"
                  required
                />
                <input
                  name="category"
                  value={formData.category}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Category"
                  className="border border-gray-300 rounded-md p-2 outline-none w-full"
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={onChangeHandler}
                  placeholder="Description"
                  className="border border-gray-300 rounded-md p-2 outline-none w-full min-h-[120px]"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Choose Image</label>
                  <input
                    // FIX: Key automatically clears the input's visual "filename string" on submission reset
                    key={formData.image ? "selected" : "empty"}
                    onChange={fileHandler}
                    type="file"
                    accept="image/*"
                    className="border border-gray-300 rounded-md p-2 outline-none w-full"
                    required
                  />
                </div>
                <button type="submit" className="bg-black text-white w-full rounded-full border-none cursor-pointer py-2 mt-2 font-semibold">
                  Post Blog
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="p-4 h-auto">
            <h2 className="text-xl font-semibold mb-4">List of Blogs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Category</th>
                    <th className="border px-4 py-2">Image</th>
                    <th className="border px-4 py-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="text-center">
                      <td className="border px-4 py-2 font-medium">{blog.title}</td>
                      <td className="border px-4 py-2 text-gray-600">{blog.category}</td>
                      <td className="border px-4 py-2">
                        <img
                          src={`http://localhost:4000/images/${blog.image}`}
                          alt={blog.title}
                          className="w-16 h-16 object-cover mx-auto rounded"
                        />
                      </td>
                      <td
                        className="border px-4 py-2 cursor-pointer text-red-600 font-bold hover:text-red-800"
                        onClick={() => removeBlog(blog._id)}
                      >
                        X
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;