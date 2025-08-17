import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="hero" role="main">
      <section className="hero-text" aria-labelledby="contact-title">
        <h1 id="contact-title">Contact Us</h1>
        <p>Get in touch with us for any inquiries or support</p>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="icon-circle2"><i className="fa-solid fa-location-dot"></i></div>
              <div><strong>Address</strong><p>123 Main St, City</p></div>
            </div>
            <div className="info-item">
              <div className="icon-circle2"><i className="fa-solid fa-envelope"></i></div>
              <div><strong>Email</strong><p><a href="mailto:info@example.com">info@example.com</a></p></div>
            </div>
            <div className="info-item">
              <div className="icon-circle2"><i className="fa-solid fa-phone"></i></div>
              <div><strong>Phone</strong><p><a href="tel:+123456789">+123 456 6789</a></p></div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 