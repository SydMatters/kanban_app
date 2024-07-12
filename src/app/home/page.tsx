import React from 'react';
import NavBar from '@/components/Home/navBar';
import SideBar from '@/components/Home/SideBar';
import Header from '@/components/Home/Header';

const Home = () => {
    return (
        <div className='h-screen overflow-y-hidden'>
            <NavBar />
            <div className="flex">
            <SideBar />
            <Header /> 
            </div>  
        </div>
    );
};

export default Home;
