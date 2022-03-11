/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

const backgroundList = [
    { id: 1, image: "./assets/img/vnya_background.png" },
    { id: 2, image: "./assets/img/vnya_about.png" },
    { id: 3, image: "./assets/img/vnya_timeline_12th.png" },
    { id: 4, image: "./assets/img/vnya_timeline_13th.png" },
]

export default function HomeBackground() {

    const renderBackground = () => {
        return backgroundList.map((background, index) => {
            return (
                <div className="hidden duration-1000 ease-in-out" data-carousel-item={index === 0 ? "active" : ""} key={index}>
                    <img src={background.image} className="h-full block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt={background.image} />
                </div>
            )
        })
    }

    return (
        <div id="default-carousel" data-carousel="slide" className="relative">
            <div className="overflow-hidden relative h-36 2sm:h-44 sm:h-80 md:h-96 lg:h-112 xl:h-128 midxl:h-144 2xl:h-160 3xl:h-176">
                {renderBackground()}
            </div>
            <button type="button" className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-customButton ring-2 xl:ring-4 ring-customButton group-focus:outline-none">
                    <svg className="w-5 h-5 text-customButton group-hover:text-customButton2 sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-customButton ring-2 xl:ring-4 group-focus:ring-customButton ring-customButton group-focus:outline-none">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-customButton group-hover:text-customButton2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
            </button>
        </div>
    )
}
