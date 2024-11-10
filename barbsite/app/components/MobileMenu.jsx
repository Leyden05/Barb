"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('menu-open');
    };

    return (
        <div className="md:hidden">
            <button id="mobile-menu-button"
                className="text-white focus:outline-none focus:text-gray-300"
                onClick={toggleMenu}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
            {isOpen && (
                <div className="fixed gap-8 inset-0 bg-customBlue bg-opacity-75 z-50 flex flex-col justify-center items-center">
                    <button className="absolute top-0 right-0 m-4 text-white"
                        onClick={toggleMenu}>
                        X
                    </button>
                    {/* <a href="#" className="text-white text-2xl hover:text-gray-300">Home</a> */}
                    <a href="https://linktr.ee/barb_barb_barb" target="_blank" className="text-white text-2xl hover:text-gray-300">Music</a>
                    <a href="/live" className="text-white text-2xl hover:text-gray-300">Live</a>
                    <a href="/shop" className="text-white text-2xl hover:text-gray-300">Store</a>
                    <a href="/about" className="text-white text-2xl hover:text-gray-300">About</a>
                    <a href="/contact" className="text-white text-2xl hover:text-gray-300">Contact</a>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;