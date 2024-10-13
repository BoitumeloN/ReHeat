import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';



const AddRestaurant = () => {
  const [favourite, setFavourite] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')
  const { state } = useLocation(); // Access location passed as state
  const username = state?.username;
  const location = state?.location; 
  const reviewdate = new Date()
  

  const manageReview = async () => {
   
    try{
      const request = await axios.post("http://localhost:5000/review", new URLSearchParams({
        favourite : favourite,
        rating : rating,
        review : review,
        place : location,
        reviewdate : reviewdate.toLocaleString('default', { month: 'long' })+" "+ reviewdate.getDate()+", "+reviewdate.getFullYear(),
        username : username
       }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true,
      })
      console.log(request)
      window.location.href  = '/ViewRestaurant'

    }catch(error){
      console.log(error)
    };}
    
    

  return (
    <div className='w-full h-screen flex bg-neutral-600 justify-center items-center'>
      <div className='bg-zinc-200 w-6/12 rounded-2xl py-10 drop-shadow-2xl'>
        <div className='flex'>
          <h1 className='text-black px-8 font-black text-3xl'>Heat</h1>
        </div>
        <h4 className='text-center font-black'>Review {location}</h4>
        <form onSubmit={(e) =>{manageReview(); e.preventDefault()} }>
          <div className='text-black flex flex-col space-y-6 items-center text-center'>
            <label className='text-center' htmlFor="favourite">Favourite Meal</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 border-2 border-stone-800 pl-2' 
              type='text' 
              id='favourite' 
              value = {favourite}
              onChange={(e) => setFavourite(e.target.value)}
            />
            <label htmlFor="rating">Rating out of 5</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 border-2 border-stone-800 pl-2' 
              type='text' 
              id='rating' 
              value = {rating}
              onChange = {(e) => setRating(e.target.value)}
            />
            <label htmlFor="review">Review</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 border-2 border-stone-800 pl-2' 
              type='text' 
              id='review' 
              value = {review}
              onChange={(e) => setReview(e.target.value)}
            />
            <input
              className='w-4/12 border-2 border-zinc-50 rounded-xl bg-indigo-300 hover:bg-indigo-200 py-2'
              type='submit'
              value='Add Review' 
              id='button' 
              onClick={(e) => manageReview(e)}
            />
          </div>
        </form>
      </div>
    </div>  
  )
}

export default AddRestaurant

