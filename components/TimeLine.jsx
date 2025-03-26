"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TimeLine = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const data = [
    {
      id: 0,
      title: "Digital Specialist Engineer",
      duration: "July 2022",
      org: "Infosys",
      skills: ["React.js", "Redux.js", "SASS", "TypeScript"],
      class: "bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    },
    {
      id: 1,
      title: "Web Developer Trainee",
      duration: "Feb 2021 - Jun 2021",
      org: "Coding Blocks",
      skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      class: "bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      id: 2,
      title: "Graduate Rotational Internship",
      duration: "Sep 2020 - Oct 2020",
      org: "The Spark Foundation",
      skills: ["React.js", "Stripe", "JWT"],
      class: "bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      duration: "",
      org: "The Shaadi Times",
      skills: ["Python", "Data Analysis", "Dashboard"],
      class: "bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-6 py-12">
      {/* Lottie Animation Section */}
      <motion.div style={{ opacity }} className="w-96 h-96 mb-10">
        <DotLottieReact src="https://lottie.host/0d3f09a0-1b8f-49eb-8138-b9133819c2e0/AtzSrcyVMb.lottie" loop autoplay />
      </motion.div>

      {/* Timeline Section */}
      <div className="w-full max-w-2xl">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {data.map((item) => (
            <motion.li key={item.id} className="mb-10 ms-6" style={{ opacity }}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}{" "}
                {item.id === 0 && (
                  <span className="bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 border-sky-100 rounded ms-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.duration}
              </time>
              <p className="text-gray-700 dark:text-gray-300">{item.org}</p>
              <div className="flex flex-wrap mt-4">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className={`${item.class} mr-2`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TimeLine;
