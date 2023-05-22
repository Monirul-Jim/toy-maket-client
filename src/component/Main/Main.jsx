import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import Loader from '../../Loader/Loader';

const Main = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    return (
        <div>
            <Navbar></Navbar>
            {loading ?<Loader></Loader> : <Outlet></Outlet>}
          
            <Footer></Footer>
        </div>
    );
};

export default Main;