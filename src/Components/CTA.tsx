
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg"; // ← replace with your blue background image path
import Iphone from "../assets/Iphone.png"
import block from "../assets/block.png"
import plus from "../assets/plus.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import vicon from "../assets/vicon.png"
import battery from '../assets/battery.png'
import bar from '../assets/bar.png'
import wifi from '../assets/wifi.png'
import { ArrowLeft } from 'lucide-react';
import { HiChevronRight } from "react-icons/hi";
import fire from '../assets/fire.png'

const CTAHero = () => {
  return (
    <section className="relative overflow-hidden h-210 lg:h-[480px] 2xl:h-[520px] ">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 lg:bg-cover lg:bg-center lg:bg-position-100% bg-cover bg-position-[-250px] bg-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24 lg:py-5">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          {/* LEFT SIDE - Phone mockup area */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Paste your phone markup directly inside this div ↓ */}
            <div className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[400px]">
               {/* Right Content Area (iPhone Mockup) */}
        <div className="flex-1 flex justify-center lg:justify-end w-75 lg:w-full max-w-md lg:mt-8 mt-12 lg:-ml-10">
          <div className="relative w-90 aspect-10/18 justify-center items-center">
           {/* 🚨 1. The Custom Frame Image 🚨 
               This image provides the phone border/housing. It must have transparency for the screen area.
            */}
            <img 
              src={Iphone} 
              alt="Fintech Phone Frame" 
              className="absolute inset-0 lg:w-83 h-auto object-contain z-30 pointer-events-none" 
            />
            
            {/* iPhone screen content */}
           <div className="relative top-[2%] left-[4.5%] lg:w-75 w-[90%] lg:h-[103%] h-[115%] z-20 bg-white lg:rounded-[55px] rounded-[50px] overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-8 py-2 text-sm text-gray-800 bg-gray-50 mt-4">
                <span>09:25</span>
                <div className="flex items-center 2xl:space-x-3 space-x-2">
                  <span>
                    <img 
                    src={bar}
                    alt={bar}
                    className='lg:w-4 2xl:w-6 w-4'
                    />

                  </span>
                  <span>
                    <img  
                    src={wifi}
                    alt={wifi}
                    className='lg:w-4 2xl:w-6 w-4'
                    />
                  </span>

                  <span>
                    <img
                    src={battery}
                    alt={battery}
                    className='lg:w-4 2xl:w-6 w-4'
                    />
                  </span>
                </div>
              </div>

              {/* Navigation within phone */}
              <div className="flex items-center px-8 py-2 bg-gray-50 mb-5">
                <button className="text-gray-500">
                   <ArrowLeft size={20} />
                </button>
                <h3 className="flex-1 text-center font-bold text-lg">cards</h3>
              </div>

              {/* Scrollable Card Section */}
              <div className="overflow-x-auto no-scrollbar mb-3 pl-3">
                <div className="flex space-x-2 w-80 h-40 pl-0.5 gap-2"> 
                  {/* Card 1 */}
                  <div className="flex-none w-60 bg-linear-to-br from-[#1C2680] to-[#80176F] rounded-[20px] py-4 px-4 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[10px] tracking-wider text-[#929185] mb-1">Total Portfolio Balance</p>
                        <p className="text-[15px] tracking-wider font-bold">#20,000,000</p>
                      </div>
                      <span className="text-[10px] font-extralight px-2 py-1 opacity-70">Master Card</span>
                    </div>
                    <p className="text-[16px] font-mono tracking-wide mb-3">5674 4736 **** 6358</p>
                    <div className="flex justify-between text-sm">
                      <div><p className="text-[#929185] text-[10px] font-semibold">Card Holder</p><p className="tracking-wider">Hello Dream Limited</p></div>
                      <div><p className="font-semibold text-[10px] text-[#929185]">Expiry</p><p className="font-medium">21/28</p></div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex-none w-60 bg-linear-to-br from-[#4B6576] to-[#80176F] rounded-[20px] py-4 px-4 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[10px] tracking-wider text-[#929185] mb-1">Total Portfolio Balance</p>
                        <p className="text-[15px] tracking-wider font-bold">#20,000,000</p>
                      </div>
                      <span className="text-[10px] font-extralight px-2 py-1 opacity-70">Master Card</span>
                    </div>
                    <p className="text-[16px] font-mono tracking-wide mb-3">5674 4736 **** 6358</p>
                    <div className="flex justify-between text-sm">
                      <div><p className="text-[#929185] text-[10px] font-semibold">Card Holder</p><p className="tracking-wider">Hello Dream Limited</p></div>
                      <div><p className="font-semibold text-[10px] text-[#929185]">Expiry</p><p className="font-medium">21/28</p></div>
                    </div>
                  </div>

                  {/* Card 3 (for scrollability) */}
                <div className="flex-none w-60 bg-linear-to-br from-[#ED468B] to-[#F8B784] rounded-[20px] py-4 px-4 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[10px] tracking-wider text-[#929185] mb-1">Total Portfolio Balance</p>
                        <p className="text-[15px] tracking-wider font-bold">#20,000,000</p>
                      </div>
                      <span className="text-[10px] font-extralight px-2 py-1 opacity-70">Master Card</span>
                    </div>
                    <p className="text-[16px] font-mono tracking-wide mb-3">5674 4736 **** 6358</p>
                    <div className="flex justify-between text-sm">
                      <div><p className="text-[#929185] text-[10px] font-semibold">Card Holder</p><p className="tracking-wider">Hello Dream Limited</p></div>
                      <div><p className="font-semibold text-[10px] text-[#929185]">Expiry</p><p className="font-medium">21/28</p></div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Action Buttons */}
              <div className="flex justify-center gap-5 px-4 pt-1 pb-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white rounded-lg font-semibold tracking-wider text-[10px] px-6 py-3">
                  <span>
                    <img 
                       src={plus}
                       alt={plus}
                       className='h-3'
            /> 
            </span>
            <span> New Card</span>
                </button>
                <button className="flex items-center space-x-2 text-black font-semibold tracking-wide text-[10px] px-6 py-3 border border-black rounded-lg">
                  <span>
                     <img 
                       src={block}
                       alt={block}
                       className='h-3'
            /> 
                    </span><span> Block Card</span>
                </button>
              </div>

              {/* Quick Links */}
              <div className="py-4 px-5 border-t border-b border-gray-200">
                <h4 className="font-semibold text-[11px] text-gray-700]">Quick Links</h4>
                <div className="grid grid-cols-5 gap-2 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon1}
                    alt={icon1}
                    className='z-30 h-12'
                    />
                    <span className="text-[8px] pt-[-5px]">Portfolio</span></div>
               
                 <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon2}
                    alt={icon2}
                    className='z-30 h-12'
                    />
                    <span className="text-[8px] pt-[-5px]">Top Up</span></div>
                  
                  <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon3}
                    alt={icon3}
                    className='z-30 h-12'
                    />
                    <span className="text-[8px] pt-[-5px]">Locked</span></div>

                    <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon4}
                    alt={icon4}
                    className='z-30 h-12'
                    />
                    <span className="text-[8px] pt-[-5px]">Bill</span></div>

                    <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon5}
                    alt={icon5}
                    className='z-30 h-12'
                    />
                    <span className="text-[8px] pt-[-5px]">More</span></div>
                </div> 
              </div>

              {/* Just For You */}
              <div className="p-4 border-t border-gray-100 bg-white">
                <p className="font-semibold text-gray-700 text-[11px] mb-3">Just For You</p>
                <div className="bg-white rounded-lg p-3 flex items-center shadow-2xl h-30">
                  <div> 
                    <p className="font-bold lg:text-xl text-sm text-gray-800">What Limitless Transactions?</p>
                    <p className="text-[10px] text-[#878A94]">Get the new borderless dollar card only for our high net worth client</p>
                  </div>
                 <img src={vicon} alt={vicon} className="mr-3" />
                </div>
              </div>
            </div>
          </div>
        </div>     
            </div>
          </motion.div>

          {/* RIGHT SIDE - Text content */}
          
          <motion.div
            className="w-full lg:w-1/2 text-white relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container relative lg:-top-40 -top-2">
            {/* Small badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 bg-[#014526] text-xs text-white px-3 py-1 rounded-full">
                            <img 
            src={fire}
            alt={fire}
            className='h-3 mr-1 2xl:h-5 2xl:mr-2'
            /> 
                TRUSTWORTHINESS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold leading-tight tracking-tight">
              WE VALUE YOUR TRUST <br/> AND
              SECURITY
            </h1>

            {/* Description */}
            <p className="mt-4 text-base lg:text-sm sm:text-lg text-white/85 max-w-xl font-[poppins] 2xl:text-[15px]">
              Our Mission Is To Make Finance More Accessible, Transparent, And
              Secure For Everyone. With Cutting.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#"
                className="text-sm inline-flex items-center gap-2 bg-[#2B6CF6] hover:bg-[#1e4fd6] transition 2xl:px-5 2xl:py-4 px-4 py-3 rounded-xl text-white font-medium"
              >
                Get started
               <HiChevronRight size={20} />
              </a>
            </div>

            </div>
          </motion.div>
        </div>
      </div>

    
    </section>
  );
};

export default CTAHero;
