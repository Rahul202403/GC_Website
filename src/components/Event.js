import React from 'react'
export default function App(props) {
    return (
    <div className="bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <div className="mx-auto grid md:grid-cols-3 gap-2">
            <img src={props.event.image} alt="eventImage" className="h-[200px] w-[500px] md:w-fit float-left"/>
            <div className="flex flex-col justify-center md:col-span-2">
                <h2 className="text-2xl font-bold py-2">{props.event['event_name']}</h2>
                <p className="font-medium py-2 mt-2 text-justify">{props.event['description']}</p>
            </div>
        </div>
    </div>
    )
  }