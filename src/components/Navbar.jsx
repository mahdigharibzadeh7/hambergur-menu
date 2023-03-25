import React from "react";

const Navbar = ({ click }) => {
  return (
    <ul
      className={`flex flex-col px-12 pt-20 gap-10 text-lg bg-blue-600 text-white h-[100vh] w-72 fixed transition-all duration-300 ease-linear ${
        click
          ? "visible translate-x-0"
          : "invisible translate-x-full md:translate-x-0 md:visible"
      } child:cursor-pointer md:pt-10 md:flex md:flex-row md:w-full md:bg-white md:text-black`}
    >
      <li>Home</li>
      <li>Docs</li>
      <li>Buy me a coffee</li>
      <li>About us</li>
    </ul>
  );
};

export default Navbar;
