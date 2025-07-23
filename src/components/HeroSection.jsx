import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gemImage from "../assets/loading.png";
import gemsImage from "../assets/gems.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgRef = useRef(null);
  const formRef = useRef(null);
  const aboutRef = useRef(null);

  const onSubmit = (data) => {
    console.log("User Birthdate:", data.birthdate);
  };

  useEffect(() => {
    // Image scroll-based rotation
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Fade-in form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Fade-in about section
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Form */}
        <div className="md:w-1/2 w-full space-y-8" ref={formRef}>
          <div>
            <h1 className="text-4xl font-bold text-pink-400 mb-2 drop-shadow-md">
              Welcome to Lucky Gemstones
            </h1>
            <p className="text-gray-300 text-sm">
              Discover rare gemstones, crafted with elegance and brilliance.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gradient-to-br from-green-800 via-green-500 to-green-300 p-8 rounded-xl shadow-2xl space-y-6 border border-yellow-400"
          >
            <h2 className="text-3xl font-bold text-black drop-shadow">
              Find Your Birth Gemstone
            </h2>
            <p className="text-black text-sm">
              Enter your birth date to discover your lucky gem.
            </p>

            <div>
              <label className="block mb-2 text-sm text-black font-semibold">
                Birth Date
              </label>
              <input
                type="date"
                {...register("birthdate", {
                  required: "Birth date is required",
                })}
                className="w-full p-3 rounded bg-yellow-100 border border-yellow-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.birthdate && (
                <p className="text-red-800 text-sm mt-1">
                  {errors.birthdate.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-yellow-400 font-bold px-5 py-2 rounded transition duration-200"
            >
              Reveal My Gem
            </button>
          </form>
        </div>

        {/* Right: Rotating Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            ref={imgRef}
            src={gemImage}
            alt="Lucky Gem"
            className="w-[350px] h-auto rounded-xl"
            style={{
              filter: "drop-shadow(0 0 25px #facc15)", // Yellow glow
            }}
          />

        </div>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12"
      >
        {/* Left Image */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src={gemsImage}
            alt="Gemstone Info"
            className="w-[300px] h-auto rounded-xl"
            style={{
              filter: "drop-shadow(0 0 30px #00f0ff)", // Yellow glow
            }}
          />

        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full space-y-5">
          <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-md">
            What Are Gemstones?
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Gemstones are rare minerals or organic materials, valued for their
            beauty, durability, and rarity. They are cut and polished for use in
            jewelry, astrology, and even healing. Each gemstone holds a unique
            symbolism and significance based on birth dates and zodiac signs.
            Today, gemstones are used for astronomical as well as ornamental
            purposes. The beautiful cut, shine, and shapes attract a lot of
            people from all over the world.
          </p>
          <p className="text-gray-400 text-xs italic">
            Learn more about your birthstone and its hidden powers today.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
