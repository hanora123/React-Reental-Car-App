import React from 'react';

const About = () => {
  return (
    <main className="hero" role="main">
      <section className="hero-text" aria-labelledby="about-title">
        <h1 id="about-title">About Car Rental</h1>
        <p>We are a premium car rental service dedicated to providing exceptional vehicles and outstanding customer service.</p>
        
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>To provide reliable, high-quality vehicles for all your transportation needs with exceptional customer service and competitive pricing.</p>
          
          <h2>Why Choose Us</h2>
          <ul>
            <li>Premium vehicle selection</li>
            <li>Competitive pricing</li>
            <li>24/7 customer support</li>
            <li>Flexible rental terms</li>
            <li>Well-maintained vehicles</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About; 