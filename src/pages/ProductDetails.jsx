import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { gsap } from "gsap";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (imageRef.current && contentRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
    }
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#0f172a] to-black text-white px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img
            ref={imageRef}
            src={product.img}
            alt={product.name}
            className="w-72 h-72 object-contain rounded-2xl p-4"
            style={{
              backgroundColor: "#000000",
              filter: "drop-shadow(0 0 20px #00ffff)", // Neon blue glow
            }}
          />

          <div
            ref={contentRef}
            className="flex-1 space-y-4 opacity-100 z-10"
          >
            <h2 className="text-4xl font-bold text-red-500">{product.name}</h2>

            {product.knownAs && (
              <p className="text-lg text-gray-300">
                <span className="text-white font-medium">Also Known As:</span>{" "}
                {product.knownAs}
              </p>
            )}

            <p className="text-lg text-gray-300">
              <span className="text-white font-medium">Carat:</span>{" "}
              {product.carat}
            </p>

            <p className="text-lg text-gray-300">
              <span className="text-white font-medium">Origin:</span>{" "}
              {product.origin}
            </p>

            {product.benefit && (
              <p className="text-blue-300 text-base italic">
                {product.benefit}
              </p>
            )}

            <p className="text-3xl text-green-400 font-bold mt-2">
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
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
