import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 block
     ${
       isActive
         ? "text-[#C1440E] after:w-full after:opacity-100"
         : "text-gray-700 hover:text-black after:w-0 after:opacity-0"
     }
     after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-[#C1440E]
     after:transition-all after:duration-300`;

  const links = [
    { path: "/", name: { en: "Home", hi: "होम", mr: "मुख्य" } },
    {
      path: "/about",
      name: { en: "About", hi: "हमारे बारे में", mr: "आमच्या विषयी" },
    },
    { path: "/menu", name: { en: "Menu", hi: "मेनू", mr: "मेनू" } },
    { path: "/booking", name: { en: "Booking", hi: "बुकिंग", mr: "बुकिंग" } },
    {
      path: "/highlights",
      name: { en: "Highlights", hi: "हाइलाइट्स", mr: "हायलाइट्स" },
    },
    {
      path: "/organic",
      name: { en: "Organic Farm", hi: "ऑर्गेनिक फार्म", mr: "सेंद्रिय शेती" },
    },
    { path: "/contact", name: { en: "Contact", hi: "संपर्क", mr: "संपर्क" } },
  ];

  const callText =
    language === "en"
      ? "Call Us"
      : language === "hi"
      ? "हमें कॉल करें"
      : "आम्हाला कॉल करा";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300
      ${scrolled ? "shadow-xl" : "shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/durgalogo.png"
            alt="Durga Khanaval"
            className="h-10 md:h-11"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-wide uppercase">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={navLinkClass}
              >
                {link.name[language]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4">
          {/* CALL BUTTON */}
          <a
            href="tel:09922210002"
            className="rounded-full px-6 py-2.5 text-sm font-semibold
            bg-[#C1440E] text-white hover:bg-black transition-all duration-300"
          >
            {callText} · 09922210002
          </a>

          {/* LANGUAGE SELECT - DESKTOP */}
          <div className="relative group">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="
                appearance-none cursor-pointer
                rounded-full pl-4 pr-11 py-2 text-sm font-semibold
                bg-white text-gray-800
                border border-gray-300
                transition-all duration-200
                hover:border-[#C1440E]
                hover:text-[#C1440E]
                focus:outline-none
                focus:border-[#C1440E]
                focus:ring-2 focus:ring-[#C1440E]/40
                active:scale-[0.98]
              "
            >
              <option value="mr">मराठी</option>
              <option value="hi">हिंदी</option>
              <option value="en">English</option>
            </select>

            <ChevronDown
              size={16}
              className="
                pointer-events-none absolute right-3 top-1/2 -translate-y-1/2
                text-gray-500 transition-colors
                group-hover:text-[#C1440E]
              "
            />
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#C1440E]"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300
        ${open ? "max-h-[700px] shadow-lg" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5 text-sm font-semibold uppercase">
          {links.map((link) => (
            <li key={link.path} onClick={() => setOpen(false)}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={navLinkClass}
              >
                {link.name[language]}
              </NavLink>
            </li>
          ))}

          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:09049525219"
            className="mt-3 inline-block text-center rounded-full py-3
            bg-[#C1440E] text-white hover:bg-black transition-all duration-300"
          >
            {callText} · 09049525219
          </a>

          {/* LANGUAGE SELECT - MOBILE */}
          <div className="relative mt-3 group">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="
    w-full appearance-none cursor-pointer
    rounded-full pl-4 pr-12 py-3 text-sm font-semibold
    bg-white text-gray-800
    border border-gray-300
    transition-all duration-200

    hover:border-[#C1440E]
    hover:text-[#C1440E]

    focus:outline-none
    focus:border-[#C1440E]
    focus:ring-2 focus:ring-[#C1440E]/40

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#C1440E]/40

    active:scale-[0.98]
  "
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
            </select>

            <ChevronDown
              size={18}
              className="
                pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
                text-gray-500 transition-colors
                group-hover:text-[#C1440E]
              "
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
