import React from "react";
import gcicon from "../images/gc2.png"
import newsletter from "../images/newsletter.jpeg"

export default function App() {
    return (
    <div className="w-full py-[4rem] px-4 bg-white border-b-4" id="achievements">
      <h1 className="flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-mono line">Achievements</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border-black border-2 border-solid">
            <img src={newsletter} alt="eventImage" className="h-[200px]"/>
            <p className="text-center font-medium py-2 mx-8 mt-2">Google has featured the Crowdsource VBIT team in their prestigious Crowdsource Newsletter</p>
        </div>
        <div className="bg-white w-full flex flex-col items-center p-4 my-4 rounded-lg border-black border-2 border-solid">
            <h2 className="text-5xl font-bold text-center py-8 text-[#007ea7]">1000+</h2>
            <h3 className="text-center text-2xl font-bold">Contributions</h3>
            <img src={gcicon} alt="eventImage" className="mt-10 h-[100px] w-[100px]"/>
        </div>
        <div className="bg-white w-full flex flex-col items-center p-4 my-4 rounded-lg border-black border-2 border-solid">
            <h2 className="text-5xl font-bold text-center py-8 text-[#007ea7]">750+</h2>
            <h3 className="text-center text-2xl font-bold">App Downloads</h3>
            <img src={gcicon} alt="eventImage" className="mt-10 h-[100px] w-[100px]"/>
        </div>
        <div className="bg-white w-full flex flex-col items-center p-4 my-4 rounded-lg border-black border-2 border-solid">
            <h2 className="text-5xl font-bold text-center py-8 text-[#007ea7]">200+</h2>
            <h3 className="text-center text-2xl font-bold">Google Crowdsource Community Learning Registrations</h3>
        </div>
        </div>
    </div>
    )
}