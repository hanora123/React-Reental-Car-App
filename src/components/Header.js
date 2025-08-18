import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'text-indigo-600 bg-indigo-100' : 'text-gray-700 hover:bg-gray-100';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-car text-3xl text-indigo-600"></i>
          <div className="text-2xl font-bold">Car Rental</div>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`absolute md:relative top-16 left-0 md:top-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:gap-4`} aria-label="Primary">
          <Link to="/" className={`block md:inline-block px-4 py-2 rounded-lg ${isActive('/')} link-hover`} onClick={closeMenu}>Home</Link>
          <Link to="/vehicles" className={`block md:inline-block px-4 py-2 rounded-lg ${isActive('/vehicles')} link-hover`} onClick={closeMenu}>Vehicles</Link>
          <Link to="/details" className={`block md:inline-block px-4 py-2 rounded-lg ${isActive('/details')} link-hover`} onClick={closeMenu}>Details</Link>
          <Link to="/about" className={`block md:inline-block px-4 py-2 rounded-lg ${isActive('/about')} link-hover`} onClick={closeMenu}>About Us</Link>
          <Link to="/contact" className={`block md:inline-block px-4 py-2 rounded-lg ${isActive('/contact')} link-hover`} onClick={closeMenu}>Contact Us</Link>
        </nav>

        {/* Desktop Contact Info */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <i className="fa-solid fa-phone"></i>
            </div>
            <a className="font-semibold" href="tel:+123456789">+123 456 6789</a>
          </div>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 btn-hover">Book Now</button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;