import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

export default function Slider(props) {

    const [currentIndex, setCurrenIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.images.length - 1 : currentIndex - 1;
        setCurrenIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === props.images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrenIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrenIndex(slideIndex);
    }
  return (
    <div className="max-w-[1480px] h-[480px] mx-auto py-8 px-4 relative group" id="home">
        <div style={{backgroundImage: `url(${props.images[currentIndex]})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="flex top-4 justify-center py-2 mb-4">
            {props.images.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                    <RxDotFilled />
                </div> 
            ))}
        </div>
    </div> 
  )
}