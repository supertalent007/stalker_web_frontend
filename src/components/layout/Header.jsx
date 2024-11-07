import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const checkMobileScreen = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkMobileScreen();
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {
                isMobile ?
                    <header className="text-white px-4 pt-8 flex items-center justify-between">
                        <Link to="/">
                            <img src="/logo.png" alt="Logo" className="w-32" />
                        </Link>
                        <div>
                            <button
                                onClick={toggleMenu}
                                className={`block md:hidden text-white focus:outline-none ${isMenuOpen ? 'hidden' : ''}`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            {
                                isMenuOpen ?
                                    <nav
                                        ref={menuRef}
                                        className={`${isMenuOpen
                                            ? 'flex flex-col space-y-4 transform translate-x-0 ease-in-out duration-300 absolute ml-[-70px] mt-[-20px]'
                                            : 'hidden transform translate-x-full'
                                            } md:flex md:flex-row md:space-x-8 transition-transform bg-gray-500 z-[1000] py-2 rounded-md`}
                                    >
                                        <Link
                                            to="/"
                                            className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/about"
                                            className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            to="/pricing"
                                            className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            to="/docs"
                                            className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0"
                                        >
                                            Docs
                                        </Link>
                                        <Link
                                            to="/faq"
                                            className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0"
                                        >
                                            FAQ
                                        </Link>
                                        <Link to="/login" className="block px-5 hover:text-gray-400">Login</Link>
                                        <Link to="/register" className="block px-5 hover:text-gray-400">Register</Link>
                                    </nav> : ''
                            }
                        </div>
                    </header> :
                    <header className="text-white px-4 pt-8 flex items-center justify-between">
                        <Link to="/">
                            <img src="/logo.png" alt="Logo" className="w-32" />
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="block md:hidden text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <nav className='md:flex space-x-4 md:space-x-[40px] z-[1000]'>
                            <div className='md:flex md:flex-row md:space-x-4'>
                                <Link to="/" className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0">
                                    Home
                                </Link>
                                <Link to="/about" className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0">
                                    About
                                </Link>
                                <Link to="/pricing" className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0">
                                    Pricing
                                </Link>
                                <Link to="/docs" className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0">
                                    Docs
                                </Link>
                                <Link to="/faq" className="block px-5 relative after:block after:content-[''] after:border-b-2 after:border-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:right-0 after:bottom-[-2px] after:left-0">
                                    FAQ
                                </Link>
                            </div>
                        </nav>

                        <nav className='md:flex space-x-4 md:space-x-[40px]'>
                            <div className='md:flex md:flex-row md:space-x-4'>
                                <Link to="/login" className="block px-5 hover:text-gray-400">Login</Link>
                                <Link to="/register" className="block px-5 hover:text-gray-400">Register</Link>
                            </div>
                        </nav>
                    </header>
            }
        </>
    );
};

export default Header;
