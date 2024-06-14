import React from "react";
import Image from 'next/image';

const BarbMain = () => {
  return (
    <div className="-z-[40] w-0 h-0">
      <div className="w-full h-screen">
        <Image
          className="w-full h-[1100px] object-cover absolute top-[-6.5rem] -z-[40]"
          src={require("../assets/yolo.JPEG")}
          alt="my face"
        />
      </div>
    </div>
  );
};

export default BarbMain;
