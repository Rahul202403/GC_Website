import React from "react";
import Blog from "./Blog"

export default function Blogs(props) {
    return (
      <div className="w-full py-[4rem] px-4" id="blogs">
        <h1 className="flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white font-mono">Blogs</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {props.blog.map((item)=> {
              return <Blog items={item}/>
              }
            )}
        </div>
      </div> 
    )
  }