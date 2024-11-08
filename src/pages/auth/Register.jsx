import React from 'react';

const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-center">
            <h1 className="font-[russo] text-[50px] text-primary">Standerd Plan / Register</h1>
            <div className='grid grid-cols-2 w-[70%]'>
                <RegisterForm />
            </div>
        </div>
    );
};

const RegisterForm = () => {
    return (
        <div className='flex flex-col p-[30px] col-span-1 bg-[#111] rounded-[20px] gap-10'>
            <input
                type="text"
                placeholder="Username"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <input
                type="email"
                placeholder="E-mail"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <input
                type="password"
                placeholder="Password"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <input
                type="password"
                placeholder="Confirm Your Password"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <div className='flex flex-col gap-2'>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="privacyPolicy"
                        className="rounded-sm h-4 w-4 bg-[#111]
                    focus:ring-0 focus:ring-offset-0 checked:bg-black
                    border-gray-300 border-2 accent-white"
                    />
                    <label htmlFor="privacyPolicy" className="text-gray-600 cursor-pointer">
                        Privacy Policy
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="termsOfUse"
                        className="rounded-sm h-4 w-4 bg-[#111]
                    focus:ring-0 focus:ring-offset-0 checked:bg-black
                    border-gray-300 border-2 accent-white"
                    />
                    <label htmlFor="termsOfUse" className="text-gray-600 cursor-pointer">
                        Terms Of Use
                    </label>
                </div>
            </div>

            <button className="px-4 py-2 bg-primary text-blck font-[600] rounded hover:bg-black hover:text-primary transition-all duration-500">
                Register
            </button>
        </div>
    )
}

export default Register;
