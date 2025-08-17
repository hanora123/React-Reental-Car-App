import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <article className="car-card">
      <img src={car.image} alt={`${car.brand} ${car.model}`} />
      <div className="car-card-head">
        <div>
          <h4>{car.brand}</h4>
          <h5>{car.model}</h5>
        </div>
        <div className="price-badge">
          <span>${car.price}</span><small>per day</small>
        </div>
      </div>
      <div className="car-card-meta">
        <small><i className="fa-solid fa-cog"></i>{car.gearbox}</small>
        <small><i className="fa-solid fa-gas-pump"></i> {car.fuel}</small>
        <small><i className="fa-solid fa-snowflake"></i>Air Conditioner</small>
      </div>
      <Link to={`/details/${car.id}`} className="btn">View Details</Link>
    </article>
  );
};

export default CarCard; 