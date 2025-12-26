import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageContext } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setShowPopup(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        alert(
          language === "en"
            ? "Failed to send message"
            : language === "mr"
            ? "संदेश पाठवण्यात अयशस्वी"
            : "संदेश भेजने में विफल"
        );
      }
    } catch (error) {
      alert(
        language === "en"
          ? "Something went wrong"
          : language === "mr"
          ? "काहीतरी चूक झाली"
          : "कुछ गलत हो गया"
      );
      console.error(error);
    }
  }

  return (
    <div className="bg-[#FFF8F1] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* TITLE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4 sm:px-6 lg:px-12 pt-28 mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B2E1F]">
          {language === "en"
            ? "Contact Us"
            : language === "mr"
            ? "संपर्क करा"
            : "संपर्क करें"}
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
          {language === "en"
            ? "We would love to hear from you — meals, catering, or special events"
            : language === "mr"
            ? "आम्हाला तुमच्याकडून ऐकायला आवडेल — जेवण, कॅटरिंग किंवा खास कार्यक्रमांसाठी"
            : "हमें आपसे सुनकर अच्छा लगेगा — भोजन, कैटरिंग या विशेष आयोजनों के लिए"}
        </p>
        <div className="w-24 h-1 bg-[#8B2E1F] mx-auto mt-6 rounded-full shadow-sm"></div>
      </motion.section>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-12 pb-24">

        {/* LEFT INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2E1F]">
            {language === "en" ? "Get in Touch" : language === "mr" ? "संपर्क साधा" : "संपर्क करें"}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "Feel free to reach out for daily meals, catering services, or any special occasion."
              : language === "mr"
              ? "दैनंदिन जेवण, कॅटरिंग सेवा किंवा कोणत्याही विशेष प्रसंगी संपर्क साधा."
              : "दैनिक भोजन, कैटरिंग सेवाओं या किसी विशेष अवसर के लिए संपर्क करें।"}
          </p>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <p>
              <strong>📍 {language === "en" ? "Address" : language === "mr" ? "पत्ता" : "पता"}</strong>
              <br />
              Fata, Satara - Lonand Rd, Post Wathar,<br />
              Wathar Station, Maharashtra 415524
            </p>
            <p>
              <strong>📞 {language === "en" ? "Phone" : language === "mr" ? "फोन" : "फ़ोन"}</strong>
              <br />
              <a href="tel:09922210002" className="text-[#8B2E1F] hover:underline">
                09922210002
              </a>
            </p>
            <p>
              <strong>⏰ {language === "en" ? "Timings" : language === "mr" ? "वेळा" : "समय"}</strong>
              <br />
              11:30 AM – 4:30 PM<br />
              7:30 PM – 10:00 PM
            </p>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border shadow-lg mt-6">
            <iframe
              title="Durga Khanaval Map"
              className="w-full h-64 sm:h-72 md:h-80"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Durga+Khanaval+Wathar+Station+Satara&output=embed"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2E1F] mb-6">
            {language === "en" ? "Send a Message" : language === "mr" ? "संदेश पाठवा" : "संदेश भेजें"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm sm:text-base font-medium">
                {language === "en" ? "Name" : language === "mr" ? "नाव" : "नाम"}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm sm:text-base font-medium">
                {language === "en" ? "Email" : language === "mr" ? "ईमेल" : "ईमेल"}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm sm:text-base font-medium">
                {language === "en" ? "Message" : language === "mr" ? "संदेश" : "संदेश"}
              </label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B2E1F] hover:bg-[#6F2419] text-white py-3 rounded-xl font-semibold tracking-wide transition text-sm sm:text-base"
            >
              {language === "en" ? "Submit Message" : language === "mr" ? "संदेश पाठवा" : "संदेश भेजें"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <motion.div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <motion.div className="bg-white rounded-2xl p-6 sm:p-8 md:p-8 text-center shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#8B2E1F] mb-2">
              {language === "en" ? "Thank You! 🎉" : language === "mr" ? "धन्यवाद! 🎉" : "धन्यवाद! 🎉"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {language === "en"
                ? "Your message has been sent successfully. We’ll get back to you soon."
                : language === "mr"
                ? "आपला संदेश यशस्वीरित्या पाठविला गेला आहे. आम्ही लवकरच आपल्याशी संपर्क साधू."
                : "आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।"}
            </p>
          </motion.div>
        </motion.div>
      )}

      
    </div>
  );
}
