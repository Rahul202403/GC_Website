import React from "react";

export default function Blog(props) {
    return (
        <div className="bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8">{props.items[0]}</h2>
            <h3 className="text-center text-4xl font-bold">{props.items[1]}</h3>
            <p className="text-center font-medium py-2 border-b mx-8 mt-8">- {props.items[2]}</p>
            <button className="bg-[#5e5ee2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-indigo-700">View</button>
        </div>
    )
}