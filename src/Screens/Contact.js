import React from 'react'

function Contact() {

    return (
        <section id="contact" className="bg-black bg-opacity-75 text-white body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-yellow-500">
                Have a project in mind?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Please fill out the form below and I will get back to you at the earliest. 
              </p>
            </div>
            <form
                name="contact"
                method="POST"
                action="https://formsubmit.co/1f9991316e4af8963489471dce7e3bcf"
                // className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                className="grid sm:grid-cols-5 lg:grid-cols-10"
                >
                <div className="sm:col-start-1  lg:col-start-2 lg:col-end-5 relative mb-4 text-left">
                    <label htmlFor="name" className="leading-7 text-sm ">
                    Name
                    </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="What can I call you?"
                    // style={{opacity:'50%'}}
                    className="w-full bg-black bg-opacity-40 placeholder-gray-400 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    
                    />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:3000/thanks"  />
                <div className="sm:col-start-1 lg:col-start-7 lg:col-end-10 relative mb-4 text-left">
                    <label htmlFor="email" className="leading-7 text-sm ">
                    Email
                    </label>
                    <input
                    // style={{opacity:'80%'}}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="How can I contact you?"
                    className="w-full bg-black bg-opacity-40 placeholder-gray-400 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    
                    />
                </div>
                <div className="sm:col-start-1 lg:col-start-2 lg:col-end-10 relative my-4 text-left">
                    <label
                    htmlFor="message"
                    className="leading-7 text-sm ">
                    Message
                    </label>
                    <textarea
                    // style={{opacity:'80%'}}
                    id="message"
                    name="message"
                    placeholder="I have an idea..."
                    className="w-full bg-black bg-opacity-40 placeholder-gray-400 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    
                    />
                </div>
                <button
                    type="submit"
                    className="sm:col-start-1 lg:col-start-5 lg:col-span-2 text-white bg-yellow-500 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-md text-lg">
                    Let's chat  
                </button>
            </form> 
          </div>
          {/* <ToastContainer/> */}
        </section>

    )
}

export default Contact
