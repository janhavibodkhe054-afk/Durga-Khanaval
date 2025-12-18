import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition-all duration-300
     ${
       isActive
         ? "text-[#C1440E] after:w-full after:opacity-100"
         : "text-gray-700 hover:text-black after:w-0 after:opacity-0"
     }
     after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-[#C1440E]
     after:transition-all after:duration-300`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        bg-white shadow-lg
        ${scrolled ? "shadow-xl" : "shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/durgalogo.png" alt="Durga Khanaval" className="h-11" />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-wide uppercase">
          {["/", "/about", "/menu", "/booking", "/highlights", "/contact"].map(
            (path, i) => {
              const names = ["Home", "About", "Menu", "Booking", "Highlights", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className={navLinkClass}
                  >
                    {names[i]}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>

        {/* CALL BUTTON */}
        <a
          href="tel:09049525219"
          className="rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide
                     bg-[#C1440E] text-white hover:bg-black transition-all duration-300"
        >
          Call Us · 09049525219
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
