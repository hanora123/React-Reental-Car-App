import React from 'react';
import { useParams } from 'react-router-dom';
import { getCarById, cars } from '../data/cars';
import SpecCard from '../components/SpecCard';
import CarCard from '../components/CarCard';

const Details = () => {
  const { id } = useParams();
  const car = getCarById(id) || cars[0]; // Default to first car if not found

  const otherCars = cars.filter(c => c.id !== car.id).slice(0, 6);

  return (
    <main id="main" className="hero" role="main">
      {/* Left column (visuals) */}
      <section className="hero-text" aria-labelledby="car-title">
        <h1 id="car-title">{car.brand}</h1>
        <div className="price">
          <h2>${car.price}</h2><h6>/day</h6>
        </div>

        <div className="hero-media">
          <img src={car.image} alt={`${car.brand} sedan front three-quarter view`} />
        </div>

        {car.images && (
          <div className="car-photo" aria-label="Gallery">
            {car.images.map((image, index) => (
              <img key={index} src={image} alt={`${car.brand} view ${index + 1}`} />
            ))}
          </div>
        )}
      </section>

      {/* Right column (specs) */}
      <section id="car-details" className="car-details" aria-labelledby="specs-title">
        <h2 id="specs-title" className="section-title">Technical Specification</h2>

        <div className="grid-container">
          {car.specs && car.specs.map((spec, index) => (
            <SpecCard key={index} spec={spec} />
          ))}
        </div>

        <button className="btn-primary" aria-label="Rent this car">Rent a car</button>

        {car.equipment && (
          <div className="car-equipment">
            <h2 className="section-title">Car Equipment</h2>
            <ul className="equipment-list" aria-label="Car Equipment List">
              {car.equipment.map((item, index) => (
                <li key={index}>
                  <span className="checkbox-custom checked" aria-hidden="true"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Other Cars */}
      <section className="other-cars" aria-labelledby="other-cars-title">
        <div className="other-cars-header">
          <h3 id="other-cars-title">Other cars</h3>
          <button className="footer-link">View All ➔</button>
        </div>

        <div className="car-list">
          {otherCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Details; 