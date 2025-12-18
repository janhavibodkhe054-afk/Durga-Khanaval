import React from "react";
import Navbar from "../components/Navbar";

import img1 from "../assets/social2.jpeg";
import img2 from "../assets/social3.jpeg";
import img3 from "../assets/social4.jpeg";
import img4 from "../assets/social5.jpeg";
import img5 from "../assets/social6.jpeg";
import img6 from "../assets/social7.jpeg";

export default function Highlights() {
  const images = [
    { src: img1, caption: "माजी मुख्यमंत्री श्री पृथ्वीराज चव्हाण साहेब दुर्गा खानावळ मधील सदिच्छा भेट...." },
    { src: img2, caption: "छत्रपती श्री. उदयनराजे भोसले समवेत दुर्गा खानावळ चे कुटुंबीय" },
    { src: img3, caption: "सातारा जिल्ह्याचे माजी जिल्हाधिकारी श्री शेखरसिंग साहेब दुर्गा खानावळीचे मालकांचे अभिनंदन करताना" },
    { src: img4, caption: "सातारा जिल्ह्याचे पोलीस अधीक्षक श्री समीर शेख साहेब यांचा सत्कार करताना दुर्गा खानावळीचे मालक श्री वसंतराव जाधव" },
    { src: img5, caption: "सातारा जिल्ह्याच्या माजी पोलीस प्रमुख सौ तेजस्विनी सातपुते मॅडमने दुर्गा खानावळीचे संचालिका. सौ.विमल वसंतराव जाधव,यांचा सत्कार करताना" },
    { src: img6, caption: "ज्येष्ठ समाजसेविका श्रीमती सिंधुताई सपकाळ यांनी दुर्गा खानावळीस भेट दिलेला दिलेला क्षण" }
  ];

   return (
    <div className="bg-white pt-[90px] font-['Segoe_UI',sans-serif] overflow-x-hidden">
      
      {/* HEADER */}
      <header className="text-center px-5 py-12 bg-gradient-to-b from-white to-[#fff9f7] animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#b71c1c] tracking-tight mb-2">
          Durga Khanawal Highlights
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#666] max-w-xl mx-auto leading-relaxed animate-fadeUp">
          A Glimpse of Our Journey, Recognition & Visitors
        </p>
      </header>

      {/* GRID */}
      <section className="max-w-[1100px] mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                       transition-transform duration-300 hover:-translate-y-1.5"
          >
            <img
              src={img.src}
              alt="Highlight"
              className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover"
            />
            <p className="p-3 text-sm sm:text-[15px] md:text-base text-[#333] text-center leading-snug">
              {img.caption}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
