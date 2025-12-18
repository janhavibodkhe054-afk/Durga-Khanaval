import React, { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";

import womens_day1 from "../assets/womens_day1.jpeg";
import social1 from "../assets/social1.jpeg";
import Hotel1 from "../assets/Hotel1.jpeg";
import womens_day2 from "../assets/womens_day2.jpeg";
import womens_day3 from "../assets/womens_day3.jpeg";
import logo from "../assets/logo.jpeg";
import newsPaper from "../assets/newsPaper.png";
import hero from "../assets/hero.jpeg";
import media1 from "../assets/media1.jpeg";
import media2 from "../assets/media2.jpeg";
import media3 from "../assets/media3.jpeg";
import news2 from "../assets/news2.jpg"
import news3 from "../assets/news3.jpg"

export default function About() {
  const slides = [
    { src: Hotel1, alt: "Hotel Image", caption: "Durga Khanawal — Our Heritage" },
    { src: womens_day1, alt: "Women's Day Event", caption: "Celebrating Women's Day 1" },
    { src: social1, alt: "Social Event", caption: "Social Gatherings & Memories" },
    { src: womens_day2, alt: "Women's Day Event 2", caption: "Empowering Women with Joy" },
    { src: womens_day3, alt: "Women's Day Event 3", caption: "Memorable Celebrations at Durga Khanawal" },
  ];

  const achievements = [
    {
      img: womens_day3,
      title: "महिला दिन — मोफत जेवण व साडी वितरण",
      text: "8 मार्च महिला दिनानिमित्त महिलांना मोफत जेवण व साडीचोळी दिली जाते. हे महिला दिनाचे पंधरावे वर्ष आहे.",
    },
    {
      img: womens_day2,
      title: "महिला प्रशिक्षण व उपक्रम",
      text: "महिला कीर्तन सप्ताह, महिला भजन स्पर्धा आणि हॉटेल/खानावळ व्यवसायासाठी प्रोत्साहन प्रशिक्षण.",
    },
    {
      img: social1,
      title: "समाजसेवा व सांस्कृतिक परंपरा",
      text: "स्थानीक समाजासाठी वार्षिक कार्यक्रम, तिथे विविध सामाजिक उपक्रम आणि ऐतिहासिक योगदान.",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  function startAutoPlay() {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  }

  function stopAutoPlay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // ====== Animate on scroll ======
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-page pt-24 bg-[#FFF8F1]">

      {/* ================= TOP LOGO STRIP ================= */}
      <div className="max-w-6xl mx-auto bg-[#FFF8F1] rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 transform hover:scale-105 transition-transform duration-500 border-2 border-[#8B2E1F] animate-on-scroll">
        <img src={logo} alt="Durga Khanaval logo" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#8B2E1F] shadow-lg" />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#8B2E1F] drop-shadow-md">Durga Khanawal — इतिहास व वारसा</h1>
          <p className="mt-2 text-lg md:text-xl text-[#8B2E1F]/80 font-medium">शुद्ध शाकाहारी खानावळ • स्थापना: 1934</p>
          <div className="mt-3 w-24 h-1 bg-[#FFDAB3] rounded-full mx-auto md:mx-0 shadow-sm"></div>
        </div>
      </div>

      {/* ================= HISTORY / ABOUT ================= */}
      <section className="history-section max-w-6xl mx-auto my-16 flex flex-col md:flex-row gap-12 px-4 md:px-0 animate-on-scroll">
        <div className="history-left md:w-1/2">
          <h2 className="text-3xl font-bold text-[#8B2E1F] mb-4">इतिहास — 1934 पासून</h2>
          <p className="text-[#8B2E1F]/90 mb-4">वाठार स्टेशन ता कोरेगांव जि.सातारा येथील दुर्गा खानावळ २२ मे १९३४ रोजी स्थापन झाली...</p>
          <h3 className="text-2xl font-semibold text-[#8B2E1F] mb-2">सध्याचे व्यवस्थापन</h3>
          <p className="text-[#8B2E1F]/90">सौ. विमल वसंतराव जाधव — प्रमुख संचालिका...</p>
        </div>
        <div className="history-right md:w-1/2 relative">
          <img src={hero} alt="Historic photo" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-[#8B2E1F]/90 text-[#FFF8F1] px-4 py-2 rounded-full font-semibold shadow-lg">
            ९१ वर्षांचा वारसा (१९३४ → २०२५)
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="achievements-section max-w-6xl mx-auto my-16 px-4 md:px-0 animate-on-scroll">
        <div className="achievements-grid flex flex-col gap-12">
          {achievements.map((a, i) => (
            <div key={i} className={`achievement-row flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="achievement-img md:w-1/2">
                <img src={a.img} alt={a.title} className="rounded-2xl shadow-lg w-full h-auto object-cover transform transition duration-500 hover:scale-105" />
              </div>
              <div className="achievement-text md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#8B2E1F] mb-2">{a.title}</h3>
                <p className="text-[#8B2E1F]/90">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MEDIA SECTION ================= */}
      <section className="media-section max-w-7xl mx-auto my-20 px-4 md:px-0 animate-on-scroll">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B2E1F] mb-3 animate-pulse">🌻 काही वृत्तपत्रे 🌻</h2>
          <p className="text-[#8B2E1F]/70 text-lg md:text-xl">टाइम्स ऑफ इंडिया • हिंदी जागरण • दैनिक ऐक्य • दैनिक सकाळ • दैनिक पुढारी</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[newsPaper, media1, media2, media3, news2].map((imgSrc, index) => (
            <div key={index} className="relative group overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src={imgSrc}
                alt={`Media ${index + 1}`}
                className={`w-full rounded-3xl transition-transform duration-500 group-hover:scale-110
                  ${index === 4 || index === 5 ? "h-auto object-contain" : "h-80 md:h-96 object-cover"}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg md:text-xl text-center px-2">🌟 प्रेस क्लिप 🌟</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section relative max-w-7xl mx-auto my-20 px-4 md:px-0 animate-on-scroll">
        <div className="absolute inset-0 bg-[#F5E6DC] skew-y-2 -z-10 rounded-3xl shadow-2xl"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 rounded-3xl bg-[#F5E6DC]/90 backdrop-blur-sm shadow-lg transform transition duration-500 hover:scale-105">
          <div className="cta-left md:w-2/3">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#8B2E1F] mb-4 flex items-center gap-2"><span>🌸</span> दुर्गा खानावळ — चला अनुभव घेऊया</h3>
            <p className="text-[#8B2E1F]/90 text-lg md:text-xl">घरगुती चव, पद्धती आणि संपूर्ण पारदर्शकता — आमचा अभिमान.</p>
          </div>
          <div className="cta-right md:w-1/3 flex justify-center md:justify-end">
            <a href="/contact" className="cta-btn relative inline-block bg-[#8B2E1F] text-[#FFF8F1] px-8 py-4 rounded-2xl font-bold shadow-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#A33A2A] to-[#8B2E1F] opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl"></span>
              <span className="relative z-10">Get in touch</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
