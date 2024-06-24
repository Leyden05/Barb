import React from "react";
import Image from 'next/image';

const BarbMain = () => {
  return (
    <div className="-z-[40] w-0 h-0">
      <div className="hidden md:block w-full h-screen">
        <Image
          className="w-full h-[1100px] object-cover absolute top-[-6.5rem] -z-[40]"
          src={require("../assets/barbBG.JPG")}
          alt="my face"
        />
      </div>
      <div className="md:hidden block w-full h-screen">
        <Image
          className="w-full h-[1100px] object-cover absolute top-[-6.5rem] -z-[40]"
          src={require("../assets/barbBGMOBILE.JPG")}
          alt="my face"
        />
      </div>
      {/* <div className="w-full h-screen absolute top-[900px] -z-[40]">
        <Image
          className="w-full h-full object-cover"
          src={require("../assets/yolo.jpeg")}
          alt="another image"
        />
      </div> */}
    </div>
  );
};

export default BarbMain;
