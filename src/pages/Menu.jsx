import React, { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageContext } from "../context/LanguageContext";

// HERO BACKGROUND
import heroBg from "../assets/durgathali1.jpeg";

// THALI CAROUSEL IMAGES
import thali1 from "../assets/durgathali1.jpeg";
import thali2 from "../assets/splThali.jpg";
import thali3 from "../assets/veg_thali.jpg";
import thali4 from "../assets/Thali2.jpeg";
import thali5 from "../assets/thali3.jpg";

export default function Menu() {
  const { language } = useContext(LanguageContext); // Language support

  const thaliImages = [thali1, thali2, thali3, thali4, thali5];
  const thaliCaptions = [
    { en: "Traditional Maharashtrian Thali", mr: "पारंपरिक महाराष्ट्रीयन थाळी", hi: "पारंपरिक महाराष्ट्रीयन थाली" },
    { en: "Special ‘Draupadi Thali’", mr: "खास ‘द्रौपदी थाळी’", hi: "खास ‘द्रौपदी थाली’" },
    { en: "Vegetarian Delight", mr: "शाकाहारी आनंद", hi: "शाकाहारी आनंद" },
    { en: "Fresh Home-style Thali", mr: "ताजे घरगुती थाळी", hi: "ताजा घरगुती थाली" },
    { en: "Chef’s Special Selection", mr: "संपूर्ण खास निवड", hi: "संपूर्ण खास चयन" },
  ];

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
    <div className="menu-page bg-[#FFF8F1] overflow-x-hidden">
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
          className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#FFDAB3]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#FFDAB3]/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xs sm:text-sm md:text-lg tracking-widest uppercase text-[#FFDAB3] mb-4"
          >
            {language === "en" ? "91 Years of Tradition" : language === "mr" ? "९१ वर्षांची परंपरा" : "91 वर्षों की परंपरा"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-serif font-bold leading-tight max-w-4xl sm:max-w-5xl mx-auto"
          >
            <span className="block text-white">Durga खानावळ</span>
            <span className="block text-[#FFDAB3] mt-4 sm:mt-6 md:mt-8">
              {language === "en" ? "Our Special Menu" : language === "mr" ? "आमचे खास मेनू" : "हमारा खास मेनू"}
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-[#FFDAB3] rounded-full mx-auto mt-6 sm:mt-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#FFE9D4]"
          >
            {language === "en" ? "Traditional • Pure • Homemade Flavors" : language === "mr" ? "पारंपरिक • शुद्ध • घरगुती स्वाद" : "पारंपरिक • शुद्ध • घर का बना स्वाद"}
          </motion.p>
        </div>
      </section>

      {/* ================= MENU CONTENT ================= */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-0 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8 sm:space-y-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B2E1F]">
            {language === "en" ? "⭐ Our Specialty — Traditional Maharashtrian Thali" : language === "mr" ? "⭐ आमची खासियत — पारंपरिक महाराष्ट्रीयन थाळी" : "⭐ हमारी खासियत — पारंपरिक महाराष्ट्रीयन थाली"}
          </h2>

          <div className="bg-[#FFF3E8] p-4 sm:p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {language === "en" ? "1. Maharashtrian Thali" : language === "mr" ? "१. महाराष्ट्रीयन थाळी" : "1. महाराष्ट्रीयन थाली"}
            </h3>
            <ul className="list-disc list-inside text-[#555] space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>{language === "en" ? "Chapati" : language === "mr" ? "पोळी" : "चपाती"}</li>
              <li>{language === "en" ? "Rice" : language === "mr" ? "भात" : "चावल"}</li>
              <li>{language === "en" ? "3 Dry Vegetables" : language === "mr" ? "३ कोरड्या भाज्या" : "3 सूखी सब्ज़ियाँ"}</li>
              <li>{language === "en" ? "2 Curries / Bhaji" : language === "mr" ? "२ रस्सा / भाजी" : "2 करी / भाजी"}</li>
              <li>{language === "en" ? "Chili, Lemon" : language === "mr" ? "मिर्ची, लिंबू" : "मिर्च, नींबू"}</li>
              <li>{language === "en" ? "Pickle, Papad, Salad" : language === "mr" ? "लोणचे, पापड, कोशिंबीर" : "अचार, पापड़, सलाद"}</li>
              <li>{language === "en" ? "Curd / Sweet Dish" : language === "mr" ? "ताक / दही / गोड पदार्थ" : "दही / मिठाई"}</li>
            </ul>
          </div>

          <div className="bg-[#FFF3E8] p-4 sm:p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {language === "en" ? "2. Special ‘Draupadi Thali’" : language === "mr" ? "२. खास ‘द्रौपदी थाळी’" : "2. खास ‘द्रौपदी थाली’"}
            </h3>
            <ul className="list-disc list-inside text-[#555] space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>{language === "en" ? "5–7 Varieties of Dishes" : language === "mr" ? "५–७ विविध पदार्थ" : "5–7 तरह के व्यंजन"}</li>
              <li>{language === "en" ? "Highly Popular" : language === "mr" ? "अत्यंत लोकप्रिय" : "बहुत लोकप्रिय"}</li>
              <li>{language === "en" ? "Vegetarian Only" : language === "mr" ? "फक्त शाकाहारी" : "सिर्फ शाकाहारी"}</li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT – IMAGE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-10 md:mt-0 relative"
        >
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-full rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <motion.img
              key={currentIndex}
              src={thaliImages[currentIndex]}
              alt={`Thali ${currentIndex + 1}`}
              className="w-full h-auto object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute bottom-4 left-4 bg-[#8B2E1F]/80 text-[#FFDAB3] px-3 py-1 rounded-full font-semibold shadow-md text-sm md:text-base">
              {thaliCaptions[currentIndex][language]}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= BOTTOM ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center py-16 sm:py-20 space-y-4 sm:space-y-6 px-4 sm:px-6"
      >
        <p className="text-lg sm:text-xl md:text-2xl text-[#8B2E1F] font-medium">
          {language === "en"
            ? "Since 1934, we serve traditional, homemade meals made with love."
            : language === "mr"
            ? "आम्ही १९३४ पासून पारंपरिक, घरगुती आणि प्रेमाने बनवलेले जेवण देत आहोत."
            : "1934 से हम पारंपरिक, घर का बना और प्यार से तैयार भोजन प्रदान कर रहे हैं।"}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-[#8B2E1F] font-medium">
          {language === "en"
            ? "Fresh and pure ‘home-style meals’ every day."
            : language === "mr"
            ? "दररोज ताजे आणि शुद्ध ‘घरगुती जेवण’."
            : "हर दिन ताजा और शुद्ध 'घर का बना भोजन'।"}
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A33A2A] animate-pulse">
          {language === "en"
            ? "Do visit us — You are heartily welcome!"
            : language === "mr"
            ? "आपण नक्की भेट द्या — आपले हार्दिक स्वागत आहे!"
            : "आपका स्वागत है — कृपया हमें अवश्य देखें!"}
        </h3>
      </motion.section>

     
    </div>
  );
}
