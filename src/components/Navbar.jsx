import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBook, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // For animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/about', label: 'About', icon: FaUser },
    { to: '/skills', label: 'Skills', icon: FaCode },
    { to: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { to: '/blog', label: 'Blog', icon: FaBook },
    { to: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  // Scroll to top and close mobile menu when the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setIsOpen(false); // Close the mobile menu
  }, [location]);

  // Check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#4B3B2F] to-[#3A2F26] text-gray-300 shadow-md h-16 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Branding */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-white hover:text-[#F5F3EF] transition">
          <span className="text-white">A</span>JM
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
                isActive(link.to)
                  ? 'bg-[#F5F3EF] text-[#4B3B2F]' // Active link style
                  : 'text-gray-100 hover:bg-[#F5F3EF] hover:text-[#4B3B2F]' // Inactive link style
              }`}
              aria-current={isActive(link.to) ? 'page' : undefined}
            >
              <link.icon className="text-lg" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-100 hover:bg-gray-700 transition focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-[#4B3B2F] to-[#3A2F26] text-gray-300 py-4 px-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? 'bg-[#F5F3EF] text-[#4B3B2F]' // Active link style
                    : 'text-gray-100 hover:bg-[#F5F3EF] hover:text-[#4B3B2F]' // Inactive link style
                }`}
                aria-current={isActive(link.to) ? 'page' : undefined}
              >
                <link.icon className="text-lg" />
                <span>{link.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;