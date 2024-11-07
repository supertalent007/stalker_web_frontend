import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container mx-auto border-t border-gray-200 mt-[100px]">
            <div className="text-white px-4 justify-center grid grid-cols-12 max-w-[1100px] mx-auto">
                <div className="col-span-12 md:col-span-5 items-center pt-[50px]">
                    <div className="flex-col flex gap-5">
                        <img className="w-[35%]" src="/logo.png" alt="logo" />
                        <p>
                            Meet Stalker, the most reliable way to protect your privacy in the digital world.
                        </p>
                        <p>
                            Protect your personal and professional communications with three different security packages.
                        </p>
                        <span className="text-gray-500">
                            Our support team is ready to help with any inquiries.
                        </span>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-1"></div>
                <div className="col-span-6 md:col-span-2 pt-[50px]">
                    <div className="w-full">
                        <div className="text-[22px] font-[700] mb-3">Menu</div>
                        <ul className="flex flex-wrap flex-col justify-end">
                            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                            <li><Link to="/pricing" className="hover:text-gray-400">Pricing</Link></li>
                            <li><Link to="/docs" className="hover:text-gray-400">Docs</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
                            <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
                            <li><Link to="/login" className="hover:text-gray-400">Log In</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-6 md:col-span-2 pt-[50px]">
                    <div className="w-full">
                        <div className="text-[22px] font-[700] mb-3">Legal</div>
                        <ul className="flex flex-wrap flex-col justify-end">
                            <li><Link to="/privacy_policy" className="hover:text-gray-400">Privacy Policy</Link></li>
                            <li><Link to="/foundation" className="hover:text-gray-400">Foundation</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-2 pt-[50px]">
                    <div className="w-full">
                        <div className="text-[22px] font-[700] mb-3">Download </div>
                        <ul className="flex flex-wrap md:flex-col gap-4">
                            <li><Link to="#"><img src="/assets/buttons/google.png" alt="android app" /></Link></li>
                            <li><Link to="#"><img src="/assets/buttons/apple.png" alt="ios app" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-8 py-4 text-center">
                <p className="text-sm text-[#fff]">&copy; {new Date().getFullYear()} Stalker LLC.</p>
            </div>
        </footer>
    )
}

export default Footer;