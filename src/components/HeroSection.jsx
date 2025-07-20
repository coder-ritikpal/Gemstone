import React from "react";
import { useForm } from "react-hook-form";
import gemImage from "../assets/loading.png"; // Replace with your gem image

const HeroSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Birthdate:", data.birthdate);
    // You can use this date to reveal gemstone logic
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="md:w-1/2 w-full space-y-8">
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
              {...register("birthdate", { required: "Birth date is required" })}
              className="w-full p-3 rounded bg-yellow-100 border border-yellow-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.birthdate && (
              <p className="text-red-800 text-sm mt-1">{errors.birthdate.message}</p>
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

      {/* Right: Glowing Gem Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={gemImage}
          alt="Lucky Gem"
          className="w-[350px] h-auto drop-shadow-[0_0_40px_rgba(255,255,0,0.7)]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
