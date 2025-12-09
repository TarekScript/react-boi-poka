import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/Header/NavBar';

const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;