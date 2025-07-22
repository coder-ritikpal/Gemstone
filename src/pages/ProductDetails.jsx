// src/pages/ProductDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ useCart hook inside component

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product); // ✅ Add actual product to cart
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-72 h-72 object-contain rounded-2xl border border-gray-700 shadow-lg bg-gradient-to-tr from-gray-800 via-gray-900 to-black p-4"
          />

          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold text-red-500">{product.name}</h2>
            <p className="text-lg text-gray-300">
              <span className="text-white font-medium">Carat:</span>{" "}
              {product.carat}
            </p>
            <p className="text-lg text-gray-300">
              <span className="text-white font-medium">SKU:</span>{" "}
              {product.sku}
            </p>
            <p className="text-lg text-gray-300">
              <span className="text-white font-medium">Origin:</span>{" "}
              {product.origin}
            </p>
            <p className="text-3xl text-green-400 font-bold mt-4">
              {product.price}
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-white font-medium transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(-1)}
                className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-2 rounded-md transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
