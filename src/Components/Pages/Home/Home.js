import React from 'react';
import Carousel from './Carousel';
import Reviews from './Reviews/Reviews';
import Subscribe from './Subscribe';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Carousel/>
           <Tools/>
           <Summary/>
           <Reviews/>
           <Subscribe/>
        </div>
    );
};

export default Home;