import React from "react";
import Image from 'next/image';

const BarbMain = () => {
  return (
    <div className="-z-[40] w-0 h-0">
      <div className="w-full h-screen">
        <Image
          className="min-w-[193%] md:min-w-full h-[1100px] object-cover object-center left-[-35%] md:left-0 translate-x-[-30%] md:translate-x-0 absolute top-[-10.5rem] -z-[40]"
          src={require("../assets/barbBG.JPG")}
          alt="my face"
        />
      </div>
  </div>
  );
};

export default BarbMain;
