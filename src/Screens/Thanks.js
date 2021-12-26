import { HeartIcon } from '@heroicons/react/outline'
import React from 'react'

function Thanks() {
    return (
        <>
        <section className="bg-black bg-opacity-80 text-white body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font font-bold mb-4 text-yellow-500">
                        <HeartIcon className="mx-auto fill-current text-red-600 inline-block w-10 mb-2"/> Thank You!
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Thank you for contacting us.<br/>
                        We will contact you soon through your email, stay tuned.
                    </p>
                </div>
            </div>
        </section>    
        </>
    )
}

export default Thanks
