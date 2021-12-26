import React from 'react'
import logo from "../Assets/logo.png";
import behance from "../Assets/behance.png";
import insta from "../Assets/insta.png";
import linkedin from "../Assets/linkedin.png";
import whatsapp from "../Assets/whatsapp.png";
import email from "../Assets/email.png";
import { BrowserRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <section className="bg-black bg-opacity-80 text-white body-font font-light">
          <div className="container mx-auto  px-10 py-10 lg:px-20 text-center ">

            <div className="grid lg:grid-rows-3 lg:grid-cols-3">
                <div className="lg:col-start-2">
                    <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            src={logo}
                            className="w-12 mx-auto object-center"
                        />
                    </Link>
                </div>
                <div className="lg:col-start-2">
                    <p className="mx-auto">Handcrafted with love
                    <br/>From India</p>
                </div>
                <div className="flex gap-2 gap-x-6 mx-auto my-4 lg:col-start-2 lg:col-span-1">
                    
                    <a href="https://www.behance.net/vdta003ea6c" target="_blank" className="title-font font-medium text-white mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            src={behance}
                            className="w-7"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/vidita-agarwal-555175136/" target="_blank" className="mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            src={linkedin}
                            className="w-6"
                        />
                    </a>
                    <a href="https://www.instagram.com/vaga._.bond/" target="_blank" className="mb-2 md:mb-0">
                        <img
                            alt="testimonial"
                            src={insta}
                            className="w-6"
                        />
                    </a>
                    <a href="mailto:vdta003@gmail.com" className="title-font font-medium text-white mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            src={email}
                            className="w-7"
                        />
                    </a>
                    <a href="whatsapp://send?phone=919717970869" target="_blank" className="title-font font-medium text-white mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            src={whatsapp}
                            className="w-6"
                        />
                    </a>
                </div>
            </div>
            
          </div>
        </section>
    )
}

export default Footer
