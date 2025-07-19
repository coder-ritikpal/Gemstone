import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#0f172a] to-[#000000] text-white">
      <Navbar />
      {/* Add other sections below this */}
      <div className="px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-pink-400 mb-4">Welcome to Lucky Gems</h1>
        <p className="text-lg text-gray-300">
          Discover rare gemstones, crafted with elegance and brilliance.
        </p>
      </div>
    </div>
  );
};

export default Home;
