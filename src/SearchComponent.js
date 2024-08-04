
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
      <div className="centernav">
        <Autocomplete
          onLoad={(autocompleteInstance) => setAutocomplete(autocompleteInstance)}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            type="text"
            placeholder="Rediscover food..."
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
};

export default SearchComponent;
