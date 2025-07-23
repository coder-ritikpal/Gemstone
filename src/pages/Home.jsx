import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Showcase from '../components/Showcase';
import History from '../components/History';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    ScrollTrigger.refresh(); 
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a0a1f] via-[#0f172a] to-[#000000] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Showcase />
      <History />
      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
