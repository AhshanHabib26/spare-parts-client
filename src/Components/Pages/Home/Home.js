import React from 'react';
import Carousel from './Carousel';
import Quote from './Quote/Quote';
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
           <Quote/>
        </div>
    );
};

export default Home;