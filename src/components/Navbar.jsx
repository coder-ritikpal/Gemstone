import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-800 via-pink-700 to-blue-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Image + Brand Text */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Lucky Gems Logo"
            className="w-10 h-10 object-contain rounded-full shadow-md"
          />
          <span className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">
            Lucky Gems
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search gemstones..."
              className="w-full px-4 py-2 pl-10 rounded-full bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300" />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="flex items-center space-x-2 hover:text-pink-400 transition">
  <FaUser />
  <span className="hidden sm:inline">Account</span>
</Link>

          <Link
            to="/cart"
            className="relative hover:text-yellow-400 transition"
          >
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
