import React from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Vehicles = () => {
  return (
    <main className="hero" role="main">
      <section className="other-cars" aria-labelledby="vehicles-title">
        <div className="other-cars-header">
          <h1 id="vehicles-title">Available Vehicles</h1>
          <p>Choose from our premium selection of rental cars</p>
        </div>

        <div className="car-list">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Vehicles; 