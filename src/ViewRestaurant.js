import React from 'react'

const ViewRestaurant = () => {
  return (
    <div  className='w-full h-screen flex bg-zinc-200 justify-center items-center'>
      <div className='flex flex-col text-center bg-slate-50 w-4/6 rounded-2xl space-y-6 shadow=2xl'>
        <div className='flex justify-between w-full mt-2 font-black'>
            <h1 className='w-1/4'>PlaceName</h1>
            <h1 className='w-1/4'>Date</h1>
        </div>
        <div className='flex w-4/6 overflow-hidden relative'>
            <img className= "h-48 w-40 object-left ml-5 mb-5 rounded-xl transition duration-300 ease-in-out hover:scale-110" src='./images/fireworks.png' alt=""/>
            <div className='items-center text-center font-bold h-20'>
                <div>
                    <h1 className='pl-2'>Number of stars</h1>
                </div>
                <div>
                    <h1>Favourite Meal</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRestaurant
