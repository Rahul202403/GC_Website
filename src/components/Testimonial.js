import React from "react";
import {FaQuoteLeft} from "react-icons/fa"

export default function Testimonial(props) {
    return (
        <div className="bg-[#efefef] w-full h-[400px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" data-aos="fade-up">
            <img className="w-20 h-20 mx-auto mt-[-3rem] bg-white rounded-[50%] border-white border-4" src={props.items['image']} alt="/" />
            <div className="h-[100%] overflow-y-scroll no-scrollbar">
                <div className="relative  text-[#fb8500]"><FaQuoteLeft size={15}/></div>
                <p className="text-justify font-medium py-2 mx-8 mt-8 font-serif">
                    {props.items['content']}
                </p>
            </div>
            <h3 className="text-center text-xl font-bold py-2 text-[#fb8500]">{props.items['author']}</h3>
        </div>
    )
}