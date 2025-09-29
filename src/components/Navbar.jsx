import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Company", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Channel Partners", path: "/partner" },
    { name: "News & Events", path: "/news" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
          <span className="text-2xl font-bold tracking-wide">Zenithal Chemicals</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium hover:text-yellow-400 transition ${
                location.pathname === link.path ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 rounded hover:bg-gray-700 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full bg-gray-900 border-t border-gray-700 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block font-medium py-2 px-4 rounded hover:bg-gray-800 transition ${
                location.pathname === link.path ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
