import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const countReviews = reviews.slice(0, 3)

    useEffect( () =>{
        fetch('https://spare-parts-server-production.up.railway.app/review')
        .then( res => res.json())
        .then(data => setReviews(data))
    },[])



    return (
        <div id='customer-reviews' className='mx-4 md:mx-8'>
            <div className=' my-4 text-center'>
                <h1 className=' text-error text-lg uppercase font-semibold'>We Love Our Customers</h1>
                <h2 className=' text-primary text-3xl  font-semibold'>And They Seem To Love Us</h2>
            </div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                  countReviews?.map( review => <Review
                  
                    review={review}
                    key={review._id}
                  
                  /> )  
                }
            </div>
        </div>
    );
};

export default Reviews;