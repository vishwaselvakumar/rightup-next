import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaRobot,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => setShowMore(!showMore);

  const serviceCards = [
    {
      title: "IT Solutions",
      icon: <FaLaptopCode className="text-indigo-600 group-hover:text-white w-6 h-6" />,
      services: ["Software Development", "Mobile Applications", "WooCommerce", "Shopify", "Chat Bots", "AI Automations"],
      link: "/services/software",
    },
    {
      title: "E-Commerce",
      icon: <FaShoppingCart className="text-indigo-600 group-hover:text-white w-6 h-6" />,
      services: ["Custom Websites", "Payment Integrations", "SEO Optimization", "Dropshipping", "Inventory Management", "Shipping Solutions"],
      link: "/services/ecommerce",
    },
    {
      title: "Cloud & AI",
      icon: <FaCloud className="text-indigo-600 group-hover:text-white w-6 h-6" />,
      services: ["Cloud Deployments", "AWS & Azure", "AI Chatbots", "Machine Learning", "Big Data Solutions", "NLP & Computer Vision"],
      link: "/services/ai",
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt className="text-indigo-600 group-hover:text-white w-6 h-6" />,
      services: ["iOS & Android Apps", "React Native", "Flutter", "UI/UX Design", "App Maintenance"],
      link: "/services/app",
    },
    {
      title: "Automation",
      icon: <FaRobot className="text-indigo-600 group-hover:text-white w-6 h-6" />,
      services: ["Workflow Automation", "AI Solutions", "Chatbot Development", "Business Intelligence", "WhatsApp Automations"],
      link: "/services/studies",
    },
    {
      title: "Marketing & SEO",
      icon: <FaChartLine className="text-indigo-600 group-hover:text-white w-6 h-6" />,
      services: ["Digital Marketing", "SEO & SEM", "Social Media Ads", "Google Analytics", "AI-Based SEO"],
      link: "/services/digital",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-blue-600 to-blue-800 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-6xl text-center font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-xl text-center leading-6">
            Find your package that fits your needs whether you are a startup or
            an enterprise
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {serviceCards.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              services={service.services}
              link={service.link}
            />
          ))}
          {showMore &&
            serviceCards.slice(3).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                services={service.services}
                link={service.link}
              />
            ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleMore}
            className="py-2.5 px-5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, icon, services, link }) => {
  return (
    <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 xl:p-12 transition-all">
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center group-hover:bg-indigo-600 transition-all">
          {icon}
        </div>
        <h3 className="text-2xl font-bold my-4 text-center text-indigo-600">
          {title}
        </h3>
      </div>
      <ul className="mb-6 space-y-4 text-gray-600 group-hover:text-gray-900">
        {services.map((service, index) => (
          <li key={index} className="flex items-center space-x-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all"
      >
        Get Started
      </a>
    </div>
  );
};

export default Services;
