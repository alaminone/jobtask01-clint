import { Outlet } from 'react-router-dom';


import React from 'react';
import Navbar from './sheard/nav/Navbar';
import Footer from './sheard/footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
               <Outlet />
               <Footer></Footer>
        </div>
    );
};

export default Layout;