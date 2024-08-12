// App.jsx
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import "./App.css"

const App = () => {
  const [location, setLocation] = useState(null);

  return (
    <div>
      <div class="header-container">
        <div className = "landing_main_header">
        <h1 className='text-red'>ReHeats</h1>
      </div>
        <div className = "landing_main_header_left">
          <a href="#">My Spots</a>  
          <a href="#">Login</a>
        </div>
    </div>
    <div className = "body_text_center">
      <h3>APP</h3>
      <p>Revisit your favorite flavors and discover new culinary gems with our food spots review app.</p>
      <p> Whether you're craving a beloved dish from a familiar restaurant or eager to explore hidden gems around</p>
    </div>
    <SearchComponent onPlaceSelect={setLocation} />
    <div class = "about_for_foodies_center">
      <h6 className="text-white bg-gray-800 p-4 font-sans">built for foodies</h6>
    </div>
    </div>
  );
};

export default App;

