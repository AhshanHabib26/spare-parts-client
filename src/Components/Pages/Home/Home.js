import React from 'react';
import Carousel from './Carousel';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Carousel/>
           <Tools/>
           <Summary/>
        </div>
    );
};

export default Home;