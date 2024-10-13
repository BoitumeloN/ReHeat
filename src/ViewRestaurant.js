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
          credentials: 'include'
          });

          const data = await response.json();
          console.log(data)
          if (Array.isArray(data)) {
            data.forEach(review => {
              setFavourite(review.favourite);
              setReview(review.review);
              setRating(review.rating);
              setPlace(review.place);
              setReviewDate(review.reviewdate);
              setUser(review.username);
            });
          } else {
            console.error("No reviews found or data is not in the expected format");
          }
          
      }
      catch(error)
          {console.log(error)}
     };
     
     getreviews();
  },[])


  return (
    <div className='relative'  >
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/images/pizza2.jpg')] z-[-1] brightness-50" ></div>
      <div className='min-h-screen w-full'>
      <div className= ' flex z-10  items-center justify-center pt-8'>  
        <div className='flex flex-col bg-slate-50 w-2/3 rounded-2xl shadow=2xl' >
        
          <div className='flex justify-between w-full mt-2'>
              <h1 className='w-2/3 pl-6 font-black'>{place}</h1>
          </div>
          <div className='flex w-4/6 pt-3'>
              <img className= "h-48 w-40 object-left ml-5 mb-5 rounded-xl transition duration-300 ease-in-out hover:scale-110" src='./images/roco2.jpg' alt=""/>
              <div className='h-20 pl-3'>
                  <div>
                  <p className='font-black'>{username}</p>
                      <h3>{rating}</h3>
                      <h3>{reviewdate}</h3>
                      <h3>favourite meal: {favourite}</h3>
                    <p>review: {review}</p>
                  </div>
              </div>
          </div>
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default ViewRestaurant
