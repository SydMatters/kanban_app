import React from 'react';
import Header from '../../components/Home/Header';
import Kanban from '../../components/Home/Kanban'
import SideBar from '@/components/Home/sideBar';
import NavBar from '@/components/Home/navBar';

const Home = () => {
    return (
        <div className='h-screen overflow-y-hidden'>
            <NavBar />
            <div className="flex">
            <SideBar />
            <div className='flex flex-col'>
                <Header /> 
                <Kanban />
            </div>
            </div>  
        </div>
    );
};

export default Home;
