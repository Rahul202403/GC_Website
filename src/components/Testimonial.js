import React from "react";
import {FaQuoteLeft} from "react-icons/fa"

export default function Testimonial(props) {
    return (
        <div className="bg-[#efefef] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-[50%] border-white border-4" src={props.items['image']} alt="/" />
            <div className="relative  text-[#fb8500]"><FaQuoteLeft size={15}/></div>
            <p className="text-justify font-medium py-2 mx-8 mt-8 font-serif">
                    {props.items['content']}
            </p>
            <h3 className="text-center font-bold py-2 text-[#fb8500]">{props.items['author']}</h3>
        </div>
    )
}