import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Content = () => {
  return (
   

    <>
    <div className="min-h-screen bg-background font-inter px-12 ml-24">

      <h1 className='text-center text-4xl font-bold '>Empowering business</h1>
      <p className='text-center text-xl font-thin mt-5'>Grow Together with Advanced Technology Solutions, In-Depth Analysis, and Highly Trained Professionals.</p>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-heading font-heading text-foreground">
              Transform Your Digital Experience
            </h1>
            <h2 className="text-2xl text-accent">
              Create Stunning Web Solutions
            </h2>
            <p className="text-body text-accent-foreground leading-relaxed">
              We specialize in creating beautiful, responsive, and user-friendly websites that help businesses grow and succeed in the digital world. Our team of experts combines creativity with technical expertise to deliver outstanding results.
            </p>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300">
              Learn More <FaArrowRight />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.9 }}
            className="lg:w-1/2"
          >
            <div className="relative overflow-hidden ">
            <DotLottieReact
            src="https://lottie.host/595ac75d-8f06-4aef-8aa6-813baf824ac5/gi3FhYKYt6.lottie"
            loop
            autoplay
               />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-20 bg-gradient-to-br from-primary/20 via-secondary to-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl font-heading text-foreground">
              Innovate. Create. Deliver.
            </h2>
            <p className="text-body text-accent-foreground">
              Our commitment to excellence drives us to push boundaries and deliver exceptional digital experiences that engage and inspire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Modern Design",
                  description: "Clean and contemporary aesthetics"
                },
                {
                  title: "Responsive",
                  description: "Perfectly adapted to all devices"
                },
                {
                  title: "Performance",
                  description: "Optimized for speed and efficiency"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-heading text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-accent">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content