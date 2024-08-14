// App.jsx
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import "./App.css"

const App = () => {
  const [location, setLocation] = useState(null);

  return (
    <div className='relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/images/donuts.jpg')] z-[-1] blur-3xl"></div>
        <div className='flex flex-col min-h-screen'>
        <div className= 'relative z-10 p-8 text-white'>  
        <div class="flex w-full justify-between">
          <div className = "place-content-between">
          <h1 className='text-white px-8 font-black'>ReHeats</h1>
        </div>  
          <div className = "text-white top-0 right-0">
              <a className='px-8 text-right font-semibold'
                href="#">My Spots
              </a>  
              <a className='px-8 text-right font-semibold'
                href="#">Login
              </a>
          </div>
      </div>
      <div className="text-white text-center p-4">
            <h3 className='font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-6 md:py-10'>
              APP
            </h3>
            <div className='text-lg sm:text-xl md:text-2xl mx-auto max-w-screen-md'>
              <p className='mb-4'>
                Revisit your favorite flavors and discover new culinary gems with our food spots review app.
              </p>
              <p>
                Whether you're craving a beloved dish from a familiar restaurant or eager to explore hidden gems around.
              </p>
            </div>
          </div>
      <SearchComponent onPlaceSelect={setLocation} />
      <div class = "about_for_foodies_center">
        <h6 className="text-white text-center p-4 py-10 font-sans ">built for foodies</h6>
      </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default App;

