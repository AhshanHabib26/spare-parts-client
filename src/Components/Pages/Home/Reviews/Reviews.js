import React from 'react';
import useProduct from '../../../../Hooks/useProduct';
import Review from './Review';

const Reviews = () => {

    const [products] = useProduct()
    const customProducts = products.slice(0, 6)

    return (
        <div className='mx-4 md:mx-8'>
            <div className=' my-4 text-center'>
                <h1 className=' text-error text-lg uppercase font-semibold'>We Love Our Customers</h1>
                <h2 className=' text-primary text-3xl  font-semibold'>And They Seem To Love Us</h2>
            </div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                  customProducts.map( review => <Review
                  
                    review={review}
                    key={review._id}
                  
                  /> )  
                }
            </div>
        </div>
    );
};

export default Reviews;