import React from 'react';
import SpinnerImg from '../../images/spinner.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img className='w-50' src={SpinnerImg} alt="" />
        </div>
    );
};

export default Spinner;