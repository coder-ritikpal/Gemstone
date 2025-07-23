import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import blueSapphire from "../assets/productImages/blue-sapphire.png";
import yellowSapphire from "../assets/productImages/yellow-sapphire.png";
import emerald from "../assets/productImages/emerald.png";
import ruby from "../assets/productImages/ruby.png";
import opal from "../assets/productImages/opal.png";
import hessonite from "../assets/productImages/hessonite.png";

const productImages = [
  { src: blueSapphire, alt: "Blue Sapphire" },
  { src: yellowSapphire, alt: "Yellow Sapphire" },
  { src: emerald, alt: "Emerald" },
  { src: ruby, alt: "Ruby" },
  { src: opal, alt: "Opal" },
  { src: hessonite, alt: "Hessonite" },
];

const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".glow-img").forEach((img) =>
      gsap.to(img, {
        filter: "drop-shadow(0 0 25px rgba(0,174,255,0.8))",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      })
    );

    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        { xPercent: 0 },
        {
          xPercent: -100,
          ease: "none",
          duration: 20, // slower for smoother
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden bg-black relative pt-4 pb-10">
      <div
        ref={trackRef}
        className="flex items-center gap-10 px-4 sm:px-6 select-none transform-gpu antialiased will-change-transform"
      >
        {[...Array(3)].map((_, dup) => (
          <React.Fragment key={dup}>
            {productImages.map((img, i) => (
              <img
                key={`${dup}-${i}`}
                src={img.src}
                alt={img.alt}
                className="w-28 sm:w-36 md:w-40 h-auto brightness-125 glow-img"
                draggable={false}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
