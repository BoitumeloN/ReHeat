import React, { useRef, useState } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';

const libraries = ["places"]; // Load Places library

const SearchComponent = ({ onPlaceSelect }) => {
  const inputRef = useRef(null);
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

  const onAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="flex flex-col text-center overflow-hidden py-5">
        <Autocomplete
          onLoad={onAutocompleteLoad}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            ref={inputRef} // Make sure to use the ref
            className='mb-4 text-center w-4/5 text-white rounded-3xl border-gray-500 border-2 bg-transparent text-lg pt-2.5 pb-2.5'
            type="text"
            placeholder="Rediscover food..."
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
};

export default SearchComponent;
