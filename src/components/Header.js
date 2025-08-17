import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="logo-container">
        <i className="fa-solid fa-car"></i>
        <div className="logo">Car Rental</div>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Primary">
        <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
        <Link to="/vehicles" className={isActive('/vehicles')} onClick={closeMenu}>Vehicles</Link>
        <Link to="/details" className={isActive('/details')} onClick={closeMenu}>Details</Link>
        <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About Us</Link>
        <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact Us</Link>
      </nav>

      {/* Desktop Contact Info */}
      <div className="contact-info" aria-label="Contact">
        <div className="icon-circle"><i className="fa-solid fa-phone"></i></div>
        <a className="phone-number" href="tel:+123456789">+123 456 6789</a>
        <button className="btn-primary">Book Now</button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="nav-overlay active" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header; 