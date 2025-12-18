// src/pages/Home.jsx
import React, { useState, useEffect } from "react"; // ✅ Import hooks

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import Hero from "../assets/hero.jpeg";
import DurgaThali from "../assets/durgathali1.jpeg";
import { UtensilsCrossed, Leaf, IndianRupee } from "lucide-react";
import durga1 from "../assets/durga1.jpg";
import durga2 from "../assets/durga2.jpg";
import durga3 from "../assets/durga3.jpg";
import khanavalthali from "../assets/khanavalthali.jpg";
import design from "../assets/design.png";
import design1 from "../assets/design2.png";

const heroImages = [durga1, durga2, durga3];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  

  return (
    <div className="home-page overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden font-sans">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Dark Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 text-white">
              {/* Badge */}
              <span className="mb-4 px-4 py-1 text-xs tracking-widest uppercase bg-yellow-400/90 text-black rounded-full shadow-md">
                Authentic Maharashtrian Food
              </span>

              {/* Logo */}
              <img
                src="/durgalogo.png"
                alt="Durga Khanawal Logo"
                className="h-24 mb-4 drop-shadow-xl"
              />

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4">
                दुर्गा <span className="text-yellow-400">खानावळ</span>
              </h1>

              {/* Divider */}
              <div className="w-20 h-[2px] bg-yellow-400 mb-6"></div>

              {/* Tagline */}
              <p className="text-lg md:text-xl font-medium mb-4 max-w-2xl text-white/90">
                सन १९३४ पासून — घरगुती, स्वच्छ आणि प्रेमाने बनवलेले जेवण
              </p>

              {/* Description */}
              <p className="text-sm md:text-base max-w-3xl mb-8 leading-relaxed text-white/80">
                दुर्गा खानावळ — घरगुती पद्धतीची शुद्ध पारंपरिक चव, जी चार
                पिढ्यांपासून निष्ठेने जपली जाते. येथे दिलेले जेवण केवळ अन्न
                नाही, तर प्रेम, परंपरा आणि माणुसकीचा अनुभव आहे.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition"
                >
                  मेनू पाहा
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-black hover:scale-105 transition"
                >
                  संपर्क करा
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* LEFT: Text with Full Vertical Line */}
          <motion.div
            className="md:w-1/2 relative pl-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-[#C1440E] rounded-full"></span>

            <h2 className="text-4xl font-serif text-[#C1440E] mb-6">
              About us
            </h2>

            <p className="text-[#3B2F2F] text-base md:text-lg leading-relaxed mb-4 font-[Poppins]">
              सातारा जिल्ह्यातील प्रसिद्ध{" "}
              <span className="font-semibold text-[#C1440E]">
                दुर्गा खानावळ
              </span>{" "}
              ही अस्सल पारंपरिक <strong>शुद्ध शाकाहारी</strong> जेवणासाठी ओळखली
              जाते. येथे दररोज ताज्या आणि निवडक साहित्यापासून घरगुती पद्धतीने
              बनवलेले स्वादिष्ट महाराष्ट्रीयन शाकाहारी जेवण दिले जाते. पारंपरिक
              भाजी, वरण-भात, आमटी, चपाती/भाकरी, कोशिंबीर, लोणचे आणि गावरान चवीची
              थाळी हे आमचे खास आकर्षण आहे.
            </p>

            <p className="text-[#3B2F2F] text-base md:text-lg leading-relaxed mb-6 font-[Poppins]">
              स्वच्छता, दर्जा आणि चव यावर कोणतीही तडजोड न करता, पिढ्यान्पिढ्या
              जपलेली परंपरा आजही आम्ही तितक्याच प्रेमाने पुढे नेत आहोत.
              कुटुंबासोबत शांत आणि समाधानकारक जेवणासाठी तसेच मित्रांसोबत
              पारंपरिक चवीचा आनंद घेण्यासाठी
              <span className="font-semibold text-[#C1440E]">
                {" "}
                दुर्गा खानावळ, सातारा
              </span>
              हे एक विश्वासार्ह आणि आपलेसे वाटणारे ठिकाण आहे.
            </p>

            <Link to="/about">
              <button className="bg-[#C1440E] text-white px-7 py-3 rounded-lg font-[Poppins] font-semibold hover:bg-[#D65B39] transition duration-300 shadow-md">
                अधिक माहिती
              </button>
            </Link>
          </motion.div>

          {/* RIGHT: Image Section */}
          <motion.div
            className="md:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={Hero}
              alt="Durga Thali"
              className="relative w-full max-w-full md:max-w-md rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SPECIAL THALI ================= */}
      <section className="bg-[#FFF8F1] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B2E1F] mb-3">
            आमची खासियत
          </h2>
          <h3 className="text-xl md:text-2xl font-[Poppins] text-gray-700 mb-12">
            स्पेशल महाराष्ट्रीयन थाळी
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#C1440E] rounded-3xl hidden md:block"></div>
              <img
                src={DurgaThali}
                alt="Special Maharashtrian Thali"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            <div className="md:w-1/2 text-left">
              <p className="text-lg md:text-xl text-[#3B2F2F] leading-relaxed mb-6 font-[Poppins]">
                घरगुती पद्धतीची अस्सल चव, ताजे आणि दर्जेदार साहित्य, तसेच
                प्रेमाने बनवलेली पारंपरिक महाराष्ट्रीयन{" "}
                <strong>शुद्ध शाकाहारी</strong> थाळी हीच{" "}
                <span className="font-semibold text-[#C1440E]">
                  दुर्गा खानावळ, सातारा
                </span>{" "}
                यांची खरी ओळख आहे.
              </p>

              <p className="text-base text-gray-600 mb-8 font-[Poppins]">
                आमच्या थाळीत वरण-भात, आमटी, विविध पारंपरिक भाज्या, चपाती/भाकरी,
                कोशिंबीर, लोणचे आणि गावरान मसाल्यांची खास चव असते.
              </p>

              <a
                href="/menu"
                className="inline-block bg-[#C1440E] text-white px-8 py-3 rounded-full font-semibold font-[Poppins] shadow-md hover:bg-[#D65B39] transition duration-300"
              >
                मेनू पहा →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPENING TIME ================= */}
      <section
        className="relative bg-fixed bg-center bg-cover py-28"
        style={{ backgroundImage: `url(${khanavalthali})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#F6C84C] font-[Playfair_Display] tracking-wide">
            उघडण्याची वेळ
          </h2>

          <p className="text-lg md:text-xl mb-12 text-white/90 font-[Poppins]">
            साताऱ्यातील अस्सल महाराष्ट्रीयन थाळीसाठी आम्ही दररोज खुले आहोत
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl mb-3 text-[#F6C84C] font-[Playfair_Display]">
                दुपारची वेळ
              </h3>
              <p className="text-lg font-[Poppins] tracking-wide">
                ११:३० AM – ४:३० PM
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl mb-3 text-[#F6C84C] font-[Playfair_Display]">
                रात्रीची वेळ
              </h3>
              <p className="text-lg font-[Poppins] tracking-wide">
                ७:३० PM – १०:०० PM
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-white/80 font-[Poppins]">
            गर्दीच्या वेळेत किंवा सुटीच्या दिवशी कृपया आधी संपर्क साधावा
          </p>
        </div>
      </section>

      {/* ================= REGAL INDULGENCE ================= */}
      <section className="relative bg-[#F6ECDC] py-24 overflow-hidden">
        <img
          src={design}
          className="absolute top-10 left-10 w-40 opacity-30 hidden md:block"
          alt=""
        />
        <img
          src={design1}
          className="absolute top-24 right-12 w-40 opacity-30 hidden md:block"
          alt=""
        />

        <div className="relative bg-white max-w-6xl mx-auto px-6 py-20 text-center shadow-xl rounded-3xl">
          <p className="tracking-[0.3em] text-sm text-[#B08968] mb-4 font-semibold">
            REGAL INDULGENCE
          </p>

          <div className="flex justify-center mb-6">
            <span className="text-[#C1440E] text-xl">✺</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#1F1F1F] mb-8">
            Durga Khanaval Satara
          </h2>

          <div className="max-w-3xl mx-auto text-[#444] text-base md:text-lg leading-relaxed space-y-6">
            <p>
              दुर्गा खानावळ येथे प्रत्येक जेवण ही एक अनुभवयात्रा आहे — जिथे
              पारंपरिक महाराष्ट्रीयन चवीचा खरा राजा तुम्हाला भेटतो.
            </p>
            <p>
              सातारा जिल्ह्यातील आमची खानावळ अनेक वर्षांच्या अनुभवातून, घरगुती
              पाककलेच्या परंपरेतून आणि अस्सल गावरान मसाल्यांच्या वापरातून उभी
              राहिली आहे. येथे सादर केली जाणारी शुद्ध शाकाहारी थाळी म्हणजे
              चवींचा समतोल, साधेपणाची श्रीमंती आणि घरच्या जेवणाची आपुलकी यांचा
              सुंदर संगम आहे.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl hidden md:block"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-center text-[#8B2E1F] mb-16"
          >
            Why Choose <span className="text-[#A33A2A]">Durga Khanaval?</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid md:grid-cols-3 gap-10"
          >
            {/* Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group bg-[#FFF3E8] rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-60 transition duration-300 rounded-3xl"></div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-black mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <UtensilsCrossed />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8B2E1F]">
                Authentic Taste
              </h3>
              <p className="text-[#555] leading-relaxed">
                पिढ्यान्पिढ्या जपलेली पारंपरिक महाराष्ट्रीयन चव — घरगुती मसाले
                आणि प्रेमाने बनवलेले पदार्थ.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group bg-[#E6F7EF] rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-60 transition duration-300 rounded-3xl"></div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Leaf />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8B2E1F]">
                Fresh & Hygienic
              </h3>
              <p className="text-[#555] leading-relaxed">
                दररोज ताजे साहित्य, स्वच्छ स्वयंपाकघर आणि आरोग्याची पूर्ण काळजी.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group bg-[#FFF1E6] rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-60 transition duration-300 rounded-3xl"></div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <IndianRupee />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8B2E1F]">
                Value for Money
              </h3>
              <p className="text-[#555] leading-relaxed">
                कुटुंब, विद्यार्थी आणि काम करणाऱ्यांसाठी परवडणारी किंमत आणि
                भरपूर जेवण.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


