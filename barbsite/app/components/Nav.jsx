import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { FaMusic } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="relative py-8 z-20 max-w-screen-2xl">
      <div className="max-w-7xl mx-auto px-2 pt-4">
        <div className="flex justify-between items-center md:pr-2">
          <a href="/" className="text-white text-xl font-bold">
            <Image
              className="barb-logo"
              src={require("../assets/float.PNG")}
              alt="Barb logo"
            />
          </a>

          <div className="hidden md:flex space-x-6 gap-8 ml-48">
            <a href="#" className="text-white hover:text-gray-300">
              Music
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Events
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          <div className="hidden md:flex space-x-1">
            <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1">
              <a href="spotify-link" className="flex items-center">
                <FaSpotify alt="Spotify" className="w-5 h-5" />

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1">
              <a href="apple-music-link" className="flex items-center">
                <FaMusic alt="Apple Music" className="w-5 h-5" />

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1">
              <a href="youtube-link" className="flex items-center">
                <FaYoutube alt="YouTube" className="w-5 h-5" />

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1">
              <a href="merch-link" className="flex items-center">
                <FaInstagram alt="Merch" className="w-5 h-5"/>

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1">
              <a href="merch-link" className="flex items-center">
              <FaTiktok alt="Merch" className="w-5 h-5"/>

              </a>
            </div>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
