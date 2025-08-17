export const cars = [
  {
    id: 1,
    brand: 'BMW',
    model: 'Sedan',
    price: 25,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'Petrol',
    specs: [
      {
        name: 'Gear Box',
        value: 'Automatic',
        icon: 'fa-solid fa-cog',
        iconType: 'icon'
      },
      {
        name: 'Fuel',
        value: 'Petrol',
        icon: 'fa-solid fa-gas-pump',
        iconType: 'icon'
      },
      {
        name: 'Doors',
        value: '4',
        icon: 'fa-solid fa-door-open',
        iconType: 'icon'
      },
      {
        name: 'Air Conditioner',
        value: 'Yes',
        icon: 'fa-solid fa-snowflake',
        iconType: 'icon'
      },
      {
        name: 'Seats',
        value: '5',
        icon: 'fa-solid fa-chair',
        iconType: 'icon'
      },
      {
        name: 'Distance',
        value: '800',
        icon: 'fa-solid fa-road',
        iconType: 'icon'
      }
    ],
    equipment: ['A/C', 'ABS', 'Air Bags', 'Air Conditioner', 'Cruise Control'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 2,
    brand: 'Mercedes',
    model: 'Sedan',
    price: 250,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'PB95'
  },
  {
    id: 3,
    brand: 'Mercedes',
    model: 'Sport',
    price: 500,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'PB95'
  },
  {
    id: 4,
    brand: 'Mercedes',
    model: 'Sedan',
    price: 550,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'PB95'
  },
  {
    id: 5,
    brand: 'Porsche',
    model: 'Sedan',
    price: 600,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'PB95'
  },
  {
    id: 6,
    brand: 'Toyota',
    model: 'Sedan',
    price: 450,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'PB95'
  },
  {
    id: 7,
    brand: 'Porsche',
    model: 'SUV',
    price: 500,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
    gearbox: 'Automatic',
    fuel: 'PB95'
  }
];

export const getCarById = (id) => {
  return cars.find(car => car.id === parseInt(id));
}; 