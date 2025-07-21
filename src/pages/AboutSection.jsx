import React, { useEffect, useRef } from "react";
import {
  FaCertificate,
  FaUndo,
  FaGlobe,
  FaGem,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaUserShield,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FaCertificate />,
    title: "Certified Gemstones",
    description:
      "Certified by authorized gem labs, ensuring authenticity and top quality.",
  },
  {
    icon: <FaUndo />,
    title: "Easy Returns",
    description:
      "10-day return & refund policy for complete customer satisfaction.",
  },
  {
    icon: <FaGlobe />,
    title: "Worldwide Shipping",
    description:
      "Free global delivery on orders above INR 1,50,000 with trusted carriers.",
  },
  {
    icon: <FaGem />,
    title: "Variety of Gems",
    description:
      "Over 10,000 certified gems in every cut, shape, and category.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Genuine & Trustworthy",
    description:
      "Fair trade practices, ethical sourcing, and honest pricing.",
  },
  {
    icon: <FaBolt />,
    title: "Energized Stones",
    description:
      "Vedic energization rituals done by in-house astrologers.",
  },
  {
    icon: <FaCheckCircle />,
    title: "100% Satisfaction",
    description:
      "Products & services built around spiritual and quality assurance.",
  },
  {
    icon: <FaUserShield />,
    title: "Secure Checkout",
    description:
      "SSL-secured, encrypted, and safe payment gateways for peace of mind.",
  },
];

const AboutSection = () => {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP Marquee Scroll
    const contentWidth = marqueeContentRef.current.scrollWidth / 2;

    const marqueeTween = gsap.to(marqueeContentRef.current, {
      x: `-${contentWidth}px`,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    // Optional: Pause on hover
    const el = marqueeContentRef.current;
    const pause = () => gsap.to(marqueeTween, { timeScale: 0 });
    const resume = () => gsap.to(marqueeTween, { timeScale: 1 });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    // Animate grid cards
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      marqueeTween.kill();
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 px-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
              Company Profile
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              Lucky Gemstones is a trusted destination for natural certified gemstones.
              We provide a wide variety of lab-tested, astrologically significant gems
              backed by authentic Vedic rituals.
            </p>
          </div>

          {/* GSAP Marquee */}
          <div
            className="overflow-hidden mb-14 scrollbar-hide"
            ref={marqueeRef}
          >
            <div className="flex gap-6 w-max" ref={marqueeContentRef}>
              {[...features, ...features].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center w-28 sm:w-36 bg-gray-800 rounded-lg p-4 hover:shadow-[0_0_20px_#facc15] transition duration-300"
                >
                  <div className="text-yellow-400 text-2xl sm:text-3xl mb-1">
                    {feature.icon}
                  </div>
                  <p className="text-[11px] sm:text-xs text-center text-white font-semibold">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 opacity-0"
              >
                <h3 className="text-lg font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Highlight */}
          <div className="text-center mt-16 px-2">
            <h2 className="text-2xl font-bold text-yellow-400 mb-1">
              1 LAKH+ Happy Customers
            </h2>
            <p className="text-gray-400 text-sm">
              Loved and trusted globally by gem seekers and astrologers alike.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutSection;
