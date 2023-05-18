import React from 'react';
import Banner from '../pages/Bannar/Banner';
import Gallery from '../pages/Gallery/Gallery';
import ReactTab from '../pages/Tab/ReactTab';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <ReactTab></ReactTab>
        </div>
    );
};

export default Home;