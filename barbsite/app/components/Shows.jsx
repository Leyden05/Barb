import React from "react";
import Image from 'next/image';
const Shows = () => {
  return (
    <div className="-z-[40] w-0 h-0">
      <div className="w-full h-screen">
        <Image
          className="w-full h-[1100px] object-cover absolute top-[-10.5rem] -z-[40]"
          src={require("../assets/barbinthree.jpg")}
          alt="my face"
        />
      </div>
  </div>
  );
};

export default Shows;
