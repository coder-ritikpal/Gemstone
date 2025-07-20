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

      // Fade in the wrapper
      tl.fromTo(
        wrapperRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Show text and logo
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );

      // Logo pulsing glow
      gsap.to(logoRef.current, {
        scale: 1.08,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Tear after 3s
      tl.to({}, { duration: 3 }).add(() => {
        const tearTL = gsap.timeline({ onComplete });

        // Fade out text + logo before tear
        tearTL.to([textRef.current, logoRef.current], {
          opacity: 0,
          duration: 0.3,
        });

        // Setup tear panels
        tearTL.set([leftPanelRef.current, rightPanelRef.current], {
          scaleX: 0,
          transformOrigin: "center",
        });

        // Tear out from center with full screen coverage
        tearTL.to(
          leftPanelRef.current,
          {
            scaleX: 1,
            x: "-100vw",
            duration: 1,
            ease: "power4.inOut",
          },
          0
        );
        tearTL.to(
          rightPanelRef.current,
          {
            scaleX: 1,
            x: "100vw",
            duration: 1,
            ease: "power4.inOut",
          },
          0
        );

        // Fade out wrapper
        tearTL.to(wrapperRef.current, { opacity: 0, duration: 0.4 }, "-=0.3");
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      <div ref={wrapperRef} className="relative w-full h-full">
        {/* Tear LEFT PANEL */}
        <div
          ref={leftPanelRef}
          className="absolute top-0 bottom-0 left-1/2 w-1/2 z-40 bg-cover bg-center blur-sm"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/d6/94/78/d694780529794bba05dec61842cd8895.jpg')",
          }}
        ></div>

        {/* Tear RIGHT PANEL */}
        <div
          ref={rightPanelRef}
          className="absolute top-0 bottom-0 right-1/2 w-1/2 z-40 bg-cover bg-center blur-sm"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/d6/94/78/d694780529794bba05dec61842cd8895.jpg')",
          }}
        ></div>

        {/* Centered Logo + Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
          <img
            ref={logoRef}
            src={logo}
            alt="Lucky Gems Logo"
            className="w-64 h-64 object-contain mb-6"
            style={{
              filter:
                "drop-shadow(0 0 50px rgba(255, 255, 0, 1)) drop-shadow(0 0 80px rgba(255, 255, 0, 1))",
            }}
          />
          <h2
            ref={textRef}
            className="text-3xl text-white font-semibold tracking-wide drop-shadow-md"
          >
            Loading <span className="text-yellow-400">Lucky Gems</span>...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
