import React from 'react'
import { SearchIcon, BeakerIcon, LibraryIcon, LightBulbIcon } from "@heroicons/react/outline";

function About() {
    return (
      <>          
        <section className="bg-black bg-opacity-75 text-white body-font font-light">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            
            <div className="flex flex-col w-full mb-10">
              <div className="border-t-2 border-yellow-600 w-20 my-3 self-center"></div>
              <h1 style={{color:"rgba(204, 141, 28, 1)"}} className="sm:text-4xl text-3xl font-medium title-font mb-4">
              Design Process
              </h1>
              <p className="lg:w-3/4 mx-auto leading-relaxed text-base">
              I believe that my user is the lethargic human on the planet and needs to be served everything on a platter.
              Keeping that in mind, I aim to add fun, simplicity and convenience to their lives to solve complex problems. 
              </p>
            </div>

            {/* <div className="flex flex-wrap justify-center my-8 -mx-2" > */}
              {/* <div className="grid grid-cols-2 lg:px-40 justify-items-center"> */}
              <div className="grand_parent  my-10">
                <div className="parents">
                  <div className="child">
                    <h2 className="sm:text-2xl text-2xl text-left 
                    font-medium title-font text-white mb-1 ">
                     <SearchIcon className="inline-block w-6"/> Research
                    </h2>
                    <p className="  text-left leading-relaxed text-base">
                      Starting with primary and secondary research to be able to get a better idea of the brief.
                    </p>
                  </div>
                  <div className="child">
                    <h2 className="sm:text-2xl text-2xl text-left font-medium
                    title-font text-white mb-1 ">
                    <LightBulbIcon className="inline-block w-6"/> Conceptualise
                    </h2>
                    <p className="text-left leading-relaxed text-base ">
                      Starting with primary and secondary research to be able to get a better idea of the brief.
                    </p>
                  </div>
                </div>
                </div>
                <div className="grand_parent my-8">
                  <div className="parents">
                    <div className="child">
                      <h2 className="sm:text-2xl text-2xl text-left font-medium 
                      title-font text-white mb-1">
                      <LibraryIcon className="inline-block w-6"/> Lo/Hi-fi Prototype
                      </h2>
                      <p className="text-left leading-relaxed text-base">
                        Starting with primary and secondary research to be able to get a better idea of the brief.
                      </p>
                    </div>
                    <div className="child">
                      <h2 className="sm:text-2xl text-2xl text-left font-medium
                      title-font text-white mb-1">
                      <BeakerIcon className="inline-block w-6"/>  User testing
                      </h2>
                      <p className="text-left leading-relaxed text-base">
                        Starting with primary and secondary research to be able to get a better idea of the brief.
                      </p>
                    </div>
                  </div>
                {/* </div> */}
              </div>
                {/* <div className="px-10 py-10 ng-auto opacity-1 ">
                  <h2 className="sm:text-2xl text-2xl text-left 
                  font-medium title-font text-white mb-1 px-10">
                  Research
                  </h2>
                  <p className="  text-left leading-relaxed text-base px-10">
                    Starting with primary and secondary research to be able to get a better idea of the brief.
                  </p>
                </div>
                <div className="px-10 py-10 ng-auto self-center opacity-1 ">
                  <h2 className="sm:text-2xl text-2xl text-left font-medium
                   title-font text-white mb-1 px-10">
                  Conceptualise
                  </h2>
                  <p className="text-left leading-relaxed text-base px-10">
                    Starting with primary and secondary research to be able to get a better idea of the brief.
                  </p>
                </div>
                <div className="px-10 py-10 ng-auto opacity-1 ">
                  <h2 className="sm:text-2xl text-2xl text-left font-medium 
                  title-font text-white mb-1 px-10">
                  Lo/Hi-fi Prototype
                  </h2>
                  <p className="text-left leading-relaxed text-base px-10">
                    Starting with primary and secondary research to be able to get a better idea of the brief.
                  </p>
                </div>
                <div className="px-10 py-10 ng-auto opacity-1 ">
                  <h2 className="sm:text-2xl text-2xl text-left font-medium
                   title-font text-white mb-1 px-10">
                  User testing
                  </h2>
                  <p className="text-left leading-relaxed text-base px-10">
                    Starting with primary and secondary research to be able to get a better idea of the brief.
                  </p>
                </div> */}
              {/* </div> */}
            {/* </div> */}

            
            <div className="flex justify-center">
              <a
                style={{backgroundColor:"rgba(204, 141, 28, 1)"}}
                href="#contact"
                className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Let’s design together
              </a>
            </div>

          </div>
        </section>
      </>
    )
}

export default About
