import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CategoryCard from "@/components/CategoryCard";

import Flash from "@/public/Flash.svg";
import Hero from "@/public/hero.jpg";
import Rocket from "@/public/Rocket.svg";
import Sparkles from "@/public/Sparkles.svg";
import love_black from "@/public/love-black.svg";
import love_white from "@/public/love-white.svg";
import office from "@/public/work/office.jpg"
import college from "@/public/work/college.jpg"
import img1 from "@/public/colleges/img1.jpg"
import img2 from "@/public/colleges/img2.jpg"
import img3 from "@/public/colleges/img3.jpg"
import img4 from "@/public/colleges/img4.jpg"
import img5 from "@/public/colleges/img5.jpg"


export default function Colleges() {
  


  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c A brief intro about my self. Well a little brag about myself. 🐼\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
  <>
     <div className="bg-[#FDF3EE]  " id='about min-w-[50%]'>
            <section className="max-w-screen-2xl mx-auto">
                {/* Main Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className=" lg:text-4xl font-bold text-gray-800">
                            Discover the range of real <br /> estate{" "}
                            <span className="text-orange-500">services</span> we offer
                        </h2>
                        <div className=" mt-4 lg:mt-10 flex justify-center lg:justify-start">
                            <Image
                                src={college}
                                alt="Professional Real Estate Agent"
                                className=" rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-1/2">
                        {/* Vector Image */}
                        {/* <div className="relative flex justify-center mb-3 lg:mb-10">
                            <Image
                                src={starVectorIcon}
                                className="  "
                                alt="Vector Graphic"
                            />
                        </div> */}

                        {/* Service 1 */}
                        <div className="flex items-start space-x-4 lg:mb-6">
                            <h3 className="lg:text-3xl  font-bold text-gray-800">01</h3>
                            <div className="w-full md:w-[400px]">
                                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Buy a home</h4>
                                <p className="text-sm text-[#2D2D2D] lg:my-2">
                                    Find your ideal home effortlessly with our expert guidance &
                                    extensive property listings, ensuring a smooth and satisfying
                                    home-buying experience.
                                </p>
                                <div className="border-t-2 lg:my-3"></div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex items-start space-x-4 lg:mb-6">
                            <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
                            <div className="w-full md:w-[400px]">
                                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Rent a home</h4>
                                <p className="text-sm text-[#2D2D2D] lg:my-2">
                                    Find your perfect rental home with ease. Our service offers
                                    personalized options and expert support to help you secure a
                                    comfortable and ideal living space.
                                </p>
                                <div className="border-t-2 my-1 lg:my-3"></div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex items-start space-x-4">
                            <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
                            <div className="w-full md:w-[400px]">
                                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                                    Property management
                                </h4>
                                <p className="text-sm text-[#2D2D2D] lg:my-3">
                                    Expert property management to handle maintenance, tenant
                                    relations, and financials, ensuring your property runs smoothly
                                    and remains profitable.
                                </p>
                                <div className="border-t-2 my-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <AutoScrollCarousel/>
        </div>





        <div className="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-32 bg-gradient-to-r from-blue-100 to-blue-200  overflow-hidden">
  <div className="md:col-span-2">
    <h1 className="text-3xl font-bold text-black">Contact  Us </h1>
    <p className="text-7xl font-bold text-black mt-10">
      Kick Start Your Business 
    </p>
    <p className="text-7xl font-bold text-black mt-4">
      Today 
    </p>
   
    <Link href="/contact" passHref>
      <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all mt-10 bg-indigo-500 rounded-xl group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          Contact Us
        </span>
      </button>
    </Link>


  </div>
  <div className="relative max-md:hidden h-[350px] w-[500px]">
  <DotLottieReact
      src="https://lottie.host/4d751c65-882c-4346-8c11-98121150cd47/r9FrZ43h10.lottie"
      loop
      autoplay
    />
  </div>
</div>



  </>

  
  );
}


const AutoScrollCarousel = () => {

    const images = [
         img1, 
         img2,
         img3,
         img4,
         img5
      ];


    return (
      <div className="overflow-hidden w-full bg-white py-10">
        <div className="relative flex w-full">
          <motion.div
            className="flex space-x-5"
            initial={{ x: "50%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...images, ...images].map((src, index) => (
              <div key={index} className="min-w-[300px] h-[200px] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image src={src} alt={`carousel-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };