import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hotel1 from "../assets/Hotel1.jpeg";

export default function Booking() {
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
    alert("Reservation request submitted! (Static only)");
  }

  

  

  return (
    <>
      {/* ================= BOOKING PAGE ================= */}
      <section className="min-h-screen grid md:grid-cols-2 bg-[#FFF8F1] pt-28 pb-24 overflow-x-hidden">

        {/* ================= IMAGE PANEL ================= */}
        {/* Mobile image first */}
        <div className="relative md:hidden flex items-center justify-center mb-8">
          <div
            className="w-full h-64 sm:h-80 bg-cover bg-center rounded-3xl shadow-xl"
            style={{
              backgroundImage: `linear-gradient(
                rgba(92,26,18,0.85),
                rgba(92,26,18,0.85)
              ), url(${Hotel1})`,
            }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center text-white px-6">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
                Durga खानावळ
              </h1>
              <p className="text-sm sm:text-base text-[#FFDAB3] tracking-wide">
                स्थापना १९३४ • ९०+ वर्षांचा वारसा
              </p>
            </div>
          </div>
        </div>

        {/* Left image panel for desktop */}
        <div
          className="relative hidden md:flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(
              rgba(92,26,18,0.85),
              rgba(92,26,18,0.85)
            ), url(${Hotel1})`,
          }}
        >
          <div className="text-center text-white px-10">
            <h1 className="text-5xl font-serif font-bold mb-4">
              Durga खानावळ
            </h1>
            <p className="text-lg tracking-wide text-[#FFDAB3]">
              स्थापना १९३४ • ९०+ वर्षांचा वारसा
            </p>
          </div>
        </div>

        {/* ================= RIGHT FORM PANEL ================= */}
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#8B2E1F] mb-2 text-center">
              Reserve a Table
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
              Book your traditional dining experience
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2E1F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2E1F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2E1F]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2E1F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  No. of People
                </label>
                <select
                  name="people"
                  value={form.people}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2E1F]"
                >
                  <option value="">Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Special Requests
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Birthday / Anniversary / Party"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2E1F]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2E1F] hover:bg-[#6F2419] text-white py-3 rounded-xl font-semibold tracking-wide transition"
              >
                Submit Reservation
              </button>
            </form>
          </div>
        </div>

      </section>
    </>
  );
}
