import React from 'react'
import { motion } from "framer-motion";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HomeContent = () => {
  return (
   <>
<div className='min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 max-h-full mx-auto text-white '>
   <h1 className='text-center justify-center text-3xl font-bold py-10'>Empowering business </h1>

    <div className="flex flex-col md:flex-row items-center justify-center max-w-[90%] mx-auto px-5 text-white mb-10">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left space-y-2"
      >
        <h1 className="text-4xl font-bold">Aesthetic Animation</h1>
        <p className="text-lg text-gray-300">
        Empower your business with game changing strategies innovation  and unstoppable momentum Elevate your brand  dominate your market and fuel success with killer content that converts
        Let me know if you want a specific tone or industry focus
        </p>
        <p className="text-lg text-gray-300">
        Build  innovate and scale with powerful digital solutions that drive success  enhance user experience and dominate the market The future is yours—develop it
        </p>
      </motion.div>

      {/* Lottie Animation Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center"
      >
        <DotLottieReact
          src="https://lottie.host/64733e3e-66c3-472c-bc0e-82be035c51c3/i7U8y9cbvI.lottie"
          loop
          autoplay
          className="w-[700px] h-[700px]"
        />
      </motion.div>
    </div>

 
   </div>
   </>
  )
}

export default HomeContent