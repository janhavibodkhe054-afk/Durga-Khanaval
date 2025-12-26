import React, { useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageContext } from "../context/LanguageContext";

import img1 from "../assets/social2.jpeg";
import img2 from "../assets/social3.jpeg";
import img3 from "../assets/social4.jpeg";
import img4 from "../assets/social5.jpeg";
import img5 from "../assets/social6.jpeg";
import img6 from "../assets/social7.jpeg";

export default function Highlights() {
  const { language } = useContext(LanguageContext);

  const images = [
    {
      src: img1,
      caption:
        language === "en"
          ? "Former CM Mr. Prithviraj Chavan visits Durga Khanawal"
          : language === "mr"
          ? "माजी मुख्यमंत्री श्री पृथ्वीराज चव्हाण साहेब दुर्गा खानावळ मधील सदिच्छा भेट"
          : "पूर्व मुख्यमंत्री श्री पृथ्वीराज चव्हाण जी दुर्गा खानावल में शुभकामना भेट"
    },
    {
      src: img2,
      caption:
        language === "en"
          ? "With Chhatrapati Mr. Udayanraje Bhosale & family"
          : language === "mr"
          ? "छत्रपती श्री. उदयनराजे भोसले समवेत दुर्गा खानावळ चे कुटुंबीय"
          : "छत्रपति श्री उदयनराजे भोसले के साथ दुर्गा खानावल परिवार"
    },
    {
      src: img3,
      caption:
        language === "en"
          ? "Ex-District Collector congratulating Durga Khanawal owners"
          : language === "mr"
          ? "सातारा जिल्ह्याचे माजी जिल्हाधिकारी श्री शेखरसिंग साहेब दुर्गा खानावळीचे मालकांचे अभिनंदन करताना"
          : "सातारा जिले के पूर्व कलेक्टर श्री शेखरसिंग साहेब दुर्गा खानावल के मालिकों को बधाई देते हुए"
    },
    {
      src: img4,
      caption:
        language === "en"
          ? "Police Superintendent Mr. Sameer Sheikh felicitating the owners"
          : language === "mr"
          ? "सातारा जिल्ह्याचे पोलीस अधीक्षक श्री समीर शेख साहेब यांचा सत्कार करताना दुर्गा खानावळीचे मालक श्री वसंतराव जाधव"
          : "सातारा जिले के पुलिस अधीक्षक श्री समीर शेख साहेब द्वारा मालिकों का सत्कार"
    },
    {
      src: img5,
      caption:
        language === "en"
          ? "Former police chief Ms. Tejaswini Satpute honoring the director"
          : language === "mr"
          ? "सातारा जिल्ह्याच्या माजी पोलीस प्रमुख सौ तेजस्विनी सातपुते मॅडमने दुर्गा खानावळीचे संचालिका. सौ.विमल वसंतराव जाधव,यांचा सत्कार करताना"
          : "सातारा जिले की पूर्व पुलिस प्रमुख श्रीमती तेजस्विनी सातपुते द्वारा संचालिका का सम्मान"
    },
    {
      src: img6,
      caption:
        language === "en"
          ? "Senior social worker Mrs. Sindhutai Sapkal visiting Durga Khanawal"
          : language === "mr"
          ? "ज्येष्ठ समाजसेविका श्रीमती सिंधुताई सपकाळ यांनी दुर्गा खानावळीस भेट दिलेला क्षण"
          : "वरिष्ठ समाजसेविका श्रीमती सिंधुताई सपकाळ दुर्गा खानावल का दौरा"
    }
  ];

  return (
    <div className="bg-white pt-[90px] font-['Segoe_UI',sans-serif] overflow-x-hidden">
      <Navbar />

      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-5 py-12 bg-gradient-to-b from-white to-[#fff9f7]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#b71c1c] tracking-tight mb-2">
          {language === "en"
            ? "Durga Khanawal Highlights"
            : language === "mr"
            ? "दुर्गा खानावळ हायलाइट्स"
            : "दुर्गा खानावल हाइलाइट्स"}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#666] max-w-xl mx-auto leading-relaxed">
          {language === "en"
            ? "A Glimpse of Our Journey, Recognition & Visitors"
            : language === "mr"
            ? "आमच्या प्रवासाचे, सन्मान व अभ्यागतांचे झलक"
            : "हमारी यात्रा, सम्मान और आगंतुकों की झलक"}
        </p>
      </motion.header>

      {/* GRID */}
      <section className="max-w-[1100px] mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={img.src}
              alt={`Highlight ${index + 1}`}
              className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover"
            />
            <p className="p-3 text-sm sm:text-[15px] md:text-base text-[#333] text-center leading-snug">
              {img.caption}
            </p>
          </motion.div>
        ))}
      </section>

      
    </div>
  );
}
