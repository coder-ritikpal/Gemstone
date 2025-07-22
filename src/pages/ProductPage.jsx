// src/pages/ProductPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Import addToCart from context

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ Add actual product to cart
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar />
      <div className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Explore Our Gemstones
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover hand-selected precious stones with astrological
            significance and healing properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-4 shadow-md transition duration-300 hover:ring-2 hover:ring-red-500"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-44 object-contain mb-3 rounded-md cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h2 className="text-lg font-semibold text-red-400 mb-1">
                {product.name}
              </h2>
              <p className="text-gray-400 text-sm">Carat: {product.carat}</p>
              <p className="text-gray-400 text-sm">SKU: {product.sku}</p>
              <p className="text-green-400 font-semibold text-base mt-1">
                {product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded transition text-sm"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
