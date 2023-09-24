import React from "react";
import {
    FaFacebookSquare,
    FaInstagram
} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col justify-center items-center bg-black text-gray-300">
            <div className="text-center">
                <h1 className="w-full text-3xl font-bold">GOOGLE CROWDSOURCE VBIT</h1>
                <div className="flex justify-center space-x-4 md:w-[75%] my-6">
                    <a  href="https://www.facebook.com/profile.php?id=61550637321395&mibextid=ZbWKwL" target="blank"><FaFacebookSquare size={30}/></a>
                    <a href="https://instagram.com/crowdsource_vbit?igshid=MzRlODBiNWFlZA==" target="blank"><FaInstagram size={30} /></a>
                </div>
            </div>
            <p className="pt-2">&copy; 2023 Google CrowdSource VBIT Vignana Bharathi Institute of Technology. All Rights Reserved.</p>
        </div>
    )
  }