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
          <a href="/" className="text-white text-xl font-bold" data-aos="fade-up">
            <Image
              className="barb-logo"
              src={require("../assets/float.PNG")}
              alt="Barb logo"
            />
          </a>

          <div className="hidden md:flex space-x-6 md:gap-2 lg:gap-4 xl:gap-8 md:ml-32 xl:ml-48" data-aos="fade-up" data-aos-delay="300">
            <a href="https://linktr.ee/barb_barb_barb" target="_blank" className="text-white hover:text-gray-300">
              Music
            </a>
            <a href="/live" className="text-white hover:text-gray-300">
              Live
            </a>
            <a href="/shop" className="text-white hover:text-gray-300">
              Store
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            {/* <a href="/press" className="text-white hover:text-gray-300">
              Press
            </a> */}
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          <div className="hidden md:flex space-x-1" data-aos="fade-up" data-aos-delay="600">
            <div className="text-white hover:text-gray-300 p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://open.spotify.com/artist/2AKn3QitGXoKeodTlARfxe?si=QQezf9lMQjuHN-U7RVgQ_g" target="_blank" className="flex items-center">
                <FaSpotify alt="Spotify" className="w-5 h-5" />

              </a>
            </div>
            <div className="text-white hover:text-gray-300p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://music.apple.com/us/artist/barb/1647035903" target="_blank" className="flex items-center">
                <FaMusic alt="Apple Music" className="w-5 h-5" />

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://www.tiktok.com/@barb_barb_barb" target="_blank" className="flex items-center">
              <FaTiktok alt="Merch" className="w-5 h-5"/>

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://www.instagram.com/barb_barb_barb/" target="_blank" className="flex items-center">
                <FaInstagram alt="Merch" className="w-5 h-5"/>

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://www.youtube.com/channel/UC1rLZYufwNq4u4tG_533mIQ" target="_blank" className="flex items-center">
                <FaYoutube alt="YouTube" className="w-5 h-5" />

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
