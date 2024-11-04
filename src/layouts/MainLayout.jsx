import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
        

            {/* dynamic section */}
            <div className='min-h-[calc(100vh-288px)] py-12 container mx-auto  '>
                <Outlet></Outlet>
            </div>

            {/* footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;