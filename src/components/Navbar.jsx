import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-950 via-pink-900 to-blue-900 text-white px-6  shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Lucky Gems Logo"
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
          <span className="text-2xl font-[Algerian] sm:text-3xl font-extrabold tracking-wider text-yellow-400">
            Lucky Gems
          </span>
        </div>

        {showSearch && (
          <div className="hidden sm:block flex-1 max-w-lg mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search gemstones..."
                className="w-full px-4 py-2 pl-10 rounded-full bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300" />
            </div>
          </div>
        )}

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-cyan-400 transition"
          >
            <FaSearch />
          </button>

          <Link
            to="/login"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaUser />
            <span className="hidden sm:inline">Account</span>
          </Link>

          <Link
            to="/products"
            className="hover:text-lime-300 font-medium hidden sm:inline"
          >
            Products
          </Link>

           <Link
            to="/about"
            className="block hover:text-lime-300 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AboutUs
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-yellow-400 transition"
          >
            <FaShoppingCart />
          </Link>

          

          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-4 space-y-4 text-center">
          {showSearch && (
            <div className="px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gemstones..."
                  className="w-full px-4 py-2 pl-10 rounded-full bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300" />
              </div>
            </div>
          )}

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-cyan-400 transition"
          >
            Search
          </button>

          <Link
            to="/login"
            className="block hover:text-pink-400 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Account
          </Link>

          <Link
            to="/products"
            className="block hover:text-lime-300 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block hover:text-lime-300 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AboutUs
          </Link>
          <Link
            to="/cart"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
