import React, { useEffect, useState } from 'react';

const ViewRestaurant = () => {
  const [reviews, setReviews] = useState([]); // Array to hold multiple reviews

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch('/getreview', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        console.log(data);

        if (Array.isArray(data)) {
          setReviews(data); // Set entire reviews array here
        } else {
          console.error("No reviews found or data is not in the expected format");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    getReviews();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/images/pizza2.jpg')] z-[-1] brightness-50"></div>
      <div className="min-h-screen w-full ite">
        <div className="z-10 items-center justify-center pt-8">  
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div className="flex bg-slate-50 w-2/3 rounded-2xl drop-shadow-2xl mb-5 ml-5">
                  <div key={index} className=" w-full mt-2">
                    <div className="pl-6 font-black">
                      <h1>{review.place}</h1>
                    </div>
                    <div className="flex w-4/6 pt-3">
                      <img 
                        className="h-48 w-40 object-left ml-5 mb-5 rounded-xl transition duration-300 ease-in-out hover:scale-110" 
                        src="./images/roco2.jpg" 
                        alt="" 
                      />
                      <div className="h-20 pl-3">
                        <p className="font-black">{review.username}</p>
                        <h3>Rating: {review.rating}</h3>
                        <h3>{review.reviewdate}</h3>
                        <h3>Favourite Meal: {review.favourite}</h3> 
                        <p>Review: {review.review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          
        </div>
      </div>
    </div>
  );
};

export default ViewRestaurant;
