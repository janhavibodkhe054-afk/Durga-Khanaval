import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import GalleryImg from "../assets/gallery.jpeg"; // <-- image gallery

const OrganicFarm = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="min-h-screen bg-[#FFF6F2] text-gray-800">

      {/* ================= HERO ================= */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139,46,31,0.85), rgba(139,46,31,0.85)), url(${GalleryImg})`,
        }}
      >
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            {language === "en"
              ? "Durga Organic Farm"
              : language === "mr"
              ? "दुर्गा ऑर्गेनिक फार्म"
              : "दुर्गा ऑर्गेनिक फार्म"}
          </h1>
          <p className="text-lg md:text-xl text-[#FFD6CC] max-w-3xl mx-auto">
            {language === "en"
              ? "Pure, chemical-free farming rooted in tradition and sustainability."
              : language === "mr"
              ? "परंपरा आणि टिकाऊ शेतीतून निर्माण झालेली शुद्ध, रासायनिकमुक्त शेती."
              : "परंपरा और टिकाऊ खेती से उगी शुद्ध, रासायनिक-मुक्त उपज।"}
          </p>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={GalleryImg}
          alt="Organic Farm"
          className="rounded-3xl shadow-2xl object-cover h-[420px] w-full"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#8B2E1F] mb-4">
            {language === "en"
              ? "About Our Farm"
              : language === "mr"
              ? "आमच्या शेताबद्दल"
              : "हमारे फार्म के बारे में"}
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {language === "en"
              ? "Nestled in a peaceful rural landscape, our organic farm grows fruits, vegetables and herbs using age-old natural techniques."
              : language === "mr"
              ? "निसर्गरम्य ग्रामीण भागात वसलेले आमचे ऑर्गॅनिक शेत पारंपरिक नैसर्गिक पद्धतींनी शेती करते."
              : "शांत ग्रामीण वातावरण में स्थित हमारा फार्म पारंपरिक प्राकृतिक तकनीकों से खेती करता है।"}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {language === "en"
              ? "Our goal is to serve healthy food while protecting nature and supporting local farmers."
              : language === "mr"
              ? "निसर्गाचे संरक्षण करत निरोगी अन्न देणे हे आमचे ध्येय आहे."
              : "प्रकृति की रक्षा करते हुए स्वस्थ भोजन प्रदान करना हमारा उद्देश्य है।"}
          </p>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="bg-[#8B2E1F] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {language === "en"
              ? "Our Organic Products"
              : language === "mr"
              ? "आमची ऑर्गॅनिक उत्पादने"
              : "हमारे ऑर्गेनिक उत्पाद"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title:
                  language === "en"
                    ? "Vegetables"
                    : language === "mr"
                    ? "भाज्या"
                    : "सब्जियां",
                desc:
                  language === "en"
                    ? "Fresh seasonal vegetables grown without chemicals."
                    : language === "mr"
                    ? "रसायनमुक्त पद्धतीने पिकवलेल्या ताज्या भाज्या."
                    : "बिना रसायन उगाई गई ताज़ी सब्जियां।",
              },
              {
                title:
                  language === "en"
                    ? "Fruits"
                    : language === "mr"
                    ? "फळे"
                    : "फल",
                desc:
                  language === "en"
                    ? "Naturally ripened fruits full of nutrition."
                    : language === "mr"
                    ? "नैसर्गिकरित्या पिकलेली पोषणमूल्यांनी भरलेली फळे."
                    : "पोषक तत्वों से भरपूर प्राकृतिक फल।",
              },
              {
                title:
                  language === "en"
                    ? "Herbs & Spices"
                    : language === "mr"
                    ? "औषधी वनस्पती व मसाले"
                    : "जड़ी-बूटियाँ व मसाले",
                desc:
                  language === "en"
                    ? "Organic herbs enhancing both taste and health."
                    : language === "mr"
                    ? "चव आणि आरोग्य वाढवणाऱ्या ऑर्गॅनिक औषधी वनस्पती."
                    : "स्वास्थ्य और स्वाद बढ़ाने वाली जड़ी-बूटियाँ।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold text-[#8B2E1F] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* ================= CTA ================= */}
      <div className="bg- py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
  {language === "en"
    ? "Visit Durga Khanaval"
    : language === "mr"
    ? "दुर्गा खानावळला भेट द्या"
    : "दुर्गा खानावल आएं"}
</h2>

        <p className="text-black mb-8 max-w-2xl mx-auto">
          {language === "en"
            ? "See, feel and taste the purity of natural farming."
            : language === "mr"
            ? "नैसर्गिक शेतीची शुद्धता प्रत्यक्ष अनुभवा."
            : "प्राकृतिक खेती की शुद्धता का अनुभव करें।"}
        </p>

        <button className="bg-white text-[#8B2E1F] px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
          {language === "en"
            ? "Contact Us"
            : language === "mr"
            ? "संपर्क करा"
            : "संपर्क करें"}
        </button>
      </div>
    </section>
  );
};

export default OrganicFarm;
