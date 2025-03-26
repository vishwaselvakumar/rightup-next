"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const circles = [
  {
    text: "R",
    color: "bg-blue-500",
    title: "Reinvent",
    t: "We rethink outdated systems and create innovative future-ready solutions. By leveraging AI and automation, we help businesses stay ahead of the curve.",
    size: "w-40 h-40",
    delay: 0,
  },
  {
    text: "U",
    color: "bg-blue-500",
    title: "Update",
    t: "Seamless upgrades ensure peak performance, security, and scalability. We optimize digital solutions to keep businesses competitive and efficient.",
    size: "w-40 h-40",
    delay: 0.2,
  },
  {
    text: "N",
    color: "bg-blue-500",
    title: "Navigate",
    t: "Guiding businesses through digital transformation with strategic expertise. We help organizations adopt the right technologies for long-term success.",
    size: "w-40 h-40",
    delay: 0.4,
  },
];

const Bounce = () => {
  return (
    <>
      <h1 className="text-blue-700 text-3xl text-center mb-10">
        Who we are and What We Do?
      </h1>

   
      <h1 className="text-center font-bold text-3xl">About Company</h1>

      <p className="text-center text-lg mt-5 px-5">
        We evolved into Right UpNext Innovations in 2025 to reflect our
        commitment to staying ahead in the ever changing digital landscape Our
        name embodies our focus on innovation agility and delivering
        cutting edge solutions that prepare businesses for what next
      </p>

      <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden mb-5">
        {/* Background image layer */}
        <div className="absolute top-1/2 transform -translate-y-1/2 z-0">
          <Image
            src="/logos/partner/arrow.png"
            alt="Arrow Icon"
            width={1350}
            height={440}
            priority
            className="rotate-[33deg] opacity-40"
          />
        </div>

        {/* Foreground bouncing circles */}
        <div className="relative z-10 flex space-x-36">
          {circles.map((circle, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index === 0 ? "mt-64" : index === 1 ? "mt-40" : "mt-16"
              }`}
            >
              <motion.div
                className={`${circle.size} ${circle.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                animate={{ y: [0, -40, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: circle.delay,
                }}
              >
                <h1 className="font-bold text-6xl text-center">{circle.text}</h1>
              </motion.div>

              <h2 className="text-2xl font-bold mt-4 text-black">
                {circle.title}
              </h2>
              <p className="mt-3 text-black text-sm w-[250px] text-center">
                {circle.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bounce;
