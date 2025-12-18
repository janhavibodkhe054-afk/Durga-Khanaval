import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/booking", name: "Booking" },
    { path: "/highlights", name: "Highlights" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300
        ${scrolled ? "shadow-xl" : "shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/durgalogo.png" alt="Durga Khanaval" className="h-10 md:h-11" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-wide uppercase">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === "/"} className={navLinkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DESKTOP CALL BUTTON */}
        <a
          href="tel:09049525219"
          className="hidden md:inline-block rounded-full px-6 py-2.5 text-sm font-semibold
                     bg-[#C1440E] text-white hover:bg-black transition-all duration-300"
        >
          Call Us · 09049525219
        </a>

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
        ${open ? "max-h-[500px] shadow-lg" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5 text-sm font-semibold uppercase">
          {links.map((link) => (
            <li key={link.path} onClick={() => setOpen(false)}>
              <NavLink to={link.path} end={link.path === "/"} className={navLinkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:09049525219"
            className="mt-3 inline-block text-center rounded-full py-3
                       bg-[#C1440E] text-white hover:bg-black transition-all duration-300"
          >
            Call Us · 09049525219
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
