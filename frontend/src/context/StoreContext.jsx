import { createContext, useEffect, useState } from "react";
import axios from "axios";

// 1. Create and export the context directly in this file
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // Initialize state directly to avoid multi-pass rendering issues
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.error("Failed to parse stored user context", error);
        return null;
      }
    }
    return null;
  });

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/blog/all");
        setBlogData(res.data.blogs);
      } catch (error) {
        console.log("error in all blogs api", error);
      }
    };
    allBlogs();
  }, []);

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const contextValue = { blogData, user, loginUser, logoutUser };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;