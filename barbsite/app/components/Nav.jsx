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

          <div className="hidden md:flex space-x-6 md:gap-2 lg:gap-4 xl:gap-8 md:ml-32 xl:ml-48">
            <a href="https://linktr.ee/barb_barb_barb" target="_blank" className="text-white hover:text-gray-300 flex items-center gap-1">
              Links
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.5 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13v-9A1.5 1.5 0 0 1 3.5 2h4a.5.5 0 0 1 0 1h-4z"/><path fill-rule="evenodd" d="M11.5 2.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V4.707l-8.146 8.147a.5.5 0 0 1-.708-.708L10.293 4H6a.5.5 0 0 1 0-1h6z"/></svg>
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/live" className="text-white hover:text-gray-300">
              Live
            </a>
            <a href="/press" className="text-white hover:text-gray-300">
              Press
            </a>
            <a href="/shop" className="text-white hover:text-gray-300">
              Store
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          <div className="hidden md:flex space-x-1">
            <div className="text-white hover:text-gray-300p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://music.apple.com/us/artist/barb/1647035903" target="_blank" className="flex items-center">
                <FaMusic alt="Apple Music" className="w-5 h-5" />

              </a>
            </div>
            <div className="text-white hover:text-gray-300 p-2 md:p-3 xl:p-4 rounded-lg text-2xl flex-1">
              <a href="https://open.spotify.com/artist/2AKn3QitGXoKeodTlARfxe?si=QQezf9lMQjuHN-U7RVgQ_g" target="_blank" className="flex items-center">
                <FaSpotify alt="Spotify" className="w-5 h-5" />

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
