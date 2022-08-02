import React from 'react';
import Blog from './Blog/Blog';
import Carousel from './Carousel';
import Offer from './Offer';
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
           <Offer/>
           <Summary/>
           <Reviews/>
           <Subscribe/>
           <Blog/>
           <Quote/>
        </div>
    );
};

export default Home;