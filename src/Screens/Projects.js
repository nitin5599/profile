import { HeartIcon } from "@heroicons/react/solid";
import React from "react";
import baraabari from "../Assets/page2/baraabari.png";
import { projects } from "../Data/projectData";
import casaone from "../Assets/page1/casaone.png";
import Group22 from "../Assets/page1/Group22.png";
import Group20 from "../Assets/page1/Group20.png";
import studio from "../Assets/page1/studio.png";
import ncert from "../Assets/page1/ncert.png";
import hyperdash from "../Assets/page1/hyperdash.png";
import amit from "../Assets/page1/amit.png";
import G from "../Assets/page1/G.png";
import image8 from "../Assets/page1/image8.png";
import image13 from "../Assets/page1/image13.png";

function Projects() {
    return (
      <>
        <section  className="bg-black bg-opacity-80 text-white body-font font-light">
          <div className="container mx-auto flex px-10 py-20 lg:px-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h4 className="title-font sm:text-4xl text-3xl mb-4 font-small text-white">
              Top 11 projects on architecture and design
              </h4>
              <p className="mb-8 leading-relaxed">
              As a part of my thesis project, I worked in the domain of social innovation through interaction design.
              This project was featured in the Dezeen Magazine under the top 11 projects on architecture and design.
              </p>
              <div className="flex justify-center">
                <a
                  style={{backgroundColor:"rgba(204, 141, 28, 1)"}}
                  target="_blank"
                  href="https://www.dezeen.com/2021/05/12/the-design-village-architecture-design-school-show/"
                  className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                  View Feature
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={baraabari}
              />
            </div>
          </div>
        </section>
        <section id="projects" className="bg-black bg-opacity-75 text-white body-font font-light">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <h1 
              style={{color:"rgba(204, 141, 28, 1)"}}
              className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
              <HeartIcon className="mx-auto fill-current text-red-600 inline-block w-10 mb-2" /> from Clients
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                2016 through 2021, I as a designer have been involved in projects catering to print and media, 
                branding, visual communication, social media content creater, UI designer, UX designer and interaction 
                design.
              </p>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-12 mx-auto grid-flow-row-dense gap-4 flex flex-wrap justify-center content-center my-8">
              <div className="mx-auto col-start-1 col-span-2 lg:col-start-3 lg:col-span-2">
                <a target="_blank" href="https://www.archohm.com/">
                  <img className="" src={studio} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-3 col-span-2 lg:col-start-5 lg:col-span-2">
                <a target="_blank" href="https://ncert.nic.in/">
                  <img src={ncert} alt="v/"/>   
                </a>
              </div>  
              <div className="mx-auto col-start-1 col-span-2 lg:col-start-7 lg:col-span-2">
                <a target="_blank" href="https://www.orgzit.com/">
                  <img  src={image8} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-3 col-span-2 lg:col-start-9 lg:col-span-2">
                <a target="_blank" href="http://hyperdash.city/">
                  <img  src={hyperdash} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-1 col-span-2 lg:col-start-3 lg:col-span-2">
                <a target="_blank" href="https://www.workongrid.com/production-tracker">
                  <img  src={image13} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-3 col-span-2 lg:col-start-5 lg:col-span-2">
                <a target="_blank" href="https://www.humanrightsinitiative.org/">
                  <img src={Group20} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-1 col-span-2 lg:col-start-7 lg:col-span-2">
                <a target="_blank" href="https://www.casaone.com/">
                  <img  src={casaone} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-3 col-span-2 lg:col-start-9 lg:col-span-2">
                <a target="_blank" href="https://www.workongrid.com/">
                  <img src={G} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-1 col-span-2 lg:col-start-5 lg:col-span-2">
                <a target="_blank" href="https://www.instagram.com/_domyshoot_/">
                  <img src={Group22} alt=""/>   
                </a>
              </div>  
              <div className="mx-auto col-start-3 col-span-2 lg:col-start-7 lg:col-span-2">
                <a target="_blank" href="https://www.instagram.com/p/B_UD58FhwCi/">
                  <img src={amit} alt=""/>   
                </a>
              </div>  
            </div>
          </div>
        </section>
        </>
    )
}
/* {projects.map((project) => (
                <a
                  target="_blank"
                  href={project.link}
                  key={project.id}
                  className="lg:w-1/4 md:w-1/3 w-1/2 px-5 my-2">
                  <div className="flex relative justify-center content-center">
                    <img
                      alt="gallery"
                      className="relative block"
                      src={project.image}
                    />
                  </div>
                </a>
              ))} */
export default Projects
