import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Home = () => {
  const featuredCars = cars.slice(0, 3);

  return (
    <main className="hero" role="main">
      {/* Hero Section */}
      <section className="hero-text" aria-labelledby="hero-title">
        <h1 id="hero-title">Premium Car Rental Service</h1>
        <p>Experience luxury and comfort with our premium selection of rental vehicles</p>
        <div className="price">
          <h2>Starting from $25</h2><h6>/day</h6>
        </div>
        <Link to="/vehicles" className="btn-primary">Browse Cars</Link>
      </section>

      {/* Featured Cars */}
      <section className="other-cars" aria-labelledby="featured-cars-title">
        <div className="other-cars-header">
          <h2 id="featured-cars-title">Featured Cars</h2>
          <Link to="/vehicles">View All ➔</Link>
        </div>

        <div className="car-list">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home; 