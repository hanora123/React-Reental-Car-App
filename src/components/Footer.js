import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="info-item">
          <div className="icon-circle2"><i className="fa-solid fa-location-dot"></i></div>
          <div><strong>Address</strong><p>123 Main St, City</p></div>
        </div>
        <div className="info-item">
          <div className="icon-circle2"><i className="fa-solid fa-envelope"></i></div>
          <div><strong>Email</strong><p><a className="footer-phone" href="mailto:info@example.com">info@example.com</a></p></div>
        </div>
        <div className="info-item">
          <div className="icon-circle2"><i className="fa-solid fa-phone"></i></div>
          <div><strong>Phone</strong><p><a className="footer-phone" href="tel:+123456789">+123 456 6789</a></p></div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <div className="logo-container2">
            <i className="fa-solid fa-car"></i>
            <div className="logo">Car Rental</div>
          </div>
          <p>Premium rentals with great support and easy booking.</p>

          <div className="store-badges">
            <button className="store-badge appstore" aria-label="Download on the App Store">
              <i className="fa-brands fa-apple"></i>
              <span className="small">Download on the</span>
              <span className="big">App Store</span>
            </button>
            <button className="store-badge play" aria-label="Get it on Google Play">
              <i className="fa-brands fa-google-play"></i>
              <span className="small">GET IT ON</span>
              <span className="big">Google Play</span>
            </button>
          </div>

          <div className="socials">
            <button aria-label="Facebook"><i className="fa-brands fa-facebook"></i></button>
            <button aria-label="Instagram"><i className="fa-brands fa-instagram"></i></button>
            <button aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/details">Details</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><button className="footer-link">FAQ</button></li>
            <li><button className="footer-link">Terms</button></li>
            <li><button className="footer-link">Privacy</button></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">© 2025 Car Rental. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 