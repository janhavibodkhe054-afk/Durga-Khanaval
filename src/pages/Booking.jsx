import { useState, useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hotel1 from "../assets/Hotel1.jpeg";
import { LanguageContext } from "../context/LanguageContext";

export default function Booking() {
  const { language } = useContext(LanguageContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    notes: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      language === "en"
        ? "Reservation request submitted! (Static only)"
        : language === "mr"
        ? "आरक्षण विनंती सादर झाली! (केवळ स्थिर)"
        : "आरक्षण अनुरोध जमा किया गया! (केवल स्थैतिक)"
    );
  }

  return (
    <div className="bg-[#FFF6ED] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(64,18,12,0.85), rgba(64,18,12,0.85)), url(${Hotel1})`,
        }}
      >
        <div className="text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            {language === "en"
              ? "Durga Khanawal"
              : language === "mr"
              ? "दुर्गा खानावळ"
              : "दुर्गा खानावल"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-3 text-[#FFD6B0] tracking-wide"
          >
            {language === "en"
              ? "Since 1934 • Authentic Maharashtrian Taste"
              : language === "mr"
              ? "१९३४ पासून • अस्सल महाराष्ट्रीयन चव"
              : "1934 से • पारंपरिक महाराष्ट्रीय स्वाद"}
          </motion.p>
        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT INFO */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-[#8B2E1F]">
              {language === "en"
                ? "Reserve Your Table"
                : language === "mr"
                ? "आपले टेबल आरक्षित करा"
                : "अपनी मेज़ आरक्षित करें"}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "Enjoy a heritage dining experience passed down through generations. Reserve your seat and relish timeless flavors."
                : language === "mr"
                ? "पिढ्यानपिढ्या जपलेला अस्सल जेवणाचा अनुभव. आजच आपले टेबल आरक्षित करा."
                : "पीढ़ियों से चली आ रही पारंपरिक भोजन परंपरा का आनंद लें।"}
            </p>

            <div className="bg- text-black ">
              <p className="text-lg font-semibold">
                {language === "en"
                  ? "Call for Quick Booking"
                  : language === "mr"
                  ? "त्वरित बुकिंगसाठी कॉल करा"
                  : "त्वरित बुकिंग के लिए कॉल करें"}
              </p>
              <p className="mt-1 text-[#8B2E1F]">+91 98765 43210</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder={language === "en" ? "Full Name" : language === "mr" ? "पूर्ण नाव" : "पूरा नाम"}
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder={language === "en" ? "Phone Number" : language === "mr" ? "फोन नंबर" : "फोन नंबर"}
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none"
                />

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none"
                />
              </div>

              <select
                name="people"
                value={form.people}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none"
              >
                <option value="">
                  {language === "en"
                    ? "Number of Guests"
                    : language === "mr"
                    ? "लोकसंख्या"
                    : "मेहमानों की संख्या"}
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
              </select>

              <textarea
                name="notes"
                rows="3"
                placeholder={
                  language === "en"
                    ? "Special Requests (Optional)"
                    : language === "mr"
                    ? "विशेष विनंत्या (ऐच्छिक)"
                    : "विशेष अनुरोध (वैकल्पिक)"
                }
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8B2E1F] outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#8B2E1F] hover:bg-[#6F2419] text-white py-3 rounded-xl font-semibold tracking-wide transition-transform hover:scale-105"
              >
                {language === "en"
                  ? "Confirm Reservation"
                  : language === "mr"
                  ? "आरक्षण निश्चित करा"
                  : "आरक्षण की पुष्टि करें"}
              </button>

            </form>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
