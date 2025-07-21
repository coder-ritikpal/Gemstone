import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import yellowSapphire from "../assets/productImages/yellow-sapphire.png";
import blueSapphire from "../assets/productImages/blue-sapphire.png";
import emerald from "../assets/productImages/emerald.png";
import ruby from "../assets/productImages/ruby.png";
import opal from "../assets/productImages/opal.png";
import pearl from "../assets/productImages/pearl.png";
import redCoral from "../assets/productImages/red-coral.png";
import hessonite from "../assets/productImages/hessonite.png";

gsap.registerPlugin(ScrollTrigger);

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

const Showcase = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="px-6 py-16 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-3xl font-bold text-center text-green-400 mb-10">
        Exclusive Gemstones...
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {gemstones.map((gem, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#000000] rounded-2xl p-6 shadow-inner border border-gray-700 hover:shadow-[0_0_20px_#00ff99] transition-all duration-300"
          >
            <div className="relative group w-24 h-24 mx-auto mb-4">
              <img
                src={gem.image}
                alt={gem.name}
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_white]"
              />
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div
                  className="w-1/3 h-full bg-white blur-xl opacity-10"
                  style={{ position: "absolute", top: 0 }}
                ></div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-green-400 mb-1 text-center">
              {gem.name}
            </h3>
            <p className="text-sm text-gray-400 text-center">
              {gem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
