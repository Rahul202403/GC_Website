import React from 'react'
export default function App(props) {
    return (
    <div className="group bg-white relative w-full h-[260px] duration-[0.3s] shadow-xl px-6 py-4 my-4 rounded-lg cursor-pointer hover:h-[500px]" data-aos="fade-up">
        <div className="z-10 relative w-fit h-fit translate-y-[-80px] shadow-lg">
            <img src={props.event.image} alt="eventImage" className="w-[100%] md:w-[100%] rounded-lg"/>
            <h2 className="text-2xl py-2 text-center text-[#007ea7] font-semibold">{props.event['event_name']}</h2>
        </div>
        <div className="translate-y-[-450px] hidden group-hover:block group-hover:translate-y-[-82px] duration-300">    
            <p className="font-medium py-2 mt-2 text-justify">{props.event['description']}</p>
        </div>
    </div>
    )
  }