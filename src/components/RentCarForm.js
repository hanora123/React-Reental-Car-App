import React from 'react';

const RentCarForm = ({ cars, selectedCar }) => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="car" className="block text-sm font-medium text-gray-700">Car</label>
        <select id="car" name="car" defaultValue={selectedCar} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select a car</option>
          {cars.map(car => (
            <option key={car.id} value={car.id}>{car.brand} {car.model}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">Pickup Date</label>
        <input type="date" id="pickup-date" name="pickup-date" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="return-date" className="block text-sm font-medium text-gray-700">Return Date</label>
        <input type="date" id="return-date" name="return-date" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700">Rent Now</button>
    </form>
  );
};

export default RentCarForm;
