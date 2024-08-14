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
            <div className = "">
              <h1 className='text-black px-8 font-black text-2xl'>Foodies</h1>
            </div>  
            <div className = "text-black hover:text-blue font-bold text-xl">
                <a className='px-5 text-right font-black'
                  href="#">Foodies
                </a>  
                <a className='px-5 text-right font-black'
                  href="#">Login
                </a>
            </div>
        </div>
        <div className="text-black text-center p-4">
            <h3 className='sm:text-5xl md:text-6xl lg:text-7xl py-6 md:py-10'>
              REDISCOVER WITH US
            </h3>
            <div className='text-lg sm:text-xl md:text-2xl mx-auto max-w-screen-md'>
              <p className=''>
                Revisit your favorite flavors and discover new culinary gems with our food spots review app.
              </p>
              <p>
                Whether you're craving a beloved dish from a familiar restaurant or eager to explore hidden gems around.
              </p>
            </div>
          </div>
      <SearchComponent onPlaceSelect={setLocation} />
      <div class = "sm:text-xl md:text-2xl mx-auto max-w-screen-md">
        <h6 className="text-black text-center p-4 py-10 font-sans ">
          built for foodies</h6>
      </div>
      </div>
    </div>
    </div>
    
  );
};

export default App;

