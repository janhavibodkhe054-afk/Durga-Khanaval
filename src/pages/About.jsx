import React, { useEffect, useState, useRef, useContext } from "react";
import Footer from "../components/Footer";
import { LanguageContext } from "../context/LanguageContext";

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
import news2 from "../assets/news2.jpg";
import paper1 from "../assets/papernews.jpeg";
import paper2 from "../assets/papernews2.jpeg";
import paper3 from "../assets/papernews3.jpeg";
import paper4 from "../assets/papernews4.jpeg";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery from "../assets/gallery.jpeg";

export default function About() {
  const { language } = useContext(LanguageContext); // Add language support

  const slides = [
    {
      src: Hotel1,
      caption: {
        en: "Durga Khanawal — Our Heritage",
        mr: "दुर्गा खानावळ — आमचा वारसा",
        hi: "दुर्गा खानावळ — हमारी विरासत",
      },
    },
    {
      src: womens_day1,
      caption: {
        en: "Celebrating Women's Day",
        mr: "महिला दिन साजरा करणे",
        hi: "महिला दिवस का उत्सव",
      },
    },
    {
      src: social1,
      caption: {
        en: "Social Gatherings & Memories",
        mr: "सामाजिक कार्यक्रम व आठवणी",
        hi: "सामाजिक कार्यक्रम और यादें",
      },
    },
    {
      src: womens_day2,
      caption: {
        en: "Empowering Women with Joy",
        mr: "महिलांना आनंदाने सशक्त करणे",
        hi: "महिलाओं को खुशी के साथ सशक्त करना",
      },
    },
    {
      src: womens_day3,
      caption: {
        en: "Memorable Celebrations",
        mr: "स्मरणीय उत्सव",
        hi: "स्मरणीय उत्सव",
      },
    },
  ];

  const achievements = [
    {
      img: womens_day3,
      title: {
        en: "Women's Day — Free Meal & Saree Distribution",
        mr: "महिला दिन — मोफत जेवण व साडी वितरण",
        hi: "महिला दिवस — मुफ्त भोजन और साड़ी वितरण",
      },
      text: {
        en: "On Women's Day, free meals and sarees are distributed to women. Celebrating the 15th year of this tradition.",
        mr: "8 मार्च महिला दिनानिमित्त महिलांना मोफत जेवण व साडीचोळी दिली जाते. हे महिला दिनाचे पंधरावे वर्ष आहे.",
        hi: "महिला दिवस पर महिलाओं को मुफ्त भोजन और साड़ी प्रदान की जाती हैं। यह 15वां वर्ष है।",
      },
    },
    {
      img: womens_day2,
      title: {
        en: "Women's Training & Programs",
        mr: "महिला प्रशिक्षण व उपक्रम",
        hi: "महिला प्रशिक्षण और कार्यक्रम",
      },
      text: {
        en: "Weekly programs, competitions, and training for women in hospitality.",
        mr: "महिला कीर्तन सप्ताह, महिला भजन स्पर्धा आणि हॉटेल/खानावळ व्यवसायासाठी प्रोत्साहन प्रशिक्षण.",
        hi: "महिला कीर्तन सप्ताह, महिला भजन प्रतियोगिता और होटल/खानावाल व्यवसाय के लिए प्रशिक्षण।",
      },
    },
    {
      img: social1,
      title: {
        en: "Social & Cultural Contribution",
        mr: "समाजसेवा व सांस्कृतिक परंपरा",
        hi: "सामाजिक और सांस्कृतिक योगदान",
      },
      text: {
        en: "Annual programs for the local community, promoting culture and heritage.",
        mr: "स्थानीक समाजासाठी वार्षिक कार्यक्रम, तिथे विविध सामाजिक उपक्रम आणि ऐतिहासिक योगदान.",
        hi: "स्थानीय समुदाय के लिए वार्षिक कार्यक्रम, विभिन्न सामाजिक गतिविधियों और सांस्कृतिक योगदान।",
      },
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

  // Animate on scroll
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
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-page pt-24 bg-[#FFF8F1] overflow-x-hidden">
      {/* ================= TOP LOGO STRIP ================= */}
      <div className="max-w-6xl mx-auto bg-[#FFF8F1] rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 transform hover:scale-105 transition-transform duration-500 border-2 border-[#8B2E1F] animate-on-scroll">
        <img
          src={logo}
          alt="Durga Khanaval logo"
          className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#8B2E1F] shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#8B2E1F] drop-shadow-md">
            {language === "en"
              ? "Durga Khanawal — History & Heritage"
              : language === "mr"
              ? "Durga Khanawal — इतिहास व वारसा"
              : "दुर्गा खानावळ — इतिहास व वारसा"}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-[#8B2E1F]/80 font-medium">
            {language === "en"
              ? "Pure Vegetarian Khanaval • Est. 1934"
              : language === "mr"
              ? "शुद्ध शाकाहारी खानावळ • स्थापना: 1934"
              : "शुद्ध शाकाहारी खानावळ • स्थापना: 1934"}
          </p>
          <div className="mt-3 w-24 h-1 bg-[#FFDAB3] rounded-full mx-auto md:mx-0 shadow-sm"></div>
        </div>
      </div>

      {/* ================= HISTORY / ABOUT ================= */}
      <section className="history-section max-w-6xl mx-auto my-28 flex flex-col md:flex-row gap-12 px-4 md:px-0 animate-on-scroll">
        <div className="history-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B2E1F] mb-4">
            {language === "en"
              ? "History — Since 1934"
              : language === "mr"
              ? "इतिहास — 1934 पासून"
              : "इतिहास — 1934 से"}
          </h2>
          <p className="text-[#8B2E1F]/90 mb-4 text-base md:text-lg">
            {language === "en"
              ? "Durga Khanaval was established on 22 May 1934 in Satara..."
              : language === "mr"
              ? "वाठार स्टेशन ता कोरेगांव जि.सातारा येथील दुर्गा खानावळ २२ मे १९३४ रोजी स्थापन झाली..."
              : "दुर्गा खानावळ 22 मई 1934 को सातारा में स्थापित हुई..."}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#8B2E1F] mb-2">
            {language === "en"
              ? "Current Management"
              : language === "mr"
              ? "सध्याचे व्यवस्थापन"
              : "वर्तमान प्रबंधन"}
          </h3>
          <p className="text-[#8B2E1F]/90 text-base md:text-lg">
            {language === "en"
              ? "Mrs. Vimal Vasantrao Jadhav — Chief Director..."
              : language === "mr"
              ? "सौ. विमल वसंतराव जाधव — प्रमुख संचालिका..."
              : "श्रीमती विमल वसंतराव जाधव — मुख्य संचालक..."}
          </p>
          <p className="text-[#8B2E1F]/90 text-base md:text-lg">
            {language === "en"
              ? "Mrs. Durga Vikram Jadhav — Chief Director..."
              : language === "mr"
              ? "सौ. दुर्गा विक्रम जाधव — प्रमुख संचालिका..."
              : "श्रीमती दुर्गा विक्रम जाधव — मुख्य संचालिका..."}
          </p>
        </div>
        <div className="history-right md:w-1/2 relative">
          <img
            src={hero}
            alt="Historic photo"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
          />
          <div className="absolute bottom-4 left-4 bg-[#8B2E1F]/90 text-[#FFF8F1] px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg text-sm md:text-base">
            {language === "en"
              ? "91 Years of Legacy (1934 → 2025)"
              : language === "mr"
              ? "९१ वर्षांचा वारसा (१९३४ → २०२५)"
              : "91 वर्षों की विरासत (1934 → 2025)"}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="achievements-section max-w-6xl mx-auto my-16 px-4 md:px-0 animate-on-scroll">
        <div className="achievements-grid flex flex-col gap-12">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`achievement-row flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="achievement-img md:w-1/2">
                <img
                  src={a.img}
                  alt={a.title[language]}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover transform transition duration-500 hover:scale-105"
                />
              </div>
              <div className="achievement-text md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#8B2E1F] mb-2">
                  {a.title[language]}
                </h3>
                <p className="text-[#8B2E1F]/90 text-base md:text-lg">
                  {a.text[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MEDIA SECTION ================= */}
      <section className="media-section max-w-7xl mx-auto my-24 px-4 md:px-0">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8B2E1F] mb-4">
            {language === "en"
              ? "Press & Media Coverage"
              : language === "mr"
              ? "प्रेस व मीडिया कव्हरेज"
              : "प्रेस और मीडिया कवरेज"}
          </h2>

          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#8B2E1F]/40"></span>
            <span className="text-[#C1440E] text-xl">✺</span>
            <span className="w-10 h-[2px] bg-[#8B2E1F]/40"></span>
          </div>

          <p className="text-[#8B2E1F]/70 text-base md:text-lg">
            {language === "en"
              ? "Featured in leading newspapers & media houses"
              : language === "mr"
              ? "प्रसिद्ध वृत्तपत्रे व माध्यमांमध्ये प्रसिद्ध"
              : "प्रमुख समाचार पत्रों और मीडिया में प्रकाशित"}
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            newsPaper,
            media1,
            media2,
            media3,
            news2,
            paper1,
            paper2,
            paper3,
            paper4,
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={imgSrc}
                alt={`Media ${index + 1}`}
                className={`w-full transition-transform duration-700 group-hover:scale-110
            ${
              index === 4 || index === 5
                ? "h-auto object-contain p-4"
                : "h-72 md:h-80 object-cover"
            }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <p className="text-white text-sm md:text-base font-medium p-4">
                  {language === "en"
                    ? "Press Highlight"
                    : language === "mr"
                    ? "प्रेस हायलाइट"
                    : "प्रेस हाइलाइट"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="history-section max-w-6xl mx-auto my-20 px-4 md:px-0 animate-on-scroll">
        {/* ===== Heading & Text ===== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B2E1F] mb-4">
            {language === "en"
              ? "Our Founder — Durga Khanawal"
              : language === "mr"
              ? "आमचे संस्थापक — दुर्गा खानावळ"
              : "हमारे संस्थापक — दुर्गा खानावल"}
          </h2>

          <p className="text-[#8B2E1F]/90 text-base md:text-lg leading-relaxed">
            {language === "en"
              ? "Durga Khanawal started this legacy in 1934 with purity, discipline, and traditional values that continue even today."
              : language === "mr"
              ? "दुर्गा खानावळ यांनी १९३४ मध्ये शुद्धता, शिस्त आणि परंपरेवर आधारित हा वारसा सुरू केला."
              : "दुर्गा खानावल ने 1934 में शुद्धता, अनुशासन और परंपरा के साथ इस विरासत की शुरुआत की।"}
          </p>
        </div>

        {/* ===== Simple Photo Gallery ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery].map(
            (img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg bg-white"
              >
                <img
                  src={img}
                  alt={`Durga Khanawal ${idx + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section relative max-w-7xl mx-auto my-20 px-4 md:px-0 animate-on-scroll">
        <div className="absolute inset-0 bg-[#F5E6DC] skew-y-2 -z-10 rounded-3xl shadow-2xl"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 rounded-3xl bg-[#F5E6DC]/90 backdrop-blur-sm shadow-lg transform transition duration-500 hover:scale-105">
          <div className="cta-left md:w-2/3">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#8B2E1F] mb-4 flex items-center gap-2">
              <span>🌸</span>{" "}
              {language === "en"
                ? "Durga Khanaval — Let's Experience"
                : language === "mr"
                ? "दुर्गा खानावळ — चला अनुभव घेऊया"
                : "दुर्गा खानावळ — चलो अनुभव करें"}
            </h3>
            <p className="text-[#8B2E1F]/90 text-lg md:text-xl">
              {language === "en"
                ? "Homemade flavors, traditions, and full transparency — our pride."
                : language === "mr"
                ? "घरगुती चव, पद्धती आणि संपूर्ण पारदर्शकता — आमचा अभिमान."
                : "घर का बना स्वाद, परंपराएं और पूर्ण पारदर्शिता — हमारा गर्व।"}
            </p>
          </div>
          <div className="cta-right md:w-1/3 flex justify-center md:justify-end">
            <a
              href="/contact"
              className="cta-btn relative inline-block bg-[#8B2E1F] text-[#FFF8F1] px-8 py-4 rounded-2xl font-bold shadow-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#A33A2A] to-[#8B2E1F] opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl"></span>
              <span className="relative z-10">
                {language === "en"
                  ? "Get in touch"
                  : language === "mr"
                  ? "संपर्क साधा"
                  : "संपर्क करें"}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
