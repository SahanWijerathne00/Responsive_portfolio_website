import React from "react";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "UI/UX Design",
    description:
      "I create intuitive and aesthetically pleasing user interfaces that enhance user experience (UX) and make websites and apps more enjoyable to interact with.",
    icon: <FaCode className="text-5xl text-white" />,
  },
  {
    title: "Web Design",
    description:
      "I design responsive websites that are visually stunning and function seamlessly across all devices. My goal is to create user-friendly websites that deliver an engaging experience.",
    icon: <FaDesktop className="text-5xl text-white" />,
  },
  {
    title: "App Design",
    description:
      "I focus on creating beautiful and intuitive interfaces for Android apps, ensuring a seamless user experience across devices.",
    icon: <FaMobileAlt className="text-5xl text-white" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-xs bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-xl p-6 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-center mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
