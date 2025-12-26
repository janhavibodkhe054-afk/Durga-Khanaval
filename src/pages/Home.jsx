// src/pages/Home.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UtensilsCrossed, Leaf, IndianRupee } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

import Hero from "../assets/hero.jpeg";
import DurgaThali from "../assets/durgathali1.jpeg";
import durga1 from "../assets/durga1.jpg";
import durga2 from "../assets/durga2.jpg";
import durga3 from "../assets/durga3.jpg";
import khanavalthali from "../assets/khanavalthali.jpg";
import design from "../assets/design.png";
import design1 from "../assets/design2.png";
import regalImage from "../assets/ragal.jpeg"

const heroImages = [durga1, durga2, durga3];

export default function Home() {
  const { language } = useContext(LanguageContext); 
  const [current, setCurrent] = useState(0);

  // Auto-slide hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ===================== Multi-language content =====================
  const content = {
    hero: {
      badge: {
        en: "Authentic Maharashtrian Food",
        hi: "असली महाराष्ट्रीयन भोजन",
        mr: "खऱ्या महाराष्ट्रीयन जेवणाची चव",
      },
      title: { en: "Durga Khanaval", hi: "दुर्गा खानावळ", mr: "दुर्गा खानावळ" },
      tagline: {
        en: "Since 1934 — Homemade, Clean & Made with Love",
        hi: "सन 1934 से — घर का बना, स्वच्छ और प्यार से तैयार",
        mr: "सन १९३४ पासून — घरगुती, स्वच्छ आणि प्रेमाने बनवलेले जेवण",
      },
      description: {
        en: "Durga Khanaval — traditional homemade flavors preserved for 4 generations. Every meal is not just food, but love, tradition and humanity.",
        hi: "दुर्गा खानावळ — पारंपरिक घर का बना स्वाद, 4 पीढ़ियों से सुरक्षित। हर भोजन केवल खाना नहीं है, बल्कि प्यार, परंपरा और मानवता है।",
        mr: "दुर्गा खानावळ — घरगुती पद्धतीची शुद्ध पारंपरिक चव, जी चार पिढ्यांपासून जपली जाते. येथे दिलेले जेवण केवळ अन्न नाही, तर प्रेम, परंपरा आणि माणुसकीचा अनुभव आहे.",
      },
      btnMenu: { en: "View Menu", hi: "मेनू देखें", mr: "मेनू पाहा" },
      btnContact: { en: "Contact Us", hi: "संपर्क करें", mr: "संपर्क करा" },
    },
    story: {
      heading: { en: "About Us", hi: "हमारे बारे में", mr: "आमच्या विषयी" },
      p1: {
        en: "Durga Khanaval in Satara is famous for authentic vegetarian Maharashtrian food.",
        hi: "सातारा में दुर्गा खानावळ असली शाकाहारी महाराष्ट्रीयन भोजन के लिए प्रसिद्ध है।",
        mr: "सातारा जिल्ह्यातील प्रसिद्ध दुर्गा खानावळ ही अस्सल पारंपरिक शुद्ध शाकाहारी जेवणासाठी ओळखली जाते.",
      },
      p2: {
        en: "We preserve hygiene, quality and taste, carrying tradition with love through generations.",
        hi: "हम स्वच्छता, गुणवत्ता और स्वाद बनाए रखते हैं और पीढ़ियों से परंपरा को प्यार से आगे बढ़ाते हैं।",
        mr: "स्वच्छता, दर्जा आणि चव यावर कोणतीही तडजोड न करता, पिढ्यान्पिढ्या जपलेली परंपरा आजही आम्ही तितक्याच प्रेमाने पुढे नेत आहोत.",
      },
      btn: { en: "Read More", hi: "अधिक पढ़ें", mr: "अधिक माहिती" },
    },
    specialThali: {
      heading: { en: "Our Specialty", hi: "हमारी खासियत", mr: "आमची खासियत" },
      subHeading: {
        en: "Special Maharashtrian Thali",
        hi: "विशेष महाराष्ट्रीयन थाली",
        mr: "स्पेशल महाराष्ट्रीयन थाळी",
      },
      description1: {
        en: "Authentic homemade flavors, fresh ingredients, made with love.",
        hi: "असली घर का बना स्वाद, ताजगी से तैयार और प्यार से बनाया गया।",
        mr: "घरगुती पद्धतीची अस्सल चव, ताजे आणि दर्जेदार साहित्य, तसेच प्रेमाने बनवलेली पारंपरिक महाराष्ट्रीयन शाकाहारी थाळी",
      },
      description2: {
        en: "Includes traditional vegetables, varan-bhat, chapati/bhakri, salad, pickles.",
        hi: "इसमें पारंपरिक सब्जियां, वरन-भात, चपाती, सलाद और अचार शामिल हैं।",
        mr: "आमच्या थाळीत वरण-भात, आमटी, विविध पारंपरिक भाज्या, चपाती/भाकरी, कोशिंबीर, लोणचे आणि गावरान मसाल्यांची खास चव असते.",
      },
      btnMenu: { en: "View Menu →", hi: "मेनू देखें →", mr: "मेनू पहा →" },
    },
    openingTime: {
      heading: { en: "Opening Hours", hi: "खुलने का समय", mr: "उघडण्याची वेळ" },
      description: {
        en: "We are open every day for authentic Maharashtrian Thali in Satara.",
        hi: "सातारा में असली महाराष्ट्रीयन थाली के लिए हम हर दिन खुले हैं।",
        mr: "साताऱ्यातील अस्सल महाराष्ट्रीयन थाळीसाठी आम्ही दररोज खुले आहोत",
      },
      lunch: {
        title: { en: "Lunch Time", hi: "दोपहर का समय", mr: "दुपारची वेळ" },
        time: "11:30 AM – 4:30 PM",
      },
      dinner: {
        title: { en: "Dinner Time", hi: "रात का समय", mr: "रात्रीची वेळ" },
        time: "7:30 PM – 10:00 PM",
      },
      note: {
        en: "Please contact us during busy hours or holidays.",
        hi: "भीड़ के समय या छुट्टी के दिन कृपया संपर्क करें।",
        mr: "गर्दीच्या वेळेत किंवा सुटीच्या दिवशी कृपया आधी संपर्क साधावा",
      },
    },
    regal: {
      heading: { en: "Regal Indulgence", hi: "शाही अनुभव", mr: "Regal Indulgence" },
      title: { en: "Durga Khanaval Satara", hi: "दुर्गा खानावळ सातारा", mr: "Durga Khanaval Satara" },
      description1: {
        en: "Every meal at Durga Khanaval is an experience where traditional Maharashtrian flavors reign.",
        hi: "दुर्गा खानावळ में हर भोजन एक अनुभव है जहाँ पारंपरिक महाराष्ट्रीयन स्वाद राज करते हैं।",
        mr: "दुर्गा खानावळ येथे प्रत्येक जेवण ही एक अनुभवयात्रा आहे — जिथे पारंपरिक महाराष्ट्रीयन चवीचा खरा राजा तुम्हाला भेटतो.",
      },
      description2: {
        en: "Our Satara eatery stands on years of experience, home-cooked traditions, and authentic rural spices.",
        hi: "हमारा सातारा भोजनालय वर्षों के अनुभव, घर के पकवान और असली देहाती मसालों पर आधारित है।",
        mr: "सातारा जिल्ह्यातील आमची खानावळ अनेक वर्षांच्या अनुभवातून, घरगुती पाककलेच्या परंपरेतून आणि अस्सल गावरान मसाल्यांच्या वापरातून उभी राहिली आहे.",
      },
      description3: {
        en: "The pure vegetarian thali served here balances taste, simplicity, and homely feel.",
        hi: "यहाँ पर परोसी जाने वाली शुद्ध शाकाहारी थाली स्वाद, सादगी और घर जैसा अनुभव संतुलित करती है।",
        mr: "येथे सादर केली जाणारी शुद्ध शाकाहारी थाळी म्हणजे चवींचा समतोल, साधेपणाची श्रीमंती आणि घरच्या जेवणाची आपुलकी यांचा सुंदर संगम आहे.",
      },
    },
    chooseUs: {
      heading: { en: "Why Choose Us?", hi: "हमें क्यों चुनें?", mr: "आम्हाला का निवडावे?" },
      card1: {
        title: { en: "Authentic Taste", hi: "असली स्वाद", mr: "Authentic Taste" },
        desc: {
          en: "Traditional Maharashtrian taste preserved for generations.",
          hi: "पीढ़ियों से संरक्षित पारंपरिक महाराष्ट्रीयन स्वाद।",
          mr: "पिढ्यान्पिढ्या जपलेली पारंपरिक महाराष्ट्रीयन चव — घरगुती मसाले आणि प्रेमाने बनवलेले पदार्थ.",
        },
      },
      card2: {
        title: { en: "Fresh & Hygienic", hi: "ताजा और स्वच्छ", mr: "Fresh & Hygienic" },
        desc: {
          en: "Fresh ingredients, clean kitchen, and full care for health.",
          hi: "ताजे सामग्री, स्वच्छ रसोई और स्वास्थ्य की पूरी देखभाल।",
          mr: "दररोज ताजे साहित्य, स्वच्छ स्वयंपाकघर आणि आरोग्याची पूर्ण काळजी.",
        },
      },
      card3: {
        title: { en: "Value for Money", hi: "पैसे का मूल्य", mr: "Value for Money" },
        desc: {
          en: "Affordable prices and generous servings for families and students.",
          hi: "परिवार और छात्रों के लिए किफायती मूल्य और भरपूर मात्रा।",
          mr: "कुटुंब, विद्यार्थी आणि काम करणाऱ्यांसाठी परवडणारी किंमत आणि भरपूर जेवण.",
        },
      },
    },
  };

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
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 text-white">
              <span className="mb-4 px-4 py-1 text-xs tracking-widest uppercase bg-yellow-400/90 text-black rounded-full shadow-md">
                {content.hero.badge[language]}
              </span>
              <img src="/durgalogo.png" alt="Durga Logo" className="h-24 mb-4 drop-shadow-xl" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4">
                {content.hero.title[language]}
              </h1>
              <div className="w-20 h-[2px] bg-yellow-400 mb-6"></div>
              <p className="text-lg md:text-xl font-medium mb-4 max-w-2xl text-white/90">
                {content.hero.tagline[language]}
              </p>
              <p className="text-sm md:text-base max-w-3xl mb-8 leading-relaxed text-white/80">
                {content.hero.description[language]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition"
                >
                  {content.hero.btnMenu[language]}
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-black hover:scale-105 transition"
                >
                  {content.hero.btnContact[language]}
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
                idx === current ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2 relative pl-8" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="absolute left-0 top-0 h-full w-1 bg-[#C1440E] rounded-full"></span>
            <h2 className="text-4xl font-serif text-[#C1440E] mb-6">{content.story.heading[language]}</h2>
            <p className="text-[#3B2F2F] text-base md:text-lg leading-relaxed mb-4 font-[Poppins]">{content.story.p1[language]}</p>
            <p className="text-[#3B2F2F] text-base md:text-lg leading-relaxed mb-6 font-[Poppins]">{content.story.p2[language]}</p>
            <Link to="/about">
              <button className="bg-[#C1440E] text-white px-7 py-3 rounded-lg font-[Poppins] font-semibold hover:bg-[#D65B39] transition duration-300 shadow-md">
                {content.story.btn[language]}
              </button>
            </Link>
          </motion.div>
          <motion.div className="md:w-1/2 relative flex justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src={Hero} alt="Durga Thali" className="relative w-full max-w-full md:max-w-md rounded-2xl shadow-lg object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ================= SPECIAL THALI ================= */}
      <section className="bg-[#FFF8F1] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B2E1F] mb-3">{content.specialThali.heading[language]}</h2>
          <h3 className="text-xl md:text-2xl font-[Poppins] text-gray-700 mb-12">{content.specialThali.subHeading[language]}</h3>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#C1440E] rounded-3xl hidden md:block"></div>
              <img src={DurgaThali} alt="Special Maharashtrian Thali" className="relative rounded-3xl shadow-2xl w-full object-cover" />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-lg md:text-xl text-[#3B2F2F] leading-relaxed mb-6 font-[Poppins]">{content.specialThali.description1[language]}</p>
              <p className="text-base text-gray-600 mb-8 font-[Poppins]">{content.specialThali.description2[language]}</p>
              <a href="/menu" className="inline-block bg-[#C1440E] text-white px-8 py-3 rounded-full font-semibold font-[Poppins] shadow-md hover:bg-[#D65B39] transition duration-300">{content.specialThali.btnMenu[language]}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPENING TIME ================= */}
      <section className="relative bg-fixed bg-center bg-cover py-28" style={{ backgroundImage: `url(${khanavalthali})` }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#F6C84C] font-[Playfair_Display] tracking-wide">{content.openingTime.heading[language]}</h2>
          <p className="text-lg md:text-xl mb-12 text-white/90 font-[Poppins]">{content.openingTime.description[language]}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl mb-3 text-[#F6C84C] font-[Playfair_Display]">{content.openingTime.lunch.title[language]}</h3>
              <p className="text-lg font-[Poppins] tracking-wide">{content.openingTime.lunch.time}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl mb-3 text-[#F6C84C] font-[Playfair_Display]">{content.openingTime.dinner.title[language]}</h3>
              <p className="text-lg font-[Poppins] tracking-wide">{content.openingTime.dinner.time}</p>
            </div>
          </div>
          <p className="mt-12 text-sm text-white/80 font-[Poppins]">{content.openingTime.note[language]}</p>
        </div>
      </section>

      {/* ================= REGAL INDULGENCE ================= */}
      <section className="relative bg-[#F6ECDC] py-24 overflow-hidden">
  {/* Decorative Background Elements */}
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

  {/* Main Card */}
  <div className="relative bg-white max-w-6xl mx-auto px-6 py-16 shadow-xl rounded-3xl">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <img
          src={regalImage}
          alt={
            language === "en"
              ? "Regal Dining Experience"
              : language === "mr"
              ? "राजेशाही जेवणाचा अनुभव"
              : "शाही भोजन अनुभव"
          }
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="text-center md:text-left">
        <p className="tracking-[0.3em] text-sm text-[#B08968] mb-4 font-semibold">
          {language === "en"
            ? "REGAL INDULGENCE"
            : language === "mr"
            ? "राजेशाही अनुभव"
            : "शाही आनंद"}
        </p>

        <div className="flex md:justify-start justify-center mb-6">
          <span className="text-[#C1440E] text-xl">✺</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif text-[#1F1F1F] mb-8">
          {content.regal.title[language]}
        </h2>

        <div className="max-w-xl text-[#444] text-base md:text-lg leading-relaxed space-y-6">
          <p>{content.regal.description1[language]}</p>
          <p>{content.regal.description2[language]}</p>
          <p>{content.regal.description3[language]}</p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl hidden md:block"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif text-center text-[#8B2E1F] mb-16">
            {content.chooseUs.heading[language]}
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="grid md:grid-cols-3 gap-10">
            {[content.chooseUs.card1, content.chooseUs.card2, content.chooseUs.card3].map((card, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className={`group rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden ${i===0?"bg-[#FFF3E8]":i===1?"bg-[#E6F7EF]":"bg-[#FFF1E6]"}`}>
                <div className={`absolute inset-0 ${i===0?"bg-gradient-to-br from-yellow-400/20":i===1?"from-green-400/20":"from-orange-400/20"} to-transparent opacity-0 group-hover:opacity-60 transition duration-300 rounded-3xl`}></div>
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${i===0?"bg-yellow-400 text-black":i===1?"bg-green-500 text-white":"bg-orange-500 text-white"} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {i===0?<UtensilsCrossed/>:i===1?<Leaf/>:<IndianRupee/>}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#8B2E1F]">{card.title[language]}</h3>
                <p className="text-[#555] leading-relaxed">{card.desc[language]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
