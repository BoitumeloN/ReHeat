import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='w-full h-screen flex bg-neutral-600 justify-center items-center'>
      <div className='bg-zinc-200 w-6/12 rounded-2xl py-10 drop-shadow-2xl'>
        <div className='flex'>
          <h1 className='text-black px-8 font-black text-3xl'>Heat</h1>
        </div>
        <h4 className='text-center font-black'>Review This Place - Holder</h4>
        <form>
          <div className='text-black flex flex-col space-y-6 items-center text-center'>
            <label className='text-center' htmlFor="email">Favourite Meal</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 border-2 border-stone-800 pl-2' 
              type='email' 
              id='email' 
            />
            <label htmlFor="favourite">Rating out of 5</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 border-2 border-stone-800 pl-2' 
              type='text' 
              id='favourite' 
            />
            <label htmlFor="review">Review</label>
            <input
              className='w-2/3 py-2 rounded-xl bg-gray-200 border-2 border-stone-800 pl-2' 
              type='text' 
              id='review' 
            />
            <input
              className='w-4/12 border-2 border-zinc-50 rounded-xl bg-indigo-300 hover:bg-indigo-200 py-2'
              type='submit'
              value='Add Review' 
              id='button' 
            />
          </div>
        </form>
      </div>
    </div>  
  )
}

export default AddRestaurant

