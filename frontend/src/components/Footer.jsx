import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-8">
        {/* Brand Information Column */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <img src={assets.logo} alt="CodeCanvas Logo" className="w-8 h-8" />
            <p className="text-xl font-bold text-gray-800">
              Code<span className="text-orange-600">Canvas</span>
            </p>
          </div>
          <p className="text-sm text-gray-600 max-w-sm">
            Where logic meets creativity. Explore professional programming guides, dev insights, and tech learning modules.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h1 className="text-lg font-bold text-gray-700 mb-4 underline underline-offset-4 decoration-orange-500">
            Quick Links
          </h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><Link className="hover:text-orange-600 transition-colors" to="/">Home</Link></li>
            <li><Link className="hover:text-orange-600 transition-colors" to="/blogs">Blogs</Link></li>
            <li><Link className="hover:text-orange-600 transition-colors" to="/about">About</Link></li>
            <li><Link className="hover:text-orange-600 transition-colors" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h1 className="text-lg font-bold text-gray-700 mb-4 underline underline-offset-4 decoration-orange-500">
            Categories
          </h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><Link className="hover:text-blue-600 transition-colors" to="/blogs?category=Web-Development">Web Development</Link></li>
            <li><Link className="hover:text-green-600 transition-colors" to="/blogs?category=Machine-Learning">Machine Learning</Link></li>
            <li><Link className="hover:text-purple-600 transition-colors" to="/blogs?category=Ethical-Hacking">Ethical Hacking</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/blogs?category=Blockchain">Blockchain Development</Link></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 w-full" />

      {/* Legal Banner Section */}
      <div className="bg-gray-200 py-4 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>&copy; {currentYear} CodeCanvas. All rights reserved.</p>
          <ul className="flex gap-4">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;