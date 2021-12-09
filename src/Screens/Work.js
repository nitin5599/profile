import React from 'react'
import Templates from './Templates'
import Testimonials from './Testimonials'
import hero from "../Assets/page1/HeroImage.png";
import title from "../Assets/title.png";
import subtitle from "../Assets/subtitle.png";
import useDocumentTitle from '../useDocumentTitle'

function Work() {
    useDocumentTitle('Vidita Mahesheka - Work')
    return (
        <>
            <section style={{opacity:'80%'}} className="bg-black text-white body-font">
                <div className="relative overflow-hidden">
                    <img src={hero} alt="Avatar" className="object-contain" />
                    <div className="absolute top-10 left-1 lg:top-20 lg:left-20 py-2 text-white 
                        lg:text-4xl font-bold text-right ">
                        <h1 className="">UI Designer</h1>
                        <h1>UX Designer</h1>
                        <h1>Graphic Designer</h1>
                        <h1>Marketing Enthusiast</h1>
                        <h1>Tarot card reader</h1>
                    </div>
                {/* </div> */}
                <div className="static">
                    {/* <div className="relative"> */}
                        {/* <img
                            className=" block max-h-screen"
                            alt="hero"
                            src={hero}
                        /> */}
                        {/* <div className="absolute px-2 left-0 top-20 lg:inset-x-8 lg:top-20 ">
                            <img
                                className="lg:max-h-screen"
                                alt="hero"
                                src={vidita}
                            />
                        </div>  */}
                        <div className="hidden md:block absolute px-2 lg:inset-y-80 lg:right-10">   
                            <img
                                className="py-1 lg:max-h-screen "
                                alt="hero"
                                src={title}
                            />
                            <img
                                className="lg:max-h-screen"
                                alt="hero"
                                src={subtitle}
                            />                            
                            <button
                                className="text-white bg-yellow-600 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded-md text-lg">
                                Download Resume  
                            </button>
                        </div>
                    </div>
                    <div className="block lg:hidden grid grid-rows-1 p-2">
                        <div className="col-start-1">
                            <img
                                className="py-1 lg:max-h-screen "
                                alt="hero"
                                src={title}
                            />
                            <img
                                className="lg:max-h-screen"
                                alt="hero"
                                src={subtitle}
                            />
                            <button
                                className="text-white bg-yellow-600 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded-md text-lg">
                                Download Resume  
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Templates/>
            <Testimonials/>
        </>
    )
}

export default Work
