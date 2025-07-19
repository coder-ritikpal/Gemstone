import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import loadingGems from "../assets/loading.png";
import centerGem from "../assets/center-diamond.png";

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.to(imgRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    gsap.to(imgRef.current, {
      filter: "drop-shadow(0 0 25px rgba(0, 255, 255, 0.7))",
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "power2.inOut",
      }
    );

    gsap.to(centerRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    gsap.to(centerRef.current, {
      filter: "drop-shadow(0 0 15px rgba(255,0,0,0.8))",
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    const timeout = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete && onComplete();
        },
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
      gsap.killTweensOf([
        imgRef.current,
        textRef.current,
        headingRef.current,
        centerRef.current,
        containerRef.current,
      ]);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#030617] via-[#0f1a2f] to-[#061325] relative overflow-hidden"
    >
      <h1
        ref={headingRef}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 mb-6 text-center drop-shadow-xl"
      >
        Lucky Gems
      </h1>

      {/* Gem Container */}
      <div className="relative w-54 h-54 flex items-center justify-center">
        <img
          ref={imgRef}
          src={loadingGems}
          alt="Loading Gems"
          className="w-full h-full object-contain"
        />
        <img
          ref={centerRef}
          src={centerGem}
          alt="Center Gem"
          className="absolute w-16 h-16 object-contain"
        />
      </div>

      <p
        ref={textRef}
        className="mt-6 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
      >
        Loading Lucky Gems...
      </p>
    </div>
  );
};

export default Loading;
