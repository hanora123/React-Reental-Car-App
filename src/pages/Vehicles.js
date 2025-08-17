import React from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Vehicles = () => {
  return (
    <main className="vehicles-page" role="main">
      <div className="vehicles-container">
        <section className="vehicles-header" aria-labelledby="vehicles-title">
          <h1 id="vehicles-title">Available Vehicles</h1>
          <p>Choose from our premium selection of rental cars</p>
        </section>

        <section className="vehicles-grid" aria-label="Vehicle Catalog">
          <div className="car-list">
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Vehicles; 