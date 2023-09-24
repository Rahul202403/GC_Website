import React, {useState} from "react";
import vbitlogo from "../images/vbitlogo.png";
import gcvbitlogo from "../images/gcvbitlogo.png";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <>
        <div className="max-w-[1240px] flex justify-between h-[120px] bg-white">
            <img src={vbitlogo} alt="vbit-logo" className="w-fit h-fit p-2"/>
            <img src={gcvbitlogo} alt="gc-vbit-logo" className="hidden md:flex p-2"/>
        </div>
        <div className="flex md:flex-row-reverse justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-[#003459] text-white">
            <img src={gcvbitlogo} alt="gc-vbit-logo" className="w-16 h-16 md:hidden"/>
            <ul className="hidden md:flex">
                <li className="p-4 hover:font-bold hover:text-[#fb8500]"><a href="/">Home</a></li>
                <li className="p-4 hover:font-bold hover:text-[#fb8500]"><a href="#about">About</a></li>
                <li className="p-4 hover:font-bold hover:text-[#fb8500]"><a href="#events">Events</a></li>
                <li className="p-4 hover:font-bold hover:text-[#fb8500]"><a href="#achievements">Achievements</a></li>
            </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 ease-in-out duration-500 z-10 bg-[#003459]" : "fixed left-[-100%]"}>
        <img src={gcvbitlogo} alt="gc-vbit-logo" className="w-16 h-16 m-4"/>
            <ul className="uppercase p-4">
                <li className="p-4 border-b border-gray-600 hover:font-bold hover:text-[#fb8500]" onClick={handleNav}><a href="/">Home</a></li>
                <li className="p-4 border-b border-gray-600 hover:font-bold hover:text-[#fb8500]" onClick={handleNav}><a href="#about">About</a></li>
                <li className="p-4 border-b border-gray-600 hover:font-bold hover:text-[#fb8500]" onClick={handleNav}><a href="#events">Events</a></li>
                <li className="p-4 border-b border-gray-600 hover:font-bold hover:text-[#fb8500]" onClick={handleNav}><a href="#achievements">Achievements</a></li>
            </ul>
        </div>
        </div>
    </>
  )
}