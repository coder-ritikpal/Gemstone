import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    password: "",
  });

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
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  setTimeout(() => {
    navigate("/"); 
  }, 2000); 
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="bg-[#1e293b] p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-md transition-all">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Create an Account</h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {[
            { id: "fullName", label: "Full Name", type: "text" },
            { id: "dob", label: "Date of Birth", type: "date" },
            { id: "email", label: "Email", type: "email" },
            { id: "password", label: "Password", type: "password" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-1 text-sm font-medium">
                {label}
              </label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold py-2 rounded-full"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-gray-400">
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
  );
};

export default SignupPage;
