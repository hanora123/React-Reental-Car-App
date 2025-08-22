import React, { useState } from 'react';
import sedanImg from '../images/cars/sedan.png';
import suvImg from '../images/cars/suv.png';
import mercedesPremiumImg from '../images/cars/mer-premium.png';
import porschePremiumImg from '../images/cars/porche-premium.png';
import toyotaCrossoverImg from '../images/cars/toyota-crossover.png';
import mercedesVanImg from '../images/cars/mercedes-van.png';
import toyotaSedanImg from '../images/cars/toyota-sedan.png';
import defaultCarImg from '../images/cars/22124bcfd303fe6ed4c56d7e9052d896.png';
import mapPinIcon from '../images/icons/map-pin.png';
import mailIcon from '../images/icons/mail.png';
import phoneIcon from '../images/icons/Vector (1).png';
import clockIcon from '../images/icons/clock.png';
import clockInsideIcon from '../images/icons/clock-inside.png';
import logosIcon from '../images/icons/Logos.png';

const carImages = {
  'default': defaultCarImg,
  'mercedes-sedan': sedanImg,
  'mercedes-suv': suvImg,
  'mercedes-premium': mercedesPremiumImg,
  'porsche-premium': porschePremiumImg,
  'toyota-crossover': toyotaCrossoverImg,
  'mercedes-van': mercedesVanImg,
  'toyota-sedan': toyotaSedanImg
};

const iconImages = {
  mapPin: mapPinIcon,
  mail: mailIcon,
  phone: phoneIcon,
  clock: clockIcon,
  clockInside: clockInsideIcon,
  logos: logosIcon
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    carType: 'default',
    rentalPlace: 'Place of rental',
    returnPlace: 'Place of return',
    rentalDate: '',
    returnDate: ''
  });
  
  const [notification, setNotification] = useState(null);
  const [carImage, setCarImage] = useState(carImages['default']);
  const [imageOpacity, setImageOpacity] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'carType') {
      setImageOpacity(0.7);
      setTimeout(() => {
        setCarImage(carImages[value] || carImages['default']);
        setImageOpacity(1);
      }, 300);
    }
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { carType, rentalPlace, returnPlace, rentalDate, returnDate } = formData;
    
    if (!carType || carType === 'default') {
      showNotification('Please select a car type', 'error');
      return;
    }
    
    if (!rentalPlace || rentalPlace === 'Place of rental') {
      showNotification('Please select a rental place', 'error');
      return;
    }
    
    if (!returnPlace || returnPlace === 'Place of return') {
      showNotification('Please select a return place', 'error');
      return;
    }
    
    if (!rentalDate) {
      showNotification('Please select a rental date', 'error');
      return;
    }
    
    if (!returnDate) {
      showNotification('Please select a return date', 'error');
      return;
    }
    
    if (new Date(returnDate) <= new Date(rentalDate)) {
      showNotification('Return date must be after rental date', 'error');
      return;
    }
    
    showNotification('Booking successful! Your car has been reserved.', 'success');
    
    setTimeout(() => {
      setFormData({
        carType: 'default',
        rentalPlace: 'Place of rental',
        returnPlace: 'Place of return',
        rentalDate: '',
        returnDate: ''
      });
      setCarImage(carImages['default']);
    }, 2000);
  };

  const getNotificationStyles = () => {
    if (!notification) return {};
    
    let bgColor, textColor;
    switch(notification.type) {
      case 'success':
        bgColor = 'bg-green-500';
        textColor = 'text-white';
        break;
      case 'error':
        bgColor = 'bg-red-500';
        textColor = 'text-white';
        break;
      case 'warning':
        bgColor = 'bg-yellow-500';
        textColor = 'text-white';
        break;
      default:
        bgColor = 'bg-blue-500';
        textColor = 'text-white';
    }
    
    return `${bgColor} ${textColor} px-4 py-3 rounded-lg shadow-lg flex items-center transform transition-all duration-500`;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-full">
        <div className="w[80] flex justify-center">
          <div className={`${getNotificationStyles()} translate-x-0`}>
            {notification?.message}
          </div>
        </div>
      </div>
      
      <div className="title pt-4 lg:text-5xl">
        <h1 className="capitalize text-center mt-2">contact us</h1>
        <div className="pre text-center">
           <p className="text-gray-500 mt-6">
            Home / <span className="text-gray-800 font-semibold">Contact Us</span>
          </p>
        </div>
      </div>
      
     
      <div className="mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
        <div className="bg-[#5937E0] text-white rounded-xl pt-8 md:pt-16 space-y-4 w-full max-w-md mx-auto md:w-[416px] md:h-[490px] md:mx-36 text-center">
          <h2 className="text-xl font-bold pb-3 text-center">Book your car</h2>
          
          <select
            id="carTypeInput"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="w-[360px] h-[40px] p-2 rounded-2xl text-white bg-purple-700"
          >
            <option value="default">Car type</option>
            <option value="mercedes-sedan">Mercedes-sedan</option>
            <option value="mercedes-suv">Mercedes-suv</option>
            <option value="mercedes-premium">Mercedes-premium</option>
            <option value="porsche-premium">Porsche-premium</option>
            <option value="toyota-crossover">Toyota-crossover</option>
            <option value="mercedes-van">Mercedes-van</option>
            <option value="toyota-sedan">Toyota-sedan</option>
           
          </select>
          
          <select
            id="rentalPlace"
            name="rentalPlace"
            value={formData.rentalPlace}
            onChange={handleChange}
            className="w-[360px] h-[40px] p-2 rounded-2xl text-white bg-purple-700"
          >
            <option>Place of rental</option>
            <option>Zamalek</option>
            <option>Maadi</option>
            <option>Nasr City</option>
            <option>Downtown Cairo</option>
            <option>Mohandessin</option>
            <option>Dokki</option>
            <option>Giza</option>
            <option>New Cairo</option>
            <option>Obour City</option>
            <option>Shubra</option>
            <option>El Rehab</option>
            <option>6th of October City</option>
          </select>
          
          <select
            id="returnPlace"
            name="returnPlace"
            value={formData.returnPlace}
            onChange={handleChange}
            className="w-[360px] h-[40px] p-2 rounded-2xl text-white bg-purple-700"
          >
            <option>Place of return</option>
            <option>Zamalek</option>
            <option>Maadi</option>
            <option>Nasr City</option>
            <option>Downtown Cairo</option>
            <option>Mohandessin</option>
            <option>Dokki</option>
            <option>Giza</option>
            <option>New Cairo</option>
            <option>Obour City</option>
            <option>Shubra</option>
            <option>El Rehab</option>
            <option>6th of October City</option>
          </select>
          
          <input
            id="rentalDate"
            name="rentalDate"
            type="date"
            value={formData.rentalDate}
            onChange={handleChange}
            className="w-[360px] h-[38px] p-2 rounded-2xl text-white bg-purple-700"
          />
          
          <input
            id="returnDate"
            name="returnDate"
            type="date"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-[360px] h-[38px] p-2 rounded-2xl text-white bg-purple-700"
            placeholder="Return date"
          />
          
          <button
            id="bookNowBtn"
            onClick={handleSubmit}
            className="w-[360px] h-[40px] bg-[#FF9E0C] text-white py-2 rounded-2xl hover:bg-orange-500 cursor-pointer"
          >
            Book now
          </button>
        </div>
        
        <div
          id="carImage"
          className="rounded-xl bg-cover bg-center h-64 md:h-auto"
          style={{ 
            backgroundImage: `url('${carImage}')`,
            opacity: imageOpacity,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div className="h-full w-full rounded-xl"></div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-16 mb-16 px-4">
      
        <div className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0">
          <span className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0">
            <img className="h-6 w-6 text-white icons" src={mapPinIcon} alt="" />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Address</div>
            <div className="font-bold text-black">Oxford Ave. Cary, NC 27511</div>
          </div>
        </div>
        
      
        <div className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0">
          <span className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0">
            <img className="h-6 w-6 text-white icons" src={iconImages.mail} alt="" />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Email</div>
            <div className="font-bold text-black">nwiger@yahoo.com</div>
          </div>
        </div>
        
      
        <div className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0">
          <span className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0">
            <img className="h-6 w-6 text-white icons" src={iconImages.phone} alt="" />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Phone</div>
            <div className="font-bold text-black">+537 547-6401</div>
          </div>
        </div>
        
       
        <div className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0">
          <span className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0">
            <img className="relative h-6 w-6 text-white icons" src={iconImages.clock} alt="" />
            <img className="absolute" src={iconImages.clockInside} alt="" />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Opening hours</div>
            <div className="font-bold text-black">Sun-Mon: 10am - 10pm</div>
          </div>
        </div>
      </div>
      
      {/* Vlogs */}
      <div className="max-w-full mx-auto px-6 py-1 mb-6">
        <div className="text-center mb-10">
          <h1 className="lg:text-5xl title pt-3">Latest blog posts & news</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-6">
          {/* Card 1 */}
          <article className="shadow-2xl">
            <div className="w-full aspect-video">
              <video className="w-full h-full object-cover rounded-2xl" controls muted preload="metadata">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">How To Choose The Right Car</h3>
              <p className="text-sm text-gray-500 mt-2">News / 12April 2024</p>
            </div>
          </article>
          
          {/* Card 2 */}
          <article className="shadow-2xl">
            <div className="w-full aspect-video">
              <video className="w-full h-full object-cover rounded-2xl" controls muted preload="metadata">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Which plan is right for me?</h3>
              <p className="text-sm text-gray-500 mt-2">News / 12April 2024</p>
            </div>
          </article>
          
          {/* Card 3 */}
          <article className="shadow-2xl">
            <div className="w-full aspect-video">
              <video className="w-full h-full object-cover rounded-2xl" controls muted preload="metadata">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Enjoy Speed, Choice &Control</h3>
              <p className="text-sm text-gray-500 mt-2">News / 12April 2024</p>
            </div>
          </article>
        </div>
      </div>
      
      <div className="max-w-full">
        <div className="w[80] flex justify-center">
          <img className="mt-3 mb-3" src={logosIcon} alt="" />
        </div>
      </div>
      
     
    </div>
  );
};

export default ContactPage;