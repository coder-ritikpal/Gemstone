// src/pages/ProductPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            What Are Gemstones?
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Gemstones are precious or semi-precious minerals admired for their
            beauty, rarity, and durability. Often used in jewelry and astrology,
            they are believed to carry metaphysical properties such as enhancing
            health, attracting good fortune, and promoting emotional well-being.
            Each gemstone is unique, associated with specific planetary energies,
            birth months, and astrological significance.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
