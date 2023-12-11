import React from "react";
import Event from "./Event"

export default function Events(props) {
  return (
    <div className="w-full py-[4rem] px-4 bg-[#003459] border-b-4 border-t-4 ease-linear duration-200" id="events">
      <h1 className="flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white font-mono line mb-20">Events</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-14 md:gap-8">
          {props.eventImages.map((item)=>{
            return <Event event={item}/>
          }
          )}
        </div>
    </div>
  )
}