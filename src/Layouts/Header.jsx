import React from "react";
import logo from "../assets/icons/logo.png";
import ExArrow from "../assets/icons/ExArrow.png";
import Search from "../assets/icons/Search.png";

function Header() {
  return (
    <header className=" w-full  ">
      <div className="flex xl:h-[84px] h-[74px] xl:mx-[30px] mx-[25px] xl:my-[16px] my-[12px] ">
        <div className="bg-red-100 w-[50%] flex h-full">
          <span>
            <img src={logo} alt="" />
          </span>
          <div className="flex items-center ml-2  ">
            <h2 className="font-medium mr-1">Pardesipura</h2>
            <p>Electronic Complex</p>
            <img src={ExArrow} alt="" />
          </div>
        </div>
        <div className="bg-green-400 w-[50%] h-full ">
          <div className="relative mt-2">
            <img src={Search} className="absolute mt-3" alt="Search" />
            <input
              type="text"
              className="h-12 w-24 pl-8  placeholder-black outline-none rounded-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="bg-green-400 w-[50%] h-full "></div>
      </div>
    </header>
  );
}

export default Header;
//ds
