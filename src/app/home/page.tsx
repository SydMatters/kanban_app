import React from 'react';
import NavBar from '@/components/Home/navBar';
import Header from '@/components/Home/Header';
import SideBar from '@/components/Home/sideBar';
import Kanban from '@/components/Home/Kanban';

const Home = () => {
    return (
        <div className='h-screen overflow-y-hidden'>
            <NavBar />
            <div className="flex">
            <SideBar />
            <Header /> 
            <Kanban />
            </div>  
        </div>
    );
};

export default Home;
