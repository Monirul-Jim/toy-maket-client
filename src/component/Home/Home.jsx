import React from 'react';
import Banner from '../pages/Bannar/Banner';
import Gallery from '../pages/Gallery/Gallery';
import ReactTab from '../pages/Tab/ReactTab';
import DynamicTitle from '../../Shared/DynamicTitle/DynamicTitle';

const Home = () => {
    DynamicTitle('Home Page')
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <ReactTab></ReactTab>
        </div>
    );
};

export default Home;