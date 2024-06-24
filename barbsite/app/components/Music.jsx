import React from "react";
import { FaMusic } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Music = () => {
  return (
    <section className="flex flex-col p-8 rounded-2xl mt-48">
      <div className="flex flex-col">
        {/* <h2 className="text-2xl font-bold mb-4">Find me on socials</h2>
        <div className="flex flex-col justify-center ml-32 gap-8 w-[372px]">
          <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1 bg-slate-400">
            <a href="https://open.spotify.com/artist/2AKn3QitGXoKeodTlARfxe?si=QQezf9lMQjuHN-U7RVgQ_g" target="_blank" className="flex items-center gap-2 font-light">
              <FaSpotify alt="Spotify" className="w-8 h-8"/>
              <span>Spotify</span>
            </a>
          </div>
          <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1 bg-slate-400">
            <a href="https://music.apple.com/us/artist/barb/1647035903" target="_blank" className="flex items-center gap-2 font-light">
            <FaMusic alt="Apple Music" className="w-8 h-8"/>
              <span>Apple Music</span>
            </a>
          </div>
          <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1 bg-slate-400">
            <a href="https://www.youtube.com/channel/UC1rLZYufwNq4u4tG_533mIQ" target="_blank" className="flex items-center gap-2 font-light">
            <FaYoutube alt="YouTube" className="w-8 h-8"/>
              <span>YouTube</span>
            </a>
          </div>
          <div className="text-white hover:text-gray-300 p-4 rounded-lg text-2xl flex-1">
            <a href="merch-link" target="_blank" className="flex items-center gap-2 font-light">
              <FaTshirt alt="Merch" className="w-8 h-8"/>
              <span>Merch</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Music;
