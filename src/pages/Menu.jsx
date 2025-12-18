import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// HERO BACKGROUND
import heroBg from "../assets/durgathali1.jpeg";

// THALI CAROUSEL IMAGES
import thali1 from "../assets/durgathali1.jpeg";
import thali2 from "../assets/splThali.jpg";
import thali3 from "../assets/veg_thali.jpg";
import thali4 from "../assets/Thali2.jpeg";
import thali5 from "../assets/thali3.jpg";

export default function Menu() {
  const thaliImages = [thali1, thali2, thali3, thali4, thali5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % thaliImages.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="menu-page bg-[#FFF8F1]">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center text-white bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(
            rgba(92, 26, 18, 0.85),
            rgba(122, 38, 26, 0.85)
          ), url(${heroBg})`,
        }}
      >
        {/* Floating blobs */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFDAB3]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFDAB3]/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-sm md:text-lg tracking-widest uppercase text-[#FFDAB3] mb-4"
          >
            ९१ वर्षांची परंपरा
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold leading-tight max-w-5xl mx-auto"
          >
            <span className="block text-white">Durga खानावळ</span>
            <span className="block text-[#FFDAB3] mt-6 md:mt-8">
              आमचे खास मेनू
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-[#FFDAB3] rounded-full mx-auto mt-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 text-base md:text-lg text-[#FFE9D4]"
          >
            पारंपरिक • शुद्ध • घरगुती स्वाद
          </motion.p>
        </div>
      </section>

      {/* ================= MENU CONTENT ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B2E1F]">
            ⭐ आमची खासियत — पारंपरिक महाराष्ट्रीयन थाळी
          </h2>

          <div className="bg-[#FFF3E8] p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3">१. महाराष्ट्रीयन थाळी</h3>
            <ul className="list-disc list-inside text-[#555] space-y-1">
              <li>पोळी</li>
              <li>भात</li>
              <li>३ कोरड्या भाज्या</li>
              <li>२ रस्सा / भाजी</li>
              <li>मिर्ची, लिंबू</li>
              <li>लोणचे, पापड, कोशिंबीर</li>
              <li>ताक / दही / गोड पदार्थ</li>
            </ul>
          </div>

          <div className="bg-[#FFF3E8] p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3">
              २. खास ‘द्रौपदी थाळी’
            </h3>
            <ul className="list-disc list-inside text-[#555] space-y-1">
              <li>५–७ विविध पदार्थ</li>
              <li>अत्यंत लोकप्रिय</li>
              <li>फक्त शाकाहारी</li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT – IMAGE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <motion.img
              key={currentIndex}
              src={thaliImages[currentIndex]}
              alt={`Thali ${currentIndex + 1}`}
              className="w-full h-auto object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= BOTTOM ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center py-16 space-y-6 px-6"
      >
        <p className="text-xl md:text-2xl text-[#8B2E1F] font-medium">
          आम्ही १९३४ पासून पारंपरिक, घरगुती आणि प्रेमाने बनवलेले जेवण देत आहोत.
        </p>
        <p className="text-xl md:text-2xl text-[#8B2E1F] font-medium">
          दररोज ताजे आणि शुद्ध ‘घरगुती जेवण’.
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-[#A33A2A] animate-pulse">
          आपण नक्की भेट द्या — आपले हार्दिक स्वागत आहे!
        </h3>
      </motion.section>

      
    </div>
  );
}
