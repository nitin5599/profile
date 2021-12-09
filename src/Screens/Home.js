import React,{useEffect} from 'react'
import About from './About';
import Projects from './Projects';
import Extra from './Extra';
import hero from "../Assets/page1/HeroImage.png";
import desc from "../Assets/desc.png";
import market from "../Assets/marketing.png";
import vidita from "../Assets/vidita.png";
import useDocumentTitle from '../useDocumentTitle'

function Home() {
    useDocumentTitle('Vidita Mahesheka')
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <>
            <section style={{opacity:'80%'}} className="bg-black text-white body-font">
                <div className="static">
                    <div className="relative">
                        <img
                            className=" block max-h-screen"
                            alt="hero"
                            src={hero}
                        />
                        <div className="absolute px-2 left-0 inset-y-44 lg:inset-x-8 lg:top-20 ">
                            <img
                                className="lg:max-h-screen"
                                alt="hero"
                                src={vidita}
                            />
                        </div> 
                        <div className="hidden md:block absolute px-2 lg:inset-y-80 lg:right-10">   
                            <img
                                className="py-1 lg:max-h-screen "
                                alt="hero"
                                src={market}
                            />
                            <img
                                className="lg:max-h-screen"
                                alt="hero"
                                src={desc}
                            />                            
                            <button
                                className="text-white bg-yellow-600 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded-md text-lg">
                                Download Resume  
                            </button>
                        </div>
                    </div>
                    <div className="block lg:hidden grid grid-rows-1 p-2">
                        <div className="cpl-start-1">
                            <img
                                className="py-1 lg:max-h-screen "
                                alt="hero"
                                src={market}
                            />
                            <img
                                className="lg:max-h-screen"
                                alt="hero"
                                src={desc}
                            />
                            <button
                                className="text-white bg-yellow-600 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded-md text-lg">
                                Download Resume  
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Projects/>
            <Extra/>
        </>
    )
}

export default Home
