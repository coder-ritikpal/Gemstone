import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { gsap } from "gsap";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);

  // Refs for animation
  const logoRef = useRef(null);
  const brandRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5, x: -50 },
      { opacity: 1, scale: 1, x: 0, duration: 1 }
    )
      .fromTo(
        brandRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        iconsRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.6"
      );
  }, []);

  return (
    <nav className="bg-gradient-to-r from-green-950 via-pink-900 to-blue-900 text-white px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Lucky Gems Logo"
            ref={logoRef}
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
          <span
            ref={brandRef}
            className="text-2xl font-[Algerian] sm:text-3xl font-extrabold tracking-wider text-yellow-400"
          >
            Lucky Gems
          </span>
        </div>

        {/* Search */}
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
            ref={(el) => (iconsRef.current[0] = el)}
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-cyan-400 transition"
          >
            <FaSearch />
          </button>

          <Link
            ref={(el) => (iconsRef.current[1] = el)}
            to="/login"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaUser />
            <span className="hidden sm:inline">Account</span>
          </Link>

          <Link
            ref={(el) => (iconsRef.current[2] = el)}
            to="/products"
            className="hover:text-lime-300 font-medium hidden sm:inline"
          >
            Products
          </Link>

          <Link
            ref={(el) => (iconsRef.current[3] = el)}
            to="/about"
            className="block hover:text-lime-300 transition"
            onClick={() => setIsMobileMenuMenuOpen(false)}
          >
            AboutUs
          </Link>

          <Link
            ref={(el) => (iconsRef.current[4] = el)}
            to="/cart"
            className="relative hover:text-yellow-400 transition"
          >
            <FaShoppingCart />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-xl focus:outline-none"
          onClick={() => setIsMobileMenuMenuOpen(!isMobileMenuOpen)}
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
            onClick={() => setIsMobileMenuMenuOpen(false)}
          >
            Account
          </Link>

          <Link
            to="/products"
            className="block hover:text-lime-300 transition"
            onClick={() => setIsMobileMenuMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            to="/about"
            className="block hover:text-lime-300 transition"
            onClick={() => setIsMobileMenuMenuOpen(false)}
          >
            AboutUs
          </Link>

          <Link
            to="/cart"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsMobileMenuMenuOpen(false)}
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
