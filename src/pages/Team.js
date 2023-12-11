import React from "react";
import person from "../images/Amruthvarsh.jpeg"

export default function Dashboard(){
    return (
        <>
        <div className="max-w-[1480px] h-full mx-auto bg-white py-4 md:z-10">
            <h1 className="flex justify-center md:text-3xl sm:text-3xl text-2xl font-bold py-2 font-sans line mb-4 text-[#3d3056] z-20">Meet Our Team</h1>
            <div className="max-w-[1480px] grid md:grid-cols-4 gap-8 mx-auto bg-white py-4">
                <div className="group bg-[#211441] relative w-fit shadow-lg mx-auto" data-aos="fade-up">
                    <img src={person} alt="personImage" className="w-[250px] md:w-[250px] h-[250px]"/>
                    <h2 className="text-xl pt-2 text-center text-white font-semibold">Dr. N. Arjun</h2>
                    <h3 className="text-sm text-[#e3d0e7] text-center pb-2">Faculty Coordinator</h3>
                </div>
                <div className="group bg-[#211441] relative w-fit shadow-lg mx-auto" data-aos="fade-up">
                    <img src={person} alt="personImage" className="w-[250px] md:w-[250px] h-[250px]"/>
                    <h2 className="text-xl pt-2 text-center text-white font-semibold">Meeth Kumar Shah</h2>
                    <h3 className="text-sm text-[#e3d0e7] text-center pb-2">Chairperson</h3>
                </div>
                <div className="group bg-[#211441] relative w-fit shadow-lg mx-auto" data-aos="fade-up">
                    <img src={person} alt="personImage" className="w-[250px] md:w-[250px] h-[250px]"/>
                    <h2 className="text-xl pt-2 text-center text-white font-semibold">Amruthvarsh</h2>
                    <h3 className="text-sm text-[#e3d0e7] text-center pb-2">Chairperson</h3>
                </div>
                <div className="group bg-[#211441] relative w-fit shadow-lg mx-auto" data-aos="fade-up">
                    <img src={person} alt="personImage" className="w-[250px] md:w-[250px] h-[250px]"/>
                    <h2 className="text-xl pt-2 text-center text-white font-semibold">Amruthvarsh</h2>
                    <h3 className="text-sm text-[#e3d0e7] text-center pb-2">Chairperson</h3>
                </div>
            </div>
            <div className="max-w-[1480px] grid md:grid-cols-4 gap-8 mx-auto py-4 bg-[#eceef1]">
                <div className="group bg-[#211441] relative w-fit shadow-lg mx-auto" data-aos="fade-up">
                    <img src={person} alt="personImage" className="w-[250px] md:w-[250px] h-[250px]"/>
                    <h2 className="text-xl pt-2 text-center text-white font-semibold">Amruthvarsh</h2>
                    <h3 className="text-sm text-[#e3d0e7] text-center pb-2">Chairperson</h3>
                </div>
                <div className="group bg-[#211441] relative w-fit shadow-lg mx-auto" data-aos="fade-up">
                    <img src={person} alt="personImage" className="w-[250px] md:w-[250px] h-[250px]"/>
                    <h2 className="text-xl pt-2 text-center text-white font-semibold">Amruthvarsh</h2>
                    <h3 className="text-sm text-[#e3d0e7] text-center pb-2">Chairperson</h3>
                </div>
            </div>
        </div>
        </>
    )
}