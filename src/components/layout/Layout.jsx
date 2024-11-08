import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='bg-black'>
            <div className="flex flex-col min-h-screen bg-black max-w-[1440px] justify-center mx-auto">
                <Header />

                <main className="flex-grow p-4 pt-[120px]">
                    <Outlet />
                </main>

                <Footer />

            </div>
        </div>
    );
};

export default Layout;
