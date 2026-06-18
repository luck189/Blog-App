import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(StoreContext);

  return (
    <nav className="bg-gray-200 p-4 sticky top-0 z-50 shadow-sm">
      <div className="flex container mx-auto justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img src={assets.logo} alt="CodeCanvas Logo" />
            <p className="hidden sm:block text-2xl text-gray-800">
              Code <span className="font-bold text-orange-600">Canvas</span>
            </p>
          </Link>
        </div>

        {/* Center Links */}
        <ul className="hidden sm:flex gap-12 text-lg font-medium justify-center items-center text-gray-700">
          <Link to="/" className="cursor-pointer hover:text-orange-500 duration-300">
            Home
          </Link>
          <Link to="/blogs" className="cursor-pointer hover:text-orange-500 duration-300">
            Blogs
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-orange-500 duration-300">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-orange-500 duration-300">
            Contact
          </Link>
        </ul>

        {/* Auth Action Button */}
        {user ? (
          <div className="flex gap-3 items-center">
            <Link
              to="/dashboard"
              className="bg-black px-5 py-2 rounded-full text-white text-sm font-medium hover:bg-gray-800 duration-300"
            >
              Dashboard
            </Link>
            <button
              onClick={logoutUser}
              className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-orange-600 duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-orange-500 text-white px-7 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-orange-600 duration-300"
          >
            Signin
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;