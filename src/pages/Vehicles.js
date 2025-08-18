import React from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Vehicles = () => {
  return (
    <main className="container mx-auto px-4 py-8" role="main">
      <section className="text-center mb-12" aria-labelledby="vehicles-title">
        <h1 id="vehicles-title" className="text-5xl font-bold mb-4">Available Vehicles</h1>
        <p className="text-lg text-gray-600">Choose from our premium selection of rental cars</p>
      </section>

      <section aria-label="Vehicle Catalog">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Vehicles;
