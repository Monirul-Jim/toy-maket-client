import React from 'react';
import Banner from '../pages/Bannar/Banner';
import Gallery from '../pages/Gallery/Gallery';
import ReactTab from '../pages/Tab/ReactTab';
import DynamicTitle from '../../Shared/DynamicTitle/DynamicTitle';
import Section from '../../Shared/Section/Section';
import Donate from '../../Shared/Section/donate/Donate';

const Home = () => {
    DynamicTitle('Home Page')
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <ReactTab></ReactTab>
           <Section></Section>
           <Donate></Donate>
        </div>
    );
};

export default Home;