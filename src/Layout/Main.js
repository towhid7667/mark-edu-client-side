import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Hero from '../Pages/Shared/Header/Hero/Hero';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Hero></Hero>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Main;