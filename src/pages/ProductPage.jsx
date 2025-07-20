// src/pages/ProductPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import yellowSapphire from "../assets/productImages/yellow-sapphire.png";
import blueSapphire from "../assets/productImages/blue-sapphire.png";
import emerald from "../assets/productImages/emerald.png";
import ruby from "../assets/productImages/ruby.png";
import opal from "../assets/productImages/opal.png";
import pearl from "../assets/productImages/pearl.png";
import redCoral from "../assets/productImages/red-coral.png";
import hessonite from "../assets/productImages/hessonite.png";

const gemstones = [
  {
    name: "Yellow Sapphire",
    description: "Divine Luck, Prosperity, Blissful Matrimony",
    image: yellowSapphire,
  },
  {
    name: "Blue Sapphire",
    description: "Great Fame, Discipline, Reverses Misfortunes",
    image: blueSapphire,
  },
  {
    name: "Emerald",
    description: "Vocal Charm, Creativity, Success in Business",
    image: emerald,
  },
  {
    name: "Ruby",
    description: "Great Health, Will Power, Fame & Reputation",
    image: ruby,
  },
  {
    name: "Opal",
    description: "Luxury, Physical Beauty, Romantic Bliss",
    image: opal,
  },
  {
    name: "Pearl",
    description: "Mental Strength, Fortune, Peace & Fulfillment",
    image: pearl,
  },
  {
    name: "Red Coral",
    description: "Averts Mishaps, Courage, Overall Strength",
    image: redCoral,
  },
  {
    name: "Hessonite",
    description: "Pacifies Rahu, Popularity, Speculative Success",
    image: hessonite,
  },
];

const handleAddToCart = (gemName, e) => {
  toast.success(`${gemName} added to cart!`);

  const burst = document.createElement("div");
  burst.className = "fixed w-6 h-6 bg-green-400 rounded-full pointer-events-none z-50";
  document.body.appendChild(burst);

  const { clientX, clientY } = e;
  burst.style.left = `${clientX}px`;
  burst.style.top = `${clientY}px`;

  gsap.fromTo(
    burst,
    { scale: 0, opacity: 1 },
    {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => burst.remove(),
    }
  );
};

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
        {/* Intro */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-2">
            Buy Gemstones Online
          </h1>
          <p className="uppercase font-semibold text-gray-400 mb-2">
            Products of Trusted Excellence
          </p>
          <p className="text-gray-300">
            Gemstones are natural crystals that hold cosmic energies and healing
            powers. Worn for both aesthetic beauty and astrological significance,
            these stones are believed to attract positivity, peace, prosperity,
            and personal transformation.
          </p>
        </div>

        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center text-green-400 mb-8">
          Exclusive Gemstones..
        </h1>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
          {gemstones.map((gem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1f1f1f] to-[#000000] rounded-2xl p-6 shadow-inner border border-gray-700 hover:shadow-[0_0_20px_#00ff99] transition-all duration-300"
            >
              {/* Image with Shine + Glow */}
              <div className="relative group w-24 h-24 mx-auto mb-4">
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_white]"
                  onMouseEnter={(e) => {
                    const shine = e.currentTarget.nextSibling;
                    gsap.fromTo(
                      shine,
                      { left: "-100%", opacity: 0 },
                      {
                        left: "100%",
                        opacity: 0.15,
                        duration: 0.7,
                        ease: "power2.out",
                      }
                    );
                  }}
                />
                {/* Shine */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                  <div
                    className="w-1/3 h-full bg-white blur-xl opacity-10"
                    style={{ position: "absolute", top: 0 }}
                  ></div>
                </div>
              </div>

              {/* Name & Desc */}
              <h3 className="text-lg font-bold text-green-400 mb-1 text-center">
                {gem.name}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-4">
                {gem.description}
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => handleAddToCart(gem.name, e)}
                className="block mx-auto px-4 py-2 rounded-full text-sm font-semibold text-black bg-green-400 hover:bg-green-300 transition-all duration-300 shadow-[0_0_12px_#00ff99]"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
