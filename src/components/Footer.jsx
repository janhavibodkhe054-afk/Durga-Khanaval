import React, { useContext } from "react";
import logo from "../assets/logo.jpeg"; // hotel logo
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-black text-gray-300">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO + NAME */}
        <div className="flex flex-col items-start md:items-start">
          <img src={logo} alt="Durga Khanawal Logo" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
          <h3 className="text-2xl font-bold text-white mb-1">
            {language === "en" ? "Durga Khanawal" : language === "mr" ? "दुर्गा खानावळ" : "दुर्गा खानावल"}
          </h3>
          <p className="text-gray-400">
            {language === "en" ? "Pure Veg • Since 1934" : language === "mr" ? "प्युअर व्हेज • 1934 पासून" : "शुद्ध शाकाहारी • 1934 से"}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            {language === "en" ? "Quick Links" : language === "mr" ? "जलद दुवे" : "त्वरित लिंक"}
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors">
                {language === "en" ? "Home" : language === "mr" ? "मुख्यपृष्ठ" : "मुखपृष्ठ"}
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-400 transition-colors">
                {language === "en" ? "Menu" : language === "mr" ? "मेनू" : "मेनू"}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition-colors">
                {language === "en" ? "About Us" : language === "mr" ? "आमच्याबद्दल" : "हमारे बारे में"}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition-colors">
                {language === "en" ? "Contact" : language === "mr" ? "संपर्क" : "संपर्क"}
              </a>
            </li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
  <h4 className="text-xl font-semibold text-white mb-4">
    {language === "en"
      ? "Address"
      : language === "mr"
      ? "पत्ता"
      : "पता"}
  </h4>

  <a
    href="https://maps.app.goo.gl/ZFd4bxnUrzT35Xc89"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-yellow-400 transition-colors leading-relaxed"
  >
    {language === "en" && (
      <>
        Fata, Satara–Lonand Road,<br />
        Post Wathar Station,<br />
        Tal. Koregaon, Dist. Satara,<br />
        Maharashtra – 415524
      </>
    )}

    {language === "mr" && (
      <>
        मु. पो. वाठार स्टेशन,<br />
        ता. कोरेगाव, जि. सातारा,<br />
        सातारा – लोणंद रस्ता,<br />
        पिनकोड : 415524
      </>
    )}

    {language === "hi" && (
      <>
        मु. पो. वाठार स्टेशन,<br />
        तह. कोरेगांव, जिला सातारा,<br />
        सातारा – लोणंद रोड,<br />
        पिन कोड : 415524
      </>
    )}
  </a>
</div>


        {/* CONTACT + SOCIAL */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            {language === "en" ? "Contact" : language === "mr" ? "संपर्क" : "संपर्क"}
          </h4>
          <p className="mb-4">
            <strong>{language === "en" ? "Phone:" : language === "mr" ? "फोन:" : "फ़ोन:"} </strong>
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
        © {new Date().getFullYear()}{" "}
        {language === "en" ? "Durga Khanawal" : language === "mr" ? "दुर्गा खानावळ" : "दुर्गा खानावल"}.{" "}
        {language === "en" ? "All Rights Reserved." : language === "mr" ? "सर्व हक्क राखीव." : "सभी अधिकार सुरक्षित."}
      </div>
    </footer>
  );
}
