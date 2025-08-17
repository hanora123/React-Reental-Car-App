import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header" role="banner">
      <div className="logo-container">
        <i className="fa-solid fa-car"></i>
        <div className="logo">Car Rental</div>
      </div>
      <nav className="nav" aria-label="Primary">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/vehicles" className={isActive('/vehicles')}>Vehicles</Link>
        <Link to="/details" className={isActive('/details')}>Details</Link>
        <Link to="/about" className={isActive('/about')}>About Us</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
      </nav>
      <div className="contact-info" aria-label="Contact">
        <div className="icon-circle"><i className="fa-solid fa-phone"></i></div>
        <a className="phone-number" href="tel:+123456789">+123 456 6789</a>
        <button className="btn-primary">Book Now</button>
      </div>
    </header>
  );
};

export default Header; 