import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Feedbacke from './Feedbacke';
import Project from './Project';

const MyPortfolio = () => {
    return (
        <div className=' bg-slate-100'>
           <Banner/> 
           <AboutMe/>
           <Feedbacke/>
           <Project/>
           <Contact/>
        </div>
    );
};

export default MyPortfolio;