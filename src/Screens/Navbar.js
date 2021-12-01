import React from 'react'
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      // <header className="bg-black bg-opacity-75 md:sticky top-0 z-10">
      //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          // <Link to={{pathname:"/"}} className="title-font font-medium text-white mb-4 md:mb-0">
          //   <img
          //       alt="testimonial"
          //       src={logo}
          //       className="w-12  flex-shrink-0 object-cover object-center"
          //   />
          // </Link>
      //     <nav className="md:ml-auto md:ml-4 md:py-1 
      //     md:pl-4 flex flex-wrap items-center text-base justify-center">
            // <Link to={{pathname:"/"}} className="mr-5 border-transparent border-b-2 hover:border-yellow-500 text-white">
            //   About
            // </Link>
            // <Link to={{pathname:"/work"}} className="mr-5 border-transparent border-b-2 hover:border-yellow-500 text-white">
            //   Work
            // </Link>
      //     </nav>
      //     <a href="#contact"
      //       className="inline-flex text-white items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">
      //       Let's Talk
      //     </a>
      //   </div>
      // </header>
      <header className="py-4 bg-black bg-opacity-75 md:sticky top-0 z-10">
        <div className="container flex justify-between items-center mx-auto px-4 md:px-14 lg:px-24 w-full">
          <Link to={{pathname:"/"}} className="mb-4 md:mb-0">
            <img
                alt="testimonial"
                src={logo}
                className="w-12 flex-shrink-0 object-cover object-center"
            />
          </Link>
          <div className=" md:flex space-x-4 items-center text-white">
            <Link to={{pathname:"/"}} className="border-transparent border-b-2 hover:border-yellow-500">
              About
            </Link>
            <Link to={{pathname:"/work"}} className="border-transparent border-b-2 hover:border-yellow-500">
              Work
            </Link>
            <a href="#contact">
              <button className="px-6 py-2 bg-yellow-500 font-bold focus:outline-none hover:bg-yellow-600 rounded-md text-base">
                Let's Talk
              </button>
            </a>
          </div>
          {/* <div className="md:hidden">
              <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
          </div> */}
        </div>
      </header>
    )
}

export default Navbar
