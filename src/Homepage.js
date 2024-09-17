
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SearchComponent from './SearchComponent';
import "./Homepage.css"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handlePlaceSelect = (place) => {
    console.log(location)
    setLocation(place.name);
    navigate('/AddRestaurant', { state: { location: place.name } });
  };

  useEffect(() => {

    const checkLoginStatus = async () => {

      try{
        const response = await fetch('http://localhost:5000/check_login', {
          method: 'GET',
          credentials: 'include'
        }); 
     
        const data = await response.json(); 
        console.log(data)
        if (data.loggedIn) { 
          setUser(data.username); 
        }
      }catch(error){
        console.log(error)
      }
      
    };

    checkLoginStatus();
  }, []); 

  const handleLogout = async () => {
    
    await fetch('/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setUser(null); 
  };

  return (
    <div className='relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/images/pizza2.jpg')] z-[-1] brightness-50"></div>
        <div className='flex flex-col min-h-screen'>
        <div className= 'relative z-10 p-8 text-white'>  
          <div className="flex w-full justify-between">
            <div className = "">
              <h1 className='text-white px-8 font-black text-2xl'>Heat</h1>
            </div>  
            <div className="text-white hover:text-blue text-xl">
              {user ? (
                <>
                  <span className='px-5 text-right '>Welcome back, {user}</span>
                  <button onClick={handleLogout} className='px-5 text-right '>Logout</button>
                </>
              ) : (
                <>
                  <Link className='px-5 text-right ' to="/AddRestaurant">Add Restaurant</Link>
                  <Link className='px-5 text-right ' to="/login">Login</Link>
                  <Link className='px-5 text-right ' to="/register">Register</Link>
                </>
              )}
            </div>
        </div>
        <div className="text-white text-center p-4">
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
      <SearchComponent onPlaceSelect={handlePlaceSelect} />
      <div class = "sm:text-xl md:text-2xl mx-auto max-w-screen-md">
        <h6 className="text-white text-center p-4 py-10 font-sans ">
          built for foodies</h6>
      </div>
      </div>
    </div>
    </div>
    
  );
};
export default Homepage; 


