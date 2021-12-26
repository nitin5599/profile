import React from 'react'
import people from "../Assets/page1/people.png";
import people2 from "../Assets/page1/people2.png";
import people3 from "../Assets/page1/people3.png";
import people4 from "../Assets/page1/people4.png";
import me from "../Assets/page1/me.png";
import party from "../Assets/page1/party.png";
import office from "../Assets/page1/office.png";
import cards from "../Assets/page1/cards.png";
import mountains from "../Assets/page1/mountains.png";
import cake from "../Assets/page1/cake.png";
import tower from "../Assets/page1/tower.png";
import men from "../Assets/page1/men.png";
import street from "../Assets/page1/street.png";

function Extra() {
    return (
        <section className="bg-black bg-opacity-80 text-white body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <h1 
              style={{color:"rgba(204, 141, 28, 1)"}}
              className="sm:text-4xl text-3xl font-medium title-font mb-4">
                On the other side
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Apart from being a designer, I am extremely passionate about traveling, spirituality, books, music and food. 
              </p>
            </div>

            <div className="grid grid-cols-12 grid-flow-row-dense gap-1 ">
                <div className="col-start-2 col-end-4 row-span-2 bg-gray-800 text-white text-center">
                    <img className="h-full" src={cards} />
                </div>
                <div className="col-start-4 col-end-6 row-span-1 bg-gray-800 text-white text-center">
                    <img className="h-full" src={mountains} />   
                </div>
                <div className="col-start-6 col-end-8 row-span-1 bg-gray-800 text-white text-center">
                    <img className="h-full" src={people} />
                </div>
                <div className="col-start-8 col-span-1 row-span-1 bg-gray-800 text-white text-center">
                    <img className="h-full" src={tower} />
                </div>
                <div className="col-start-9 col-span-1 row-span-1 bg-gray-800 text-white text-center">
                    <img className="h-full" src={men} />
                </div>
                <div className="col-start-10 col-end-12 row-span-1 bg-gray-800 text-white text-center">
                    <img className="h-full w-full" src={office} />
                </div>
                <div className="col-start-2 col-end-4 row-span-2 bg-gray-800 text-white text-center ">
                    <img className="h-full w-full" src={people4} />
                </div>
                <div className="col-start-4 col-end-6 row-span-3 bg-gray-800 text-white text-center ">
                    <img className="h-full" src={me} />
                </div>
                <div className="col-start-6 col-end-9 row-span-3 bg-gray-800 text-white text-center ">
                    <img className="h-full" src={party} />
                </div>
                <div className="col-start-9 col-span-1 row-span-3 bg-gray-800 text-white text-center ">
                    <img className="h-full" src={people3} />
                </div>
                <div className="col-start-10 col-span-2 bg-gray-800 text-white text-center ">
                    <img className="h-full w-full" src={people2} />
                </div>
                <div className="col-start-10 col-span-1 row-span-2 bg-gray-800 text-white text-center ">
                    <img className="h-full w-full" src={street} />
                </div>
                <div className="col-start-11 col-span-1 row-span-2 bg-gray-800 text-white text-center ">
                    <img className="h-full w-full" src={cake} />
                </div>
            </div>
            {/* </div> */}
            {/* <div className="grid gap-1"> */}
                {/* <div className="bg-no-repeat w-auto h-64" style={{backgroundImage:`url(${cards})`}}></div> */}
                {/* <div className="grid gap-1">
                    <img className="h-64" src={cards} />
                    <img className="h-64" src={people4} />
                </div>
                <div className="grid grid-cols-4 gap-1">
                    <img className="h-48" src={mountains} />
                    <img className="h-48" src={people} />
                    <img className="h-48" src={tower} />
                    <img className="h-48" src={men} />
                </div>
                <div className="">
                    3   
                </div> */}
                {/* <img className="h-full" src={cards} /> */}
                {/* <img className="h-48" src={mountains} />
                <img className="h-48" src={people} />                
                <div className="grid grid-cols-2 gap-1">
                    <img className="h-48" src={tower} />
                    <img className="h-48" src={men} />
                </div>
                <div className="grid grid-cols-4 gap-1">
                    <img className="h-48 col-span-4" src={office} />
                </div> */}
                {/* <img className="" src={people4} />                 */}
                
            {/* </div> */}
            
            
          </div>
        </section>
        )
}

export default Extra
