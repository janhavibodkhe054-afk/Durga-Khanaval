import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  }

 return (
  <>
    {/* ================= CONTACT PAGE ================= */}
    <section className="bg-[#FFF8F1] min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B2E1F]">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
          We would love to hear from you — meals, catering, or special events
        </p>
        <div className="w-24 h-1 bg-[#8B2E1F] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ================= LEFT INFO CARD ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2E1F]">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
            Feel free to reach out for daily meals, catering services,
            or any special occasion.
          </p>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <p>
              <strong>📍 Address</strong><br />
              Fata, Satara - Lonand Rd, Post Wathar,<br />
              Wathar Station, Maharashtra 415524
            </p>

            <p>
              <strong>📞 Phone</strong><br />
              <a
                href="tel:09922210002"
                className="text-[#8B2E1F] hover:underline"
              >
                09922210002
              </a>
            </p>

            <p>
              <strong>⏰ Timings</strong><br />
              11:30 AM – 4:30 PM<br />
              7:30 PM – 10:00 PM
            </p>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border shadow-lg">
            <iframe
              title="Durga Khanaval Map"
              className="w-full h-64 sm:h-72 md:h-80"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Durga+Khanaval+Wathar+Station+Satara&output=embed"
            />
          </div>
        </div>

        {/* ================= RIGHT FORM CARD ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2E1F] mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-1 text-sm sm:text-base font-medium">Name</label>
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
              <label className="block mb-1 text-sm sm:text-base font-medium">Email</label>
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
              <label className="block mb-1 text-sm sm:text-base font-medium">Message</label>
              <textarea
                rows="4"
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
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* ================= SUCCESS POPUP ================= */}
    {showPopup && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-8 text-center shadow-2xl animate-scaleIn max-w-md w-full">
          <h3 className="text-2xl font-bold text-[#8B2E1F] mb-2">
            Thank You! 🎉
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Your message has been sent successfully.<br />
            We’ll get back to you soon.
          </p>
        </div>
      </div>
    )}
  </>
);

}
