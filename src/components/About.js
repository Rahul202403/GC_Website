import React from "react";
/*import vbit from "../images/vbit.jpg"*/

export default function About() {
    return (
      <div className="w-full bg-white py-16 px-4" id="about">
            <div className="flex flex-col justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-2 pb-4 text-center">Google CrowdSource VBIT</h1>
                <p className="text-justify">Crowdsource is a fun, easy way for you to use your own abilities to contribute to the building blocks of Artificial Intelligence(AI). Crowdsource asks short, simple questions relevant to your language or community. Your answers help improve the quality of Google services that millions of people like you use services like Google translate, Google maps and Google search. 
At Google Crowdsource VBIT, we believe in the power of collaboration and the strength of collective intelligence. We value your expertise and encourage you to share your insights, suggestions, and ideas. As we embark on this journey together, let us embrace the spirit of innovation, curiosity, and inclusivity.</p>
                <button className="bg-[#007ea7] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-[#0077b6]"><a href="https://crowdsource.google.com/about/" target="blank">Know More</a></button>
            </div>
        </div>
    )
  }