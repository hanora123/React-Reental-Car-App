import React from 'react';
import checkImg from '../images/check.png';
import memoryImg from '../images/WhatsApp Image 2025-08-15 at 19.36.26_72033b15.jpg';
import phoneImg from '../images/iPhone 14 Pro - Silver - Portrait.png';
import phoneImg2 from '../images/iPhone 14 & 15 Pro - 4 1.png';
import reviewIcon from '../images/WhatsApp Image 2025-08-15 at 19.17.52_85e261e6.jpg';
import avatarImg from '../images/WhatsApp Image 2025-08-15 at 19.17.52_2bfcf5ff.jpg';

const About = () => {
  return (
  <>
  <section id="about" className="containeer">
      <div className="text-center mt-6">
        <h1 className="text-5xl font-bold mt-15">About Us</h1>
        <p className="text-gray-500 mt-6">
          Home / <span className="text-gray-800 font-semibold">About Us</span>
        </p>
      </div>

      <div className="max-w-full mx-auto px-6 ">
        <div className="w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 text-center">
          <div>
            <h2 className="text-5xl font-bold mt-5">
              Where every <br />
              drive feels <br />
              extraordinary
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-justify">
              <h3 className="font-bold text-2xl">Variety Brands</h3>
              <p className="text-gray-600 text-sm mt-2">
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                sit quam natoque ornare cursus viverra odio
              </p>
            </div>

            <div className="text-justify">
              <h3 className="font-bold text-2xl">
                Awesome Sup<span className="text-red-500">o</span>rt
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Eget adipiscing augue sit quam natoque ornare cursus viverra
                odio. Diam quam gravida ultricies velit
              </p>
            </div>

            <div className="text-justify">
              <h3 className="font-bold text-2xl">Maximum Freedom</h3>
              <p className="text-gray-600 text-sm mt-2">
                Diam quam gravida ultricies velit duis consequat integer. Est
                aliquam posuere vel rhoncus massa volutpat 
              </p>
            </div>

            <div className="text-justify">
              <h3 className="font-bold text-2xl">Flexibility On The Go</h3>
              <p className="text-gray-600 text-sm mt-2">
                Vitae pretium nulla sed quam id nisl semper. Vel non in proin
                egestas dis. Faucibus rhoncus, iaculis 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <video className="rounded-2xl w-10/12" controls>
          <source
            src="./images/106722-673786473_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="counter flex justify-around mt-12 font-bold">
        <div className="flex flex-col">
          <h2 className="text-[#5937E0] font-bold text-7xl">20k+</h2>
          <p className="text-lg pt-2">happy customers</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#5937E0] font-bold text-7xl">540k+</h2>
          <p className="text-lg pt-2">Count of cars</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#5937E0] font-bold text-7xl">25k+</h2>
          <p className="text-lg pt-2">Years of experince</p>
        </div>
      </div>

   <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Unlock unforgettable <br/> memories on the road
      </h2>
      <p className="text-gray-600 mb-8">
        Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. 
        Quis nunc interdum gravida ullamcorper
      </p>

      <div className="grid sm:grid-cols-2 gap-y-4 gap-x-">

        <div className="flex items-start space-x-3">
          <span className="bg-[#5937E0] text-white rounded-full p-1">
            <img className="w-4 h-4 rounded-full" src={checkImg} alt=""/>
          </span>
          <p className="text-gray-700 text-sm">
 Quis nunc interdum gravida ullamcorper          </p>
        </div>

        <div className="flex items-start space-x-3">
          <span className="bg-[#5937E0] text-white rounded-full p-1">
              <img class="w-4 h-4 rounded-full" src="images/check.png" alt=""/>

          </span>
          <p className="text-gray-700 text-sm">
 Quis nunc interdum gravida ullamcorper          </p>
        </div>

        <div className="flex items-start space-x-3">
          <span className="bg-[#5937E0] text-white rounded-full p-1">
           <img class="w-4 h-4 rounded-full" src="images/check.png" alt=""/>

          </span>
          <p className="text-gray-700 text-sm">
 Quis nunc interdum gravida ullamcorper          </p>
        </div>

        <div className="flex items-start space-x-3">
          <span className="bg-[#5937E0] text-white rounded-full p-1">
             <img class="w-4 h-4 rounded-full" src="images/check.png" alt=""/>

          </span>
          <p className="text-gray-700 text-sm">
            Quis nunc interdum gravida ullamcorper
          </p>
        </div>
      </div>
    </div>

    <div>
      <div className="w-full h-80 rounded-lg overflow-hidden">
        <img src="./images/WhatsApp Image 2025-08-15 at 19.36.26_72033b15.jpg" alt="Memory Image" className="w-full h-full object-cover "/>
      </div>
    </div>
  </div>

  <div className="phone">
    <div className=" bg-[#5937E0] section rounded-[2rem]  flex flex-col md:flex-row items-center justify-center text-white max-w-6xl mx-auto relative ">
  
  <div className="flex-shrink-0 mb-8 md:mb-0 relative  ">
    <img src="./images/iPhone 14 Pro - Silver - Portrait.png" alt="App Phone" className=" drop-shadow-xl relative -top-30 z-10 "/ >
    <img src="./images/iPhone 14 & 15 Pro - 4 1.png" alt="" className=" absolute -top-28 overflow-hidden "/>
  </div>

  <div className="max-w-md md:text-left relative z-10 text-justify ">
    <div className="w-2xl">
      <p className="uppercase text-sm tracking-wide">Download our app</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">Download our app</h2>
    <p className="text-white/80 mt-4">
      Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. 
      Nisi nisi morbi vel in vulputate. Nulla nam eget urna fusce vulputate at risus
    </p>
    <div className="flex gap-4 justify-center md:justify-start mt-6">
      
   <div className="app-buttons">
        <a href="#" className="app-btn bg-white">📱 App Store</a>
        <a href="#" className="app-btn bg-white">🤖 Google Play</a>
      </div>
    </div>
    </div>
  </div>
</div> 
  </div>

<div className="w-full max-w-6xl mx-auto px-4 py-12 section mb-14">
    <h2 className="text-3xl font-bold text-center ">Reviews from our customers</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center ">
      <div className=" bg-gray-200 rounded-2xl shadow-md flex-1 flex flex-col items-center pb-0 ">
        <div className="w-full flex flex-col items-center px-6 pt-8 pb-4">
          <img className="w-8 h-8 text-purple-500 mb-4" src="./images/WhatsApp Image 2025-08-15 at 19.17.52_85e261e6.jpg" alt=""/>
          <p className="text-center text-black mb-8">
            Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque
          </p>
        </div>
        <div className="w-full bg-purple-600 rounded-b-xl flex flex-col items-center pt-10 pb-4 relative">
          <img src="./images/WhatsApp Image 2025-08-15 at 19.17.52_2bfcf5ff.jpg" alt="avatar" className="w-16 h-16 rounded-full absolute -top-8 shadow-md object-cover"/>
          <span className="text-purple-200 text-xs mt-8">Kuphal LLC</span>
          <span className="text-white font-bold text-base">Emanuel Boyle</span>
        </div>
      </div>
      <div className="bg-gray-200 rounded-xl shadow-md flex-1 flex flex-col items-center pb-0 ">
        <div className="w-full flex flex-col items-center px-6 pt-8 pb-4">
          <img class="w-8 h-8 text-purple-500 mb-4" src="./images/WhatsApp Image 2025-08-15 at 19.17.52_85e261e6.jpg" alt=""/>
          <p className="text-center text-black mb-8">
           Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula
          </p>
        </div>
        <div className="w-full bg-purple-600 rounded-b-xl flex flex-col items-center pt-10 pb-4 relative">
          <img src="./images/WhatsApp Image 2025-08-15 at 19.17.52_2bfcf5ff.jpg" alt="avatar" className="w-16 h-16 rounded-full absolute -top-8 shadow-md object-cover"/>
          <span className="text-purple-200 text-xs mt-8">Kuphal LLC</span>
          <span className="text-white font-bold text-base">River Graves</span>
        </div>
      </div>
      <div className="bg-gray-200 w-full rounded-xl shadow-md flex-1 flex flex-col items-center pb-0 ">
        <div className="w-full flex flex-col items-center px-6 pt-8 pb-4">
          <img class="w-8 h-8 text-purple-500 mb-4" src="./images/WhatsApp Image 2025-08-15 at 19.17.52_85e261e6.jpg" alt=""/>
          <p className="text-center text-black mb-8">
            Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et
          </p>
        </div>
        <div className="w-full bg-purple-600 rounded-b-xl flex flex-col items-center pt-10 pb-4 relative">
          <img src="./images/WhatsApp Image 2025-08-15 at 19.17.52_2bfcf5ff.jpg" alt="avatar" className="w-16 h-16 rounded-full absolute -top-8 shadow-md object-cover"/>
          <span className="text-purple-200 text-xs mt-8">Kuphal LLC</span>
          <span className="text-white font-bold text-base">Ryder Malone</span>
        </div>
      </div>
    
    </div>
  </div>

    </section>
  </>
    
  )
}

export default About;
