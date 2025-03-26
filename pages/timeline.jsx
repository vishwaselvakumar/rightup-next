import TimeLine from "@/components/TimeLine";
import Head from "next/head";
import React from "react";
import { useState , useEffect, useRef} from "react";
import { motion ,useScroll ,useTransform } from "framer-motion";
import bill from "../public/icons/billing.png"
import Image from "next/image";

const Timeline = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const features = [
    {
      title: "Invoice Management",
      description: "Generate and track invoices with ease.",
      icon: () => (
        <svg width="58" height="64" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2h8a2 2 0 0 1 2 2v16l-4-2-4 2-4-2V4a2 2 0 0 1 2-2z" />
          <path d="M16 6H8M12 10H8m4 4H8" />
        </svg>
      ),
    },
    {
      title: "Automated Payments",
      description: "Enable auto-payments for seamless transactions.",
      icon: () => (
        <svg width="58" height="64" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 10h20M6 16h12" />
          <circle cx="12" cy="8" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Tax Calculation",
      description: "Automatic tax calculations for every transaction.",
      icon: () => (
        <svg width="58" height="64" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 8h8m-8 4h4m-4 4h8" />
          <circle cx="12" cy="7.5" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Multi-Currency Support",
      description: "Handle payments in multiple currencies effortlessly.",
      icon: () => (
        <svg width="58" height="64" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20m5-18H7m10 16H7" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: "Expense Tracking",
      description: "Monitor and categorize expenses efficiently.",
      icon: () => (
        <svg width="58" height="64" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
          <path d="M12 22V12m0 0-3 3m3-3 3 3" />
        </svg>
      ),
    },
    {
      title: "User Roles & Permissions",
      description: "Control access levels for different users.",
      icon: () => (
        <svg width="58" height="64" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-2a6 6 0 1 1 12 0v2" />
        </svg>
      ),
    },
  ];
  
  

  

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; // Adjust scale factor
      setScale(Math.min(newScale, 1.5)); // Limit max scale
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto min-w-full ">
      <Head>
        <title>Products✦</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      
      <div className="flex flex-col items-center  lg:mt-28 overflow-hidden mb-10 min-w-full mt-10">
    <motion.h1
      className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide inline-flex items-center min-w-full px-10"
      style={{ transform: `scale(${scale})` }}
    >
      Account  Your Products{" "}
      <span className="bg-gradient-to-r from-yellow-500 to-blue-800 text-transparent bg-clip-text ml-2">
        with Biller X
      </span>
    </motion.h1>
  </div>
</div>


      <main className="min-h-screen max-w-screen">
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <Image
          className="w-full dark:hidden"
          src={bill}
          alt=""
        />
        <Image
          className="w-full hidden dark:block"
          src={bill}
          alt=""
        />
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          Killer Billing Solution by Right UpNext
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
            Rs 1,249.99
          </p>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
              (5.0)
            </p>
            <a
              href="#"
              className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
            >
              345 Reviews
            </a>
          </div>
        </div>
        {/* <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <a
            href="#"
            title=""
            className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
           WhatsApp
          </a>
          <a
            href="#"
            title=""
            className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </a>
        </div> */}
<div className="flex justify-center items-first mr-60 mt-8 ">
<a
  href="https://wa.me/6385557221?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
  target="_blank"
  className="relative flex items-center justify-center px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
>
 WhatsApp


    {/* Arka Plan Puls Etkisi */}
    <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping" />
    <span className="relative z-10"></span>
    {/* Canlı Yayın İkonu */}
    <svg
      className="w-7 h-7 ml-2 relative z-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      style={{ enableBackground: "new 0 0 64 64" }}
      xmlSpace="preserve"
    >
      <path
        style={{ fill: "#ffffff" }}
        d="m57.931 54.658-2.216-1.289c3.743-6.432 5.721-13.821 5.721-21.368s-1.979-14.936-5.721-21.368l2.216-1.289C61.901 16.166 64 24.001 64 32c0 7.999-2.099 15.834-6.069 22.658zm-51.862 0C2.099 47.833 0 39.998 0 32S2.099 16.167 6.069 9.342l2.216 1.289C4.542 17.065 2.564 24.454 2.564 32s1.979 14.935 5.721 21.368l-2.216 1.29zm45.32-4.895-2.215-1.292c2.897-4.963 4.428-10.659 4.428-16.471 0-5.8-1.525-11.497-4.41-16.474l2.218-1.286a35.446 35.446 0 0 1 4.755 17.759c.001 6.266-1.651 12.409-4.776 17.764zm-38.778 0C9.486 44.408 7.834 38.265 7.834 32a35.431 35.431 0 0 1 4.756-17.759l2.218 1.286a32.866 32.866 0 0 0-4.41 16.474c0 5.812 1.531 11.508 4.428 16.471l-2.215 1.291zm32.278-4.9-2.218-1.284A23.127 23.127 0 0 0 45.769 32c0-4.076-1.071-8.079-3.098-11.578l2.218-1.284A25.681 25.681 0 0 1 48.332 32a25.68 25.68 0 0 1-3.443 12.863zm-25.778 0A25.69 25.69 0 0 1 15.668 32c0-4.526 1.191-8.973 3.443-12.862l2.218 1.284A23.12 23.12 0 0 0 18.231 32c0 4.075 1.071 8.079 3.098 11.579l-2.218 1.284zm12.615-4.312c-4.716 0-8.553-3.837-8.553-8.553s3.837-8.552 8.553-8.552 8.552 3.836 8.552 8.552-3.836 8.553-8.552 8.553zm0-14.541a5.996 5.996 0 0 0-5.989 5.988 5.996 5.996 0 0 0 5.989 5.989 5.995 5.995 0 0 0 5.988-5.989 5.995 5.995 0 0 0-5.988-5.988z"
      />
      <circle style={{ fill: "#ffffff" }} cx="31.728" cy="31.997" r="5.987" />
    </svg>
  </a>
</div>


        <hr className="my-6 md:my-8 border-gray-200 " />
        <p className="mb-6 text-black  text-5xl">
        Effortless Billing. Smart Business.
        </p>
        <p className="text-black  text-xl">
        Say goodbye to manual invoicing and hello to seamless, error-free billing. RightUp Next 
        Innovation brings you the smartest PC Billing Software 
        designed to streamline your sales, invoices, and inventory management—all in one place.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>

      <div ref={ref} className="relative bg-gradient-to-b from-blue-900 to-blue-600">
      <motion.div
        className="max-w-6xl mx-auto py-16 px-4"
        style={{ opacity: bgOpacity }}
      >
        <motion.h2
          className="text-white md:text-4xl text-3xl font-bold text-center mb-16"
          style={{ y: titleY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover Our Exclusive Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-md p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <feature.icon className="w-10 h-10 text-blue-500 mb-6" />
          <h3 className="text-slate-900 text-2xl font-bold mb-3 mt-3">{feature.title}</h3>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
    
      </motion.div>
    </div>
     
  
  

  
    </>
  );
};

export default Timeline;
