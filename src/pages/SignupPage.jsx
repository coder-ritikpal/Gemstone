import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignupPage = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const fieldsRef = useRef([]);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    password: "",
  });

  // GSAP entry animation
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      fieldsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3,
      }
    );
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));

    toast.success("🎉 Account created successfully!", {
      position: "top-right",
      autoClose: 2500,
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
        <div
          ref={cardRef}
          className="bg-[#1e293b] p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-md"
        >
          <h2
            ref={(el) => (fieldsRef.current[0] = el)}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center"
          >
            Create an Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-5">
            {[
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "dob", label: "Date of Birth", type: "date" },
              { id: "email", label: "Email", type: "email" },
              { id: "password", label: "Password", type: "password" },
            ].map(({ id, label, type }, idx) => (
              <div key={id} ref={(el) => (fieldsRef.current[idx + 1] = el)}>
                <label htmlFor={id} className="block mb-1 text-sm font-medium">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                />
              </div>
            ))}

            <button
              ref={(el) => (fieldsRef.current[5] = el)}
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold py-2 rounded-full"
            >
              Sign Up
            </button>
          </form>

          <p
            ref={(el) => (fieldsRef.current[6] = el)}
            className="text-sm mt-5 text-center text-gray-400"
          >
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-yellow-400 underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignupPage;
