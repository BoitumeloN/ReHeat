import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';

const libraries = ["places"]; // Load Places library

const SearchComponent = ({ onPlaceSelect }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handlePlaceSelect = () => {
      if (autocomplete) {
       autocomplete.getPlace();
        // Handle place selection logic here
      }
    };
  
    if (window.google) {
      const autocompleteObj = new window.google.maps.places.Autocomplete(inputRef.current);
      setAutocomplete(autocompleteObj);
      autocompleteObj.addListener('place_changed', handlePlaceSelect);
    }
  }, [autocomplete]);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      autocomplete.getPlace();
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
      libraries = {libraries}
    >
      <div className="flex flex-col text-center overflow-hidden py-5">
        <Autocomplete
          onLoad={(autocompleteInstance) => setAutocomplete(autocompleteInstance)}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            className='mb-4 text-center w-4/5 text-black rounded-3xl border-gray-500 border-2 bg-transparent text-lg pt-2.5 pb-2.5'
            type="text"
            placeholder="Rediscover food..."
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
};

export default SearchComponent;
