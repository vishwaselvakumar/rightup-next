import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // For Next.js routing

const services = [
  { title: "Custom Software Development", description: "Software development is the process of designing, coding, testing, and maintaining applications or systems to meet specific user needs. It encompasses various methodologies, programming languages", buttonText: "Get Started", link: "/services/software" },
  { title: "Web & Mobile App Development", description: " Mobile app development is the process of creating software applications that run on mobile devices. It involves various stages, including planning, designing, coding, testing, and deployment", buttonText: "Explore More", link: "/services/app" },
  { title: "E-commerce Solutions", description: "E-commerce mobile app development is the process of creating software applications that facilitate online buying and selling. These apps provide users with a seamless shopping experience", buttonText: "Start Selling", link: "/services/ecommerce" },
  { title: "Digital Marketing & SEO", description: "friendly content for a website requires a balance of keyword optimization, user engagement, and valuable information. Below is a general SEO content structure tailored for your website", buttonText: "Optimize Now", link: "/services/digital" },
  { title: "College & Academic Projects", description: "platform designed to help students find internships in their field of interest. We bridge the gap between students and companies, ensuring seamless connections for career growth", buttonText: "Learn More", link: "/services/studies" },
  { title: "AI & Data Analytics", description: "Artificial Intelligence (AI) is revolutionizing software development by enabling automation, enhancing decision-making, and improving user experiences.", buttonText: "Discover AI", link: "services/ai" }
];

const Carousel = () => {
  const swiperRef = useRef(null);

  const scrollLeft = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const scrollRight = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="w-[90%] relative px-20 justify-center items-center mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
        dir="rtl"
        className="multiple-slide-carousel"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-b from-blue-500 to-blue-700 shadow-xl rounded-2xl h-96 flex flex-col justify-center items-center p-6 border border-blue-300 text-white"
            >
              <h3 className="text-3xl font-bold mb-2 text-center justify-center items-center">{service.title}</h3>
              <p className="text-blue-100 text-lg text-center mb-4 justify-center items-center mt-8">{service.description}</p>
              <Link className="mt-10" href={service.link}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-100"
                >
                  {service.buttonText}
                </motion.button>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center left-5 right-5 mt-5 mb-5">
        <motion.button
          onClick={scrollRight}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="group p-2 flex justify-center items-center border border-blue-500 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-600 -translate-x-16"
        >
          <ChevronLeft className="h-5 w-5 text-blue-500 group-hover:text-white" />
        </motion.button>
        <motion.button
          onClick={scrollLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="group p-2 flex justify-center items-center border border-blue-500 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-600 translate-x-16"
        >
          <ChevronRight className="h-5 w-5 text-blue-500 group-hover:text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel;
