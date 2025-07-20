import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#0f172a] to-[#000000] text-white">
      <Navbar />
     <HeroSection/>
    </div>
  );
};

export default Home;
