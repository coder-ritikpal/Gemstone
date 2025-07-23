import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";

const Loading = ({ onComplete }) => {
  const wrapperRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        wrapperRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" }
      );

      tl.fromTo(
        [logoRef.current, textRef.current],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.6"
      );

      gsap.to(logoRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 0.8,
      });

      tl.to({}, { duration: 2 }).add(() => {
        const tearTL = gsap.timeline({ onComplete });

        tearTL.to([logoRef.current, textRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power1.inOut",
        });

        tearTL.set([leftPanelRef.current, rightPanelRef.current], {
          scaleX: 0,
          transformOrigin: "center",
        });

        tearTL.to(
          leftPanelRef.current,
          {
            scaleX: 1,
            x: "-100vw",
            duration: 0.8,
            ease: "power4.inOut",
          },
          0
        );
        tearTL.to(
          rightPanelRef.current,
          {
            scaleX: 1,
            x: "100vw",
            duration: 0.8,
            ease: "power4.inOut",
          },
          0
        );

        tearTL.to(wrapperRef.current, { opacity: 0, duration: 0.4 }, "-=0.3");
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      <div ref={wrapperRef} className="relative w-full h-full">
        <div
          ref={leftPanelRef}
          className="absolute top-0 bottom-0 left-1/2 w-1/2 z-40 bg-cover bg-center blur-sm"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/d6/94/78/d694780529794bba05dec61842cd8895.jpg')",
          }}
        />

        <div
          ref={rightPanelRef}
          className="absolute top-0 bottom-0 right-1/2 w-1/2 z-40 bg-cover bg-center blur-sm"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/d6/94/78/d694780529794bba05dec61842cd8895.jpg')",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center pointer-events-none px-4">
          <img
            ref={logoRef}
            src={logo}
            alt="Lucky Gems Logo"
            className="w-60 sm:w-72 md:w-80 object-contain mb-6"
            style={{
              filter:
                "drop-shadow(0 0 50px rgba(0, 200, 255, 1)) drop-shadow(0 0 80px rgba(0, 200, 255, 1))",
            }}
          />
          <h2
            ref={textRef}
            className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-widest drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]"
          >
            Loading <span className="text-yellow-400">Lucky Gems</span>...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
