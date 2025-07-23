import React, { useRef, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { MdLocalShipping, MdReplay } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const instaRef = useRef(null);
  const fbRef = useRef(null);
  const twitterRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const animateIconHover = (ref) => {
      const icon = ref.current;
      const circle = icon.querySelector(".hover-circle");
      const sparkle = icon.querySelector(".sparkle");

      const sparkleTween = gsap.to(sparkle, {
        scale: 1.3,
        opacity: 1,
        x: 4,
        y: -4,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        paused: true,
      });

      icon.addEventListener("mouseenter", () => {
        gsap.fromTo(
          circle,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1.4,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
        sparkleTween.play();
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to([circle, sparkle], {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
        sparkleTween.pause(0);
      });
    };

    [instaRef, fbRef, twitterRef].forEach(animateIconHover);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        once: true,
      },
      defaults: { duration: 0.6, ease: "power2.out" },
    });

    tl.fromTo("footer h2", { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("footer p", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, "-=0.3")
      .fromTo(".icon-wrapper", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.15 }, "-=0.5")
      .fromTo(".grid > div", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, "-=0.5")
      .fromTo("footer .text-center.text-gray-500", { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3");
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-10 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-yellow-400">Lucky Gemstones</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Discover the cosmic power of gemstones. Crafted with elegance, worn with purpose.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-yellow-400 text-2xl relative">
            {[instaRef, fbRef, twitterRef].map((ref, i) => (
              <div
                key={i}
                ref={ref}
                className="relative icon-wrapper w-10 h-10 flex items-center justify-center cursor-pointer transition hover:scale-110"
              >
                {i === 0 && <FaInstagram />}
                {i === 1 && <FaFacebookF />}
                {i === 2 && <FaTwitter />}
                <span className="hover-circle absolute inset-0 border border-yellow-400 rounded-full opacity-0 scale-0 pointer-events-none transition-all duration-300"></span>
                <span className="sparkle absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0 pointer-events-none shadow-[0_0_6px_#facc15]"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center">
            <BiCertification className="text-3xl text-green-400 mb-2" />
            <p className="text-sm text-gray-300 font-medium">Lab Certified Gems</p>
          </div>
          <div className="flex flex-col items-center">
            <MdLocalShipping className="text-3xl text-green-400 mb-2" />
            <p className="text-sm text-gray-300 font-medium">Cash on Delivery Available</p>
          </div>
          <div className="flex flex-col items-center">
            <MdReplay className="text-3xl text-green-400 mb-2" />
            <p className="text-sm text-gray-300 font-medium">7-Day Easy Returns</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Lucky Gemstones. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
