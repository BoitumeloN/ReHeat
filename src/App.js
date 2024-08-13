// App.jsx
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import "./App.css"

const App = () => {
  const [location, setLocation] = useState(null);

  return (
    <div>
      <div class="flex w-full">
        <div className = "place-content-between">
        <h1 className='text-white px-8'>ReHeats</h1>
      </div>  
        <div className = "text-white top-0 right-0">
            <a className='px-8 text-right'
              href="#">My Spots
            </a>  
            <a className='px-8 text-right'
              href="#">Login
            </a>
        </div>
    </div>
    <div className = "">
      <h3 className='text-white text-center w-100 py-20'>APP</h3>
      <p className='text-white text-center w-100'>Revisit your favorite flavors and discover new culinary gems with our food spots review app.</p>
      <p className='text-white text-center w-100'> Whether you're craving a beloved dish from a familiar restaurant or eager to explore hidden gems around</p>
    </div>
    <SearchComponent onPlaceSelect={setLocation} />
    <div class = "about_for_foodies_center">
      <h6 className="text-white text-center bg-black-800 p-4 font-sans ">built for foodies</h6>
    </div>
    </div>
  );
};

export default App;

