import React from "react";
import Testimonial from "./Testimonial";

export default function Blogs(props) {
    return (
      <div className="w-full py-[4rem] px-4 bg-[#003459]" id="blogs">
        <h1 className="flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-mono line text-white">Testimonials</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-4">
            {props.testimonials.map((item)=> {
                return <Testimonial items={item}/>
              }
            )}
        </div>
      </div> 
    )
}