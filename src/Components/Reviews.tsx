import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import review1 from "../assets/review1.jpg"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"


const testimonials = [
  {
    id: 1,
    text: "Paylinks has made money transfers and stress-free. I can’t imagine going back to the old way.",
    name: "Janet Daniels",
    role: "CEO of Paysit",
    image: review1,
  },
  {
    id: 2,
    text: "I finally have control over my saving and daily spending all in one app.",
    name: "Mark Titus",
    role: "Marketing Manager of Uppier",
    image: review2,
  },
  {
    id: 3,
    text: "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible.",
    name: "Thomas Magnum",
    role: "Barellon NSW",
    image: review3,
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-[#F5F8F6] py-14 px-4 sm:px-8 lg:px-27">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
        >
          🔥 TESTIMONIAL
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-[39px] font-bold text-gray-900 mb-14"
        >
          GET TO KNOW OUR CLIENTS
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center font-[poppins] font-light text-sm">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative rounded-2xl transition-all duration-500 cursor-pointer w-full max-w-sm p-7 text-left shadow-md ${
                activeIndex === index
                  ? "bg-[#0A1E63] text-white scale-105"
                  : "bg-white text-gray-800 hover:scale-105"
              }`}
              whileHover={{ y: -6 }}
            >
              {/* Quote Icon */}
              <FaQuoteRight
                className={`text-3xl mb-4 ${
                  activeIndex === index ? "text-[#52A5FF]" : "text-[#1C52D9]"
                }`}
              />

              {/* Testimonial Text */}
              <p className="text-sm lg:text-sm sm:text-base mb-6 leading-relaxed">
                {item.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4
                    className={`font-semibold ${
                      activeIndex === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      activeIndex === index
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            className="flex overflow-x-auto space-x-4 no-scrollbar py-4 px-2 snap-x snap-mandatory"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-80 p-6 rounded-2xl shadow-md snap-center transition-all duration-300 ${
                  activeIndex === index ? "bg-[#0A1E63] text-white" : "bg-white"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <FaQuoteRight
                  className={`text-2xl mb-3 ${
                    activeIndex === index ? "text-[#52A5FF]" : "text-[#1C52D9]"
                  }`}
                />
                <p className="text-sm mb-4">{item.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View More Button */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FD1] transition text-white font-medium px-6 py-3 rounded-xl text-sm">
            View More
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-90"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
