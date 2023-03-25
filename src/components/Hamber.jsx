import React, { useState } from "react";
import Navbar from "./Navbar";

const Hamber = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div className="flex justify-end relative md:justify-start">
      <div
        className="absolute z-20 m-5 right-0 md:hidden child:transition-all child:duration-300 child:ease-linear"
        onClick={clickHandler}
      >
        <div
          className={`w-10 h-1 m-1 rounded-lg ${
            click
              ? "bg-white rotate-45 translate-y-[0.95rem]"
              : "bg-blue-600 rotate-0"
          }`}
        ></div>
        <div
          className={`w-10 h-1 m-1 rounded-lg ${
            click
              ? "bg-white opacity-0 -translate-x-full"
              : "bg-blue-600 opacity-100 translate-x-0"
          }`}
        ></div>
        <div
          className={`w-10 h-1 m-1 rounded-lg ${
            click ? "bg-white -rotate-45" : "bg-blue-600 rotate-0"
          }`}
        ></div>
      </div>
      <Navbar click={click} />
    </div>
  );
};

export default Hamber;
