import { useEffect } from "react";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import CategoryCard from "@/components/CategoryCard";

import Flash from "@/public/Flash.svg";
import Hero from "@/public/hero.jpg";
import Rocket from "@/public/Rocket.svg";
import Sparkles from "@/public/Sparkles.svg";
import love_black from "@/public/love-black.svg";
import love_white from "@/public/love-white.svg";
import office from "@/public/work/office.jpg"

export default function About() {
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
    <div className="px-10 sm:px-20 md:px-20 lg:mb-12 min-w-full">
      <Head>
        <title>about ✦ Right UpNext</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>

      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
          <h1
              className={`mt-6 mb-12 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold`}
            >
              About
            </h1>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                The Tale of Our Achievement Story v idufuyh
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our achievement story is a testament to teamwork and
                perseveranc  Togethe  overcome challenges  celebrated
                victories  and created a narrative of progress and success 
              </p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-6 flex">
            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  33+ Years
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Influencing Digital Landscapes Together
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  125+ Projects
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Excellence Achieved Through Success
                </p>
              </div>
            </div>
            <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  26+ Awards
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Our Dedication to Innovation Wins Understanding
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  99% Happy Clients
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Mirrors our Focus on Client Satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
          <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
            Read More
          </span>
          <svg
            className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
              stroke="#4F46E5"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full lg:justify-start justify-center items-start flex">
        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
          <Image
            className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
            src={office}
            alt="about Us image"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      <main className="  min-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 min-w-full">
          <div className=" mx-auto flex flex-col ">
           
         
          <div className="grid place-content-center bg-emerald-950  py-24 text-yellow-50 min-w-full">
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        Scale your{" "}
        <span className="relative">
          Marketing
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        with Simple AI Tools
      </h1>
    </div>
          </div>
        </div>
      </main>
    </div>
  );
}
