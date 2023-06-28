import React, { useState } from "react";
import Anchor from "./Anchor";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center absolute w-full px-5 py-2 md:p-0 md:w-5/6">
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center justify-center p-2 rounded-md"
        >
          <img
            className="h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg  transition duration-200 ease-in-out"
            src="../goodies/Menu.png"
          />
        </button>
        <img className="p-1 h-20" src="../goodies/logo.png"></img>
      <div
        className={`fixed right-0 top-0 w-[100vw] h-screen bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] shadow-2xl transition-translate duration-300 ease-in-out md:w-1/2 ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <nav className="flex flex-col justify-start items-center text-center text-white gap-3">
          <div className="w-full p-[1rem] flex items-center justify-between">
            <div className="flex items-center gap-2">
            <img className="h-14" src="../../public/images/ppic.png"></img>
            <div className="text-left">
              <h3 className="font-semibold">Juan Santiago Cometorta</h3>
              <p>juancometorta@gmail.com</p>
            </div>
            </div>
            <button className="font-bold"
            onClick={toggleNavbar}>
              X
            </button>
          </div>
          <Anchor title='Home' />
          <Anchor title='Mangas' />
          <Anchor title='My mangas' />
          <Anchor title='Favorites' />
          <Anchor title='Logout' />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
