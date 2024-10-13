import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ViewRestaurant = () => {

  const [favourite, setFavourite] = useState(null)  
  const [review, setReview] = useState(null)
  const [rating, setRating] = useState(null)
  const [place, setPlace] = useState(null)
  const [reviewdate, setReviewDate] =useState(null)
  const [username, setUser] = useState(null)

  useEffect(()=>{
     
     const getreviews = async () => {
      try{
          const response = await fetch('http://localhost:5000/getreview', {
          method: 'GET',
          credentials: 'include' // Include cookies with the request
          });

          const data = await response.json(); // data to store response from server
          console.log(data)
          setFavourite(data.favourite)
          setReview(data.review)
          setRating(data.rating)
          setPlace(data.place)
          setReviewDate(data.reviewdate)
          setUser(data.username)
      }
      catch(error)
          {console.log(error)}
     };
     
     getreviews();
  },[])


  return (
    <div  className='w-full min-h-screen flex bg-neutral-600 justify-center items-center'>
      <div className='flex flex-col bg-slate-50 w-4/6 rounded-2xl shadow=2xl'>
        <div className='flex justify-between w-full mt-2'>
            <h1 className='w-1/4 pl-6 font-black'>{place}</h1>
            <h1 className='w-1/4'>{reviewdate}</h1>
        </div>
        <div className='flex w-4/6 overflow-hidden pt-3'>
            <img className= "h-48 w-40 object-left ml-5 mb-5 rounded-xl transition duration-300 ease-in-out hover:scale-110" src='./images/fireworks.png' alt=""/>
            <div className='h-20 pl-3'>
                <div>
                    <h1>Rating: {rating}</h1>
                </div>
                <div>
                    <h1>Favourite Meal: {favourite}</h1>
                </div>
                <div>
                  <p>Name: {username}</p>
                  <p>{review}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRestaurant
