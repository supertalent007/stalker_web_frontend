import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-primary gap-[30px]">
            <h1 className="font-[russo] text-[50px] text-primary text-center">Log-in</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='bg-[#111] rounded-[20px] flex justify-center items-center'>
                    <img src="/assets/images/branding.png" alt="login logo" />
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

const LoginForm = () => {
    return (
        <div className='flex flex-col p-[30px] col-span-1 bg-[#111] rounded-[20px] gap-10 md:w-[450px]'>
            <h2 className='text-center text-[25px] mb-5'>Log-in to your S-talker Account</h2>
            <input
                type="text"
                placeholder="Username"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />

            <input
                type="password"
                placeholder="Password"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <div className='flex flex-col w-full mt-[30px]'>
                <button className="px-4 py-2 bg-primary text-black font-[600] rounded hover:bg-black hover:text-primary transition-all duration-500">
                    Login
                </button>
                <div className='mt-4 text-center text-[#999]'>
                    Do you have invitation code? <Link to="/register" className='text-primary underline'>Register Here</Link>
                </div>
                <button className='mt-4 text-center text-[#999] hover:text-primary transition-all duration-500'>
                    Forgot Your Password?
                </button>
            </div>

        </div>
    )
}

export default Login;
