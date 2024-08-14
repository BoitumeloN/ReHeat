
import './SearchComponent.css';
import React, { useState } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';

const libraries = ["places"]; // Load Places library

const SearchComponent = ({ onPlaceSelect }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        onPlaceSelect(location);
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey= "AIzaSyAcSXnXz8OvNcqt81FT4-WmnW6LMhycFZc"
      libraries = {libraries}
    >
      <div className="flex flex-col text-center overflow-hidden py-5">
        <Autocomplete
          onLoad={(autocompleteInstance) => setAutocomplete(autocompleteInstance)}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            className='mb-4 text-center w-4/5 text-black rounded-3xl border-gray-500 border-2 bg-gray-500 text-lg pt-2.5 pb-2.5'
            type="text"
            placeholder="Rediscover food..."
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
};

export default SearchComponent;
