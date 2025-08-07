import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-12 md:flex-row items-center justify-center">
        <div className="ml-5 mr-100">
          <h1 className="text-xl font-bold text-gray-700 mb-5"><u>Quick Links</u></h1>
          <ul className="flex flex-col gap-2">
            <Link
              className="cursor-pointer hover:text-black text-red-700"
              to="/"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer hover:text-black text-green-700"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="cursor-pointer hover:text-black text-gray-700"
              to="/about"
            >
              About
            </Link>
            <Link
              className="cursor-pointer hover:text-black text-pink-700"
              to="/contact"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5"><u>Categories</u></h1>
          <ul className="flex flex-col gap-2">
            <Link className="cursor-pointer hover:text-black text-blue-700">
              Web Development
            </Link>
            <Link className="cursor-pointer hover:text-black text-green-400">
              Machine Learning
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-500">
              Ethical Hacking Development
            </Link>
            <Link className="cursor-pointer hover:text-black text-red-400">
              Block Chain Development
            </Link>
          </ul>
        </div>
      </div>
      <hr className="h-0.5 text-gray-600 bg-gray-700 w-full" />
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 py-6">
        <div className="flex  gap-2 items-center justify-center">
          <img src={assets.logo} alt="" />
          <p>
            Code<span className="font-bold text-xl">Canvas</span>{" "}
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-3">
          <li>Private Policy</li>
          <li>Terms and conditions</li>
          <li> copyright @2025</li>
        </ul>
      </div>
    </>
  );
};
export default Footer;
