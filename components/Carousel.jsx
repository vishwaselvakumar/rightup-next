import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Software Development", description: "Transform your business with tailor-made software solutions designed to meet your unique needs.", buttonText: "Get Started", link: "/services/software" },
  { title: "Web &  App Development", description: "Build powerful, scalable, and user-friendly applications with our custom web and mobile app development services.", buttonText: "Explore More", link: "/services/app" },
  { title: "E-commerce Solutions", description: "Take your online business to the next level with custom e-commerce solutions that ensure seamless shopping experiences.", buttonText: "Start Selling", link: "/services/ecommerce" },
  { title: "Digital Marketing & SEO", description: "Boost your online presence with strategic SEO and data-driven digital marketing for better visibility and growth.", buttonText: "Optimize Now", link: "/services/digital" },
  { title: "College & Academic Projects", description: "A platform designed to help students find internships and build a strong foundation for their careers.", buttonText: "Learn More", link: "/services/studies" },
  { title: "AI & Data Analytics", description: "Harness AI and Data Analytics to drive smarter decisions, automate processes, and enhance user experiences.", buttonText: "Discover AI", link: "/services/ai" }
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
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative flex justify-center items-center mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="multiple-slide-carousel w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-b from-blue-500 to-blue-700 shadow-xl rounded-2xl flex flex-col justify-between items-center p-6 border border-blue-300 text-white text-center w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
            >
              <h3 className="text-xl sm:text-2xl md:text-lg font-bold mt-5">{service.title}</h3>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg flex-grow flex items-center justify-center px-2">{service.description}</p>
              <Link href={service.link} className="mt-auto">
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

      {/* Navigation Buttons */}
      <motion.button
        onClick={scrollLeft}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="group p-2 absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 border border-blue-500 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-500 rounded-full hover:bg-blue-600"
      >
        <ChevronLeft className="h-5 w-5 text-blue-500 group-hover:text-white" />
      </motion.button>
      
      <motion.button
        onClick={scrollRight}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="group p-2 absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 border border-blue-500 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-500 rounded-full hover:bg-blue-600"
      >
        <ChevronRight className="h-5 w-5 text-blue-500 group-hover:text-white" />
      </motion.button>
    </div>
  );
};

export default Carousel;
