import React from 'react'

  const carImages = {
    'default': '../src/images/cars/22124bcfd303fe6ed4c56d7e9052d896.png',
    'mercedes-sedan':'../src/images/cars/sedan.png',
    'mercedes-suv': '../src/images/cars/suv.png',
    'mercedes-premium': '../src/images/cars/mer-premium.png',
    'porsche-premium': '../src/images/cars/porche-premium.png',
    'toyota-crossover': '../src/images/cars/toyota-crossover.png',
    'mercedes-van': '../src/images/cars/mercedes-van.png',
    'toyota-sedan': '../src/images/cars/toyota-sedan.png',
    'maybach-premium': '../src/images/cars/maybach-transparent.png'
  };

  const carTypeSelect = document.getElementById('carTypeInput');
  
  const carImageElement = document.getElementById('carImage');
  
  carTypeSelect.addEventListener('change', function() {
    const selectedCar = this.value;
    const imageUrl = carImages[selectedCar] || carImages['default'];
    
    carImageElement.style.backgroundImage = `url('${imageUrl}')`;
    
    carImageElement.style.opacity = '0.7';
    setTimeout(() => {
      carImageElement.style.opacity = '1';
    }, 300);
  });

  function showNotification(message, type = 'info') {
    const notificationContainer = document.getElementById('notificationContainer');
    
    const notification = document.createElement('div');
    
    let bgColor, textColor, icon;
    switch(type) {
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
    
    notification.className = `${bgColor} ${textColor} px-4 py-3 rounded-lg shadow-lg flex items-center transform transition-all duration-500 translate-x-full`;
    notification.innerHTML = `${message}`;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 10);
    
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        notificationContainer.removeChild(notification);
      }, 500);
    }, 5000);
  }

  document.getElementById('bookNowBtn').addEventListener('click', function() {
    const carType = document.getElementById('carTypeInput').value;
    const rentalPlace = document.getElementById('rentalPlace').value;
    const returnPlace = document.getElementById('returnPlace').value;
    const rentalDate = document.getElementById('rentalDate').value;
    const returnDate = document.getElementById('returnDate').value;
    
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
      document.getElementById('carTypeInput').value = 'default';
      document.getElementById('rentalPlace').value = 'Place of rental';
      document.getElementById('returnPlace').value = 'Place of return';
      document.getElementById('rentalDate').value = '';
      document.getElementById('returnDate').value = '';
      carImageElement.style.backgroundImage = `url('${carImages['default']}')`;
    }, 2000);
  });
 





export default function Contact() {
  return (<>
   
  
    <div>
      <div className="title pt-4 lg:text-5xl">
        <h1 className="capitalize text-center mt-2">contact us</h1>
        <div className="pre text-center">
          <span className="preTitle cursor-pointer">Home/</span
          ><span className="preTitle cursor-pointer">Contact Us</span>
        </div>
      </div>

      <div
        className="mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6"
      >
        <div
          className="bg-[#5937E0] text-white rounded-xl pt-8 md:pt-16 space-y-4 w-full max-w-md mx-auto md:w-[416px] md:h-[490px] md:mx-36 text-center"
        >
          <h2 className="text-xl font-bold pb-3 text-center">Book your car</h2>
          <select
            id="carTypeInput"
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
            <option value="maybach-premium">Maybach-premium</option>
          </select>
          <select
            id="rentalPlace"
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
            type="date"
            className="w-[360px] h-[38px] p-2 rounded-2xl text-white bg-purple-700"
          />

          <input
            id="returnDate"
            type="date"
            className="w-[360px] h-[38px] p-2 rounded-2xl text-white bg-purple-700"
            placeholder="Return date"
          />
          <button
            id="bookNowBtn"
            className="w-[360px] h-[40px] bg-[#FF9E0C] text-white py-2 rounded-2xl hover:bg-orange-500 cursor-pointer"
          >
            Book now
          </button>
        </div>
        <div
          id="carImage"
          className="rounded-xl bg-cover bg-center h-64 md:h-auto"
          style="
            background-image: url('./src/images/cars/22124bcfd303fe6ed4c56d7e9052d896.png');
          "
        >
          <div className="h-full w-full rounded-xl"></div>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-16 mb-16 px-4"
      >
        <div
          className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
        >
          <span
            className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0"
          >

            <img
              className="h-6 w-6 text-white icons"
              src="src/images/icons/map-pin.png"
              alt=""
            />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Address</div>
            <div className="font-bold text-black">Oxford Ave. Cary, NC 27511</div>
          </div>
        </div>
        <div
          className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
        >
          <span
            className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0"
          >
            <img
              className="h-6 w-6 text-white icons"
              src="src/images/icons/mail.png"
              alt=""
            />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Email</div>
            <div className="font-bold text-black">nwiger@yahoo.com</div>
          </div>
        </div>
        <div
          className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
        >
          <span
            className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0"
          >

            <img
              className="h-6 w-6 text-white icons"
              src="src/images/icons/Vector (1).png"
              alt=""
            />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Phone</div>
            <div className="font-bold text-black">+537 547-6401</div>
          </div>
        </div>
        <div
          className="flex items-center space-x-3 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
        >
          <span
            className="bg-orange-500 rounded-full p-3 flex items-center justify-center flex-shrink-0"
          >
            <img
              className="relative h-6 w-6 text-white icons"
              src="src/images/icons/clock.png"
              alt=""
            />
            <img
              className="absolute"
              src="src/images/icons/clock-inside.png"
              alt=""
            />
          </span>
          <div>
            <div className="text-gray-500 font-medium">Opening hours</div>
            <div className="font-bold text-black">Sun-Mon: 10am - 10pm</div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-6 py-1 mb-6">
        <div className="text-center mb-10">
          <h1 className="lg:text-5xl title pt-3">Latest blog posts & news</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-6">
          <article className="shadow-2xl">
            <div className="w-full aspect-video">
              <video
                className="w-full h-full object-cover rounded-2xl"
                controls
                muted
                preload="metadata"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">How To Choose The Right Car</h3>
              <p className="text-sm text-gray-500 mt-2">News / 12April 2024</p>
            </div>
          </article>
          <article className="shadow-2xl">
            <div className="w-full aspect-video">
              <video
                className="w-full h-full object-cover rounded-2xl"
                controls
                muted
                preload="metadata"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Which plan is right for me?</h3>
              <p className="text-sm text-gray-500 mt-2">News / 12April 2024</p>
            </div>
          </article>
          <article className="shadow-2xl">
            <div className="w-full aspect-video">
              <video
                className="w-full h-full object-cover rounded-2xl"
                controls
                muted
                preload="metadata"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Enjoy Speed, Choice &Control
              </h3>
              <p className="text-sm text-gray-500 mt-2">News / 12April 2024</p>
            </div>
          </article>
        </div>
      </div>

      <div className="max-w-full">
        <div className="w[80] flex justify-center">
          <img className="mt-5" src="src/images/icons/Logos.png" alt="" />
        </div>
      </div>

     

      <div
        id="notificationContainer"
        className="fixed top-4 right-4 z-50 space-y-2"
      ></div>
    </div>
  </>
    
  )
}
