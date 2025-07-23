// src/pages/ProductPage.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const productGridRef = useRef(null);

  useEffect(() => {
    if (productGridRef.current) {
      gsap.fromTo(
        productGridRef.current.children,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productGridRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar />
      <main className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-x-hidden">
        <section className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Explore Our Gemstones
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover hand-selected precious stones with astrological significance and healing properties.
          </p>
        </section>

        <section
          ref={productGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-4 shadow-lg hover:ring-2 hover:ring-red-500 transition duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-44 object-contain mb-3 rounded-md cursor-pointer"
                style={{ filter: "drop-shadow(0 0 18px #00ffff)" }} // Neon blue glow
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h2 className="text-lg font-semibold text-red-400 mb-1">
                {product.name}
              </h2>
              <p className="text-sm text-gray-300 mb-1">
                <span className="text-yellow-400">Also Known As:</span> {product.knownAs}
              </p>
              <p className="text-sm text-gray-400">Carat: {product.carat}</p>
              <p className="text-sm text-gray-400 mb-1">Origin: {product.origin}</p>
              <p className="text-sm text-blue-300 italic mb-2">
                {product.benefit}
              </p>
              <p className="text-green-400 font-semibold text-base">
                {product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded transition text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
