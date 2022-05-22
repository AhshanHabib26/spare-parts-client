import React from 'react';
import Carousel from './Carousel';
import Reviews from './Reviews/Reviews';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Carousel/>
           <Tools/>
           <Summary/>
           <Reviews/>
        </div>
    );
};

export default Home;