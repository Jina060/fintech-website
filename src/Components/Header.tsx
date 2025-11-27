import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Added Menu and X icons

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Feature' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 2xl:px-35 lg:px-30">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-white text-2xl 2xl:text-3xl font-semibold font-[poppins]">Paylinx</span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-8 text-white font-[poppins] font-light text-sm 2xl:text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-blue-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Sign In Button */}
          <button className="hidden lg:block hover:bg-blue-700 border border-white text-white font-medium 2xl:text-lg text-sm font-[poppins] py-2 px-7 rounded-lg transition-colors">
            Sign In
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu (Fullscreen Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-linear-to-br from-[#0a1f44] to-[#122b5f] z-50 flex flex-col items-center justify-center lg:hidden mt-10">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center space-y-8 text-white text-2xl">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-blue-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Sign In Button */}
          <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Sign In
          </button>
        </div>
      )}
    </>
  );
};

export default Header;