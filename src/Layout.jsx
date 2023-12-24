import { Outlet } from 'react-router-dom';


import React from 'react';
import Navbar from './sheard/nav/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
               <Outlet />
        </div>
    );
};

export default Layout;