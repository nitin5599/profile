import React from 'react'
import dailyui from "../Assets/page2/dailyui.png";
import baraabari from "../Assets/page2/baraabari.png";
import dg from "../Assets/page2/dg.png";
import nextgen from "../Assets/page2/nextgen.png";
import scale from "../Assets/page2/scale.png";
import meta from "../Assets/page2/meta.png";
import sketch from "../Assets/page2/sketch.png";
import pot from "../Assets/page2/pot.png";
import pattern from "../Assets/page2/pattern.png";
import remember from "../Assets/page2/remember.png";
import nisaad from "../Assets/page2/nisaad.png";
import ui from "../Assets/page2/ui.png";
import pathto from "../Assets/page2/pathto.png";

import rect from "../Assets/rect.png";
import uid from "../Assets/uid.png";

function Templates() {
    return (
        <section className="bg-black bg-opacity-75 text-white body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">

                <div className="grid grid-cols-12 grid-flow-row-dense gap-6 ">
                    <div className="relative col-start-1 col-span-12">
                        <a target="_blank" href="https://www.behance.net/gallery/103702807/Baraabari-Bringing-the-Blind-and-Sighted-together">   
                            <img className="temp1 object-fill w-full" src={dailyui} alt=""/>
                            <img className="temp1 absolute object-fill h-64 w-full bottom-0 left-0" src={rect} alt=""/>
                            <p className="container temp_title absolute mx-auto text-base lg:text-lg">Interaction design // UI Design </p>
                        </a>    
                    </div>
                    <div className="col-start-1 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/103702807/Baraabari-Bringing-the-Blind-and-Sighted-together">
                            <img className="object-fill h-full w-full" src={baraabari} alt=""/>   
                        </a>
                    </div>
                    <div className="col-start-7 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/104092225/Dissertation-Effectiveness-and-Design-of-Digital-Games">
                            <img className="object-fill h-full w-full" src={dg} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-1 col-span-12">
                        <a target="_blank" href="https://www.behance.net/gallery/124795479/Hyperdash">
                            <img className="object-fill h-full w-full" src={nextgen} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-1 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/91296497/Scale-Life-of-the-fish">
                            <img className="h-full w-full" src={scale} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-7 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/91079119/Qile-ke-Rang-mein-%28In-the-color-of-the-fort%29">
                            <img className="h-full w-full" src={meta} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-1 col-span-6 ">
                        <a target="_blank" href="https://www.behance.net/gallery/90838169/Less-is-More">
                            <img className="w-full" src={pot} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-7 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/86545665/One-Up">
                            <img className="w-full" src={remember} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-1 col-span-12">
                        <a target="_blank" href="https://www.behance.net/gallery/72830807/Visual-Ergonomics-and-Infographics">
                            <img className="w-full" src={pathto} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-1 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/72831183/Visual-Ergonomics-in-Color-Vision-Defieciency">
                            <img className="w-full" src={pattern} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-7 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/73282999/Design-Portfolio">
                            <img className="w-full" src={ui} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-1 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/73282999/Design-Portfolio">
                            <img className="w-full" src={sketch} alt=""/>
                        </a>
                    </div>
                    <div className="col-start-7 col-span-6">
                        <a target="_blank" href="https://www.behance.net/gallery/73282999/Design-Portfolio">
                            <img className="w-full" src={nisaad} alt=""/>
                        </a>
                    </div>
                    <button className="col-start-1 col-span-12 md:col-start-1 md:col-span-6 lg:col-start-4 lg:col-span-3 text-white bg-transparent border-2 border-yellow-500 my-4 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-md text-lg">
                        Let's chat  
                    </button>
                    <button className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-3 text-white bg-yellow-500 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-md text-lg">
                        See All Projects  
                    </button>
                </div>            
                
            </div>
        </section>
    )
}

export default Templates
