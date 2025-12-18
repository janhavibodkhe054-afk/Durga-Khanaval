import React from "react";
import logo from "../assets/logo.jpeg"; // hotel logo

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO + NAME */}
        <div className="flex flex-col items-start md:items-start">
          <img src={logo} alt="Durga Khanawal Logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
          <h3 className="text-2xl font-bold text-white mb-1">Durga Khanawal</h3>
          <p className="text-gray-400">Pure Veg • Since 1934</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-400 transition-colors">Menu</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Address</h4>
          <a
            href="https://maps.app.goo.gl/ZFd4bxnUrzT35Xc89"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            Fata, Satara - Lonand Rd, Post Wathar,<br />
            Wathar Station, Maharashtra 415524
          </a>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <p className="mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:09922210002/9822750002" className="hover:text-yellow-400 transition-colors">
              09922210002 / 9822750002
            </a>
          </p>

          <div className="flex space-x-4 mt-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/91992210002?text=Hello%20Durga%20Khanawal%2C%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:text-yellow-400 transition-colors"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/KhanawalDurga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-2xl hover:text-yellow-400 transition-colors"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/durga_khanawal.wathar_st"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:text-yellow-400 transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1EwTjnEZp1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:text-yellow-400 transition-colors"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-900 text-center py-4 text-gray-400 font-medium">
        © {new Date().getFullYear()} Durga Khanawal. All Rights Reserved.
      </div>
    </footer>
  );
}
