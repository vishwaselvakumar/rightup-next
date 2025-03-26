import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/work/hero.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import HomeContent from "@/components/HomeContent";
import Carousel from "@/components/Carousel";
import Gifs from "@/components/Gif-2";

// import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";

// import { BsArrowUpRight } from "react-icons/bs";

// import Avatar_Black from "@/public/Avatar-black.svg";
// import Avatar_White from "@/public/Avatar-white.svg";
// import BooBlack from "@/public/boo-black.svg";
// import BooWhite from "@/public/boo-white.svg";
// import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "light" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 0px 0px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:0px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Right UpNext ✦ developer, designer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>

      <Gifs/>

      <div className="bg-gradient-to-b from-blue-900 to-blue-600 min-h-[110%] text-white mb-9 py-6 overflow-hidden">
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-24 lg:py-24 xl:py-16 lg:mt-3"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 md:py-10">
          <h1 className="text-5xl font-bold text-white xl:text-7xl lg:text-5xl">
            <span className="block w-full">Here you can </span> Level Up your
            business!
          </h1>

          <p className="py-4 text-lg text-gray-300 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to make better financial decisions, We truly are
            professional money planners... Empowering you to make better
            financial decisions, We truly are professional money planners...
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600"
            >
              <span>Explore More</span>
            </a>
          </div>
        </div>
        <div className="pb-5 overflow-hidden md:p-5 lg:p-0 sm:pb-0 relative">
          <div className="w-[650px] h-[500px] mb-10 relative z-10">
            <DotLottieReact
              src="https://lottie.host/0d3f09a0-1b8f-49eb-8138-b9133819c2e0/AtzSrcyVMb.lottie"
              loop
              autoplay
            />
          </div>

          {/* Hide this animation on mobile */}
          <div className="absolute top-0 right-2 w-[690px] h-full justify-center items-center z-0 hidden sm:flex">
            <DotLottieReact
              src="https://lottie.host/db8ba2d1-0613-4eb7-b2d7-ff43c08f679c/3NRIqHLbra.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </div>

      <Carousel/>
      <Clients/>
      <Services/>
      {/* <HomeContent/> */}

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
