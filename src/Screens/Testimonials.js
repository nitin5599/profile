import React from "react";
import Carousel from "react-elastic-carousel";
import { HeartIcon } from "@heroicons/react/solid";
import { testimonials } from "../Data/userData";

const breakPoints = [
  { width: 1, itemsToShow: 1, showArrows: false },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];
// const Settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 6,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 1500,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 1300,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

function Testimonials() {
    return (
        <section id="testimonials" style={{opacity:'80%'}} className="bg-black text-white body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-10">
            <div className="flex flex-col w-full lg:mb-10">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-yellow-500">
                <HeartIcon className="mx-auto fill-current text-red-600 inline-block w-10 mb-2" /> from Clients
              </h1>
            </div>
            <div className="flex md:flex-wrap m-4">
              <Carousel breakPoints={breakPoints} >              
                {
                  testimonials.map((testimonial) => 
                    <div key={testimonial.id} className="p-2 lg:p-4 text-left">
                      <div className="h-full  bg-gray-800 bg-opacity-40 p-8 rounded-2xl">
                        <p className="mb-6 lg:text-base md:text-xs text-xs">{testimonial.qoute}</p>
                        <div className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src={testimonial.image}
                            className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font md:text-sm lg:text-sm text-xs text-yellow-500">
                              <p>{testimonial.name}</p>
                            </span>
                            <span className="text-gray-500 md:text-sm lg:text-sm text-xs">
                              <p>{testimonial.company}</p>
                            </span>
                          </span> 
                        </div>
                      </div>
                    </div>
                  )
                }
              </Carousel>
            </div>
            {/* <div className="block md:hidden md:flex-wrap m-4">          
                {
                  testimonials.map((testimonial) => 
                    <div key={testimonial.id} className="p-4 w-full h-full text-left">
                      <div className="h-full  bg-gray-800 bg-opacity-40 p-8 rounded-2xl">
                        <p className="mb-6 lg:text-base md:text-xs text-xs">{testimonial.qoute}</p>
                        <div className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src={testimonial.image}
                            className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font md:text-sm lg:text-sm text-xs text-yellow-500">
                              <p>{testimonial.name}</p>
                            </span>
                            <span className="text-gray-500 md:text-sm lg:text-sm text-xs">
                              <p>{testimonial.company}</p>
                            </span>
                          </span> 
                        </div>
                      </div>
                    </div>
                  )
                }
            </div> */}
          </div>
        </section>
    )
}

export default Testimonials
