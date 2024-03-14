import React, { useState } from "react";
import SmartIcon from "../../Assets/Icons/SmartIcon.png";
import { IoSearchOutline } from "react-icons/io5";


function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="w-full flex justify-between px-3 py-3 shadow-navbar-button">
      <div className="flex gap-5 items-center">
        <div className="flex flex-col">
          <img className="w-[120px]" src={SmartIcon} alt="Smart Icon" />
          <p className="text-lg font-bold text-theme-blue">RECOGNITION</p>
        </div>
        <div
          className={`w-6 h-5 flex flex-col gap-[8px] cursor-pointer hamburger-menu ${
            isActive ? "active" : ""
          } `}
          onClick={handleClick}
        >
          <div className="w-full h-[2px] bg-gray transition-transform duration-300 transform menu-line"></div>
          <div className="w-full h-[2px] bg-gray transition-opacity duration-300 opacity-100 menu-line"></div>
          <div className="w-full h-[2px] bg-gray transition-transform duration-300 transform menu-line"></div>
        </div>
        <div className="w-[350px] h-10 border-2 rounded-full border-[#D3D3D3] relative pl-6 pr-12">
          <input className="w-full h-full outline-none border-none text-sm" type="text" placeholder="Search ..."/>
          <div className="absolute top-[2px] right-4 cursor-pointer"><IoSearchOutline size={32} color="#D3D3D3"/></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
