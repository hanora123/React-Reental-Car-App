import React, { useState, useEffect } from 'react';

const RentCarForm = ({ cars, selectedCar: initialSelectedCar }) => {
  const [selectedCar, setSelectedCar] = useState(initialSelectedCar || '');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setSelectedCar(initialSelectedCar || '');
  }, [initialSelectedCar]);

  useEffect(() => {
    if (selectedCar && pickupDate && returnDate) {
      const car = cars.find(c => c.id === parseInt(selectedCar));
      if (car) {
        const pickup = new Date(pickupDate);
        const ret = new Date(returnDate);
        if (ret > pickup) {
          const days = Math.ceil((ret - pickup) / (1000 * 60 * 60 * 24));
          setTotalPrice(days * car.price);
        } else {
          setTotalPrice(0);
        }
      }
    } else {
      setTotalPrice(0);
    }
  }, [selectedCar, pickupDate, returnDate, cars]);

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="car" className="block text-sm font-medium text-gray-700">Car</label>
        <select id="car" name="car" value={selectedCar} onChange={e => setSelectedCar(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select a car</option>
          {cars.map(car => (
            <option key={car.id} value={car.id}>{car.brand} {car.model}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">Pickup Date</label>
        <input type="date" id="pickup-date" name="pickup-date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="return-date" className="block text-sm font-medium text-gray-700">Return Date</label>
        <input type="date" id="return-date" name="return-date" value={returnDate} onChange={e => setReturnDate(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      {totalPrice > 0 && (
        <div className="mb-4 text-center text-lg font-semibold">
          Total Price: ${totalPrice}
        </div>
      )}
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700">Rent Now</button>
    </form>
  );
};

export default RentCarForm;
