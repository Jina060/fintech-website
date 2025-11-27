import React from 'react';
import { ArrowLeft } from 'lucide-react';
// 🚨 IMPORTANT: Adjust this path if your HeroSection.tsx is not directly next to the assets folder!
// If HeroSection.tsx is in src/components and assets is in src/assets: use '../assets/...'
import BackgroundPattern from '../assets/Backgroundpattern.png'; 
import bg from '../assets/bg.jpg'
import Iphone from '../assets/Iphone.png'
import icon1 from '../assets/icon1.png'
import Patreon from '../assets/Patreon.svg'
import Shopify from '../assets/Shopify.svg'
import uber from '../assets/uber.png'
import vicon from '../assets/vicon.png'
import fire from '../assets/fire.png'
import plus from '../assets/plus.png'
import block from '../assets/block.png' 
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import card from '../assets/card.png'
import battery from '../assets/battery.png'
import bar from '../assets/bar.png'
import wifi from '../assets/wifi.png'
import { HiChevronRight } from "react-icons/hi";

const HeroSection: React.FC = () => {
  return (
    // Base section with dark gradient background
    <section className="relative h-270 xl:h-270 2xl:h-305 flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0a3786] to-[#1142ab] pt-24 pb-12 sm:pt-40 sm:pb-32">
      
      {/* 🚨 NEW: Bottom Background Layer (The blue shape) 🚨 */}
      <div 
        className="absolute inset-0 z-0 opacity-40" // Adjust opacity to control visibility
        style={{
          backgroundImage: `url(${bg})`, 
          backgroundSize: '185%', // Use cover since this is a large, non-repeating image
          backgroundPosition: '52% 27%',
          transform: 'rotate(180deg)',
          backgroundRepeat:'no-repeat'
        }}
      >
      </div>
      {/* ✅ BACKGROUND FIX: Using imported image with inline style 
        The opacity-10 class handles the fade/transparency.
      */}
      <div 
        className="absolute inset-0 z-0 " 
        style={{
          backgroundImage: `url(${BackgroundPattern})`, 
          backgroundSize: '100%', 
          backgroundRepeat:'repeat'
        }}
      >
      </div>

      {/* Main content wrapper (relative z-10 for layering) */}
      <div className="relative z-10 container 2xl:mx-34 px-6 md:px-12 lg:mx-28 lg:px-0 lg:gap-7 gap-3 flex flex-col lg:flex-row items-center lg:-top-25 top-50">
        
        {/* Left Content Area (Text) */}
        <div className="flex-1 text-white lg:text-left max-w-2xl text-center lg:-mt-24 xl:-mt-13 2xl:mt-20 ">
          <div className="justify-center flex lg:justify-start">
            <p className="flex items-center justify-center lg:justify-start text-black text-[12px] 2xl:text-[15px] font-[inter] font-medium mb-2 lg:mb-2 bg-white rounded-2xl w-41 h-8 2xl:w-54 2xl:h-8 px-3">
            <img 
            src={fire}
            alt={fire}
            className='h-3 mr-1 2xl:h-5 2xl:mr-2'
            /> 
            we are 100% trusted
          </p>
          </div>
          <div className=''>
          <h1 className="text-5xl 2xl:mr-15 lg:text-[55px] xl:text-[55px] 2xl:text-[68px] font-extrabold font-sans leading-tight tracking-wide mb-3">
            Finance With Security And <span className='text-stroke'>Flexibility</span>
          </h1> 
          </div>
          <p className="text-[17px] lg:text-[15px] 2xl:text-[20px] md:text-[19px] text-blue-200 mx-6 lg:mx-0 2xl:mx-0 mb-8 lg:mb-10 font-[poppins]">
            Send, Save, And Invest Money Securely In Seconds
          </p>
          <div className="flex flex-col mx-8 lg:mx-0 2xl:mx-0 justify-center lg:justify-start lg:flex-row gap-4 lg:gap-6 lg:mb-8 2xl:mb-13 mb-11">
            <button className="bg-[#2667FF] hover:bg-blue-900 text-white font-medium py-3.5 lg:px-4.5 px-3 2xl:px-5 2xl:py-3 rounded-lg flex items-center justify-center lg:text-[15px] text-[18px] 2xl:text-lg transition-colors">
              Get started <HiChevronRight size={20} />
            </button>
            <button className="border bg-white text-blue-600 hover:bg-blue-200 hover:text-white font-medium py-3.5 lg:px-4.5 px-3 2xl:px-5 2xl:py-3 rounded-lg flex items-center lg:text-[15px] justify-center 2xl:text-lg transition-colors text-[18px]">
              Learn more <HiChevronRight size={20} />
            </button> 
          </div>

          {/* Trusted Companies */}
          <div className="text-[16px] 2xl:text-lg text-white mb-6 2xl:mb-6">
            Trusted by <span className="font-black text-blue-500">500+</span> Companies
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center lg:gap-12 gap-5">
          
              <img
                src={Patreon}
                alt={Patreon}
                className="lg:h-4 h-3.5 2xl:h-5"
              />

              <img
                src={uber}
                alt={Patreon}
                className="lg:h-5 h-4 2xl:h-7"
              />

              <img
                src={Shopify}
                alt={Patreon}
                className="lg:h-7 h-6 2xl:h-8"
              />

              <img
                src={card}
                alt={Patreon}
                className="lg:h-6 h-6 2xl:h-8"
              />
          
          </div>
        </div>

        {/* Right Content Area (iPhone Mockup) */}
        <div className="flex-1 flex justify-center lg:justify-end w-85 lg:w-full lg:mt-9 2xl:mt-45 mt-12 ">
          <div className="relative w-90 xl:w-90 2xl:w-110 aspect-9/18 justify-center items-center">
           {/* 🚨 1. The Custom Frame Image 🚨 
               This image provides the phone border/housing. It must have transparency for the screen area.
            */}
            <img 
              src={Iphone} 
              alt="Fintech Phone Frame" 
              className="absolute inset-0 lg:w-90 h-auto 2xl:w-110 object-contain z-30 pointer-events-none" 
            />
            
            {/* iPhone screen content */}
           <div className="absolute top-[2%] left-[4.5%] lg:w-[91%] w-[90%] lg:h-[103%] h-[115%] z-20 bg-white lg:rounded-[55px] rounded-[50px] overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-8 py-2 text-sm 2xl:text-[18px] text-gray-800 bg-gray-50 mt-4 2xl:mt-5 2xl:px-9">
                <span>09:25</span>
                <div className="flex items-center 2xl:space-x-3 space-x-2">
                  <span>
                    <img 
                    src={bar}
                    alt={bar}
                    className='lg:w-5 2xl:w-6 w-4'
                    />

                  </span>
                  <span>
                    <img  
                    src={wifi}
                    alt={wifi}
                    className='lg:w-5 2xl:w-6 w-4'
                    />
                  </span>

                  <span>
                    <img
                    src={battery}
                    alt={battery}
                    className='lg:w-5 2xl:w-6 w-4'
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
                  <div className="flex-none w-60 2xl:w-70 h-auto bg-linear-to-br from-[#1C2680] to-[#80176F] rounded-[20px] py-4 px-4 text-white shadow-lg">
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
                <button className="flex items-center space-x-2 bg-blue-600 text-white rounded-lg font-semibold tracking-wider text-[10px] 2xl:text-xs px-6 py-3">
                  <span>
                    <img 
                       src={plus}
                       alt={plus}
                       className='h-3 2xl:h-4'
            /> 
            </span>
            <span> New Card</span>
                </button>
                <button className="flex items-center space-x-2 text-black font-semibold tracking-wide text-[10px] px-6 py-3 border 2xl:text-xs border-black rounded-lg">
                  <span>
                     <img 
                       src={block}
                       alt={block}
                       className='h-3 2xl:h-4'
            /> 
                    </span><span> Block Card</span>
                </button>
              </div>

              {/* Quick Links */}
              <div className="py-4 px-5 border-t border-b border-gray-200">
                <h4 className="font-semibold text-[11px] 2xl:text-sm 2xl:pl-2 text-gray-700]">Quick Links</h4>
                <div className="grid grid-cols-5 gap-2 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon1}
                    alt={icon1}
                    className='z-30 h-12 2xl:h-15'
                    />
                    <span className="text-[8px] pt-[-5px] 2xl:text-[9px]">Portfolio</span></div>
               
                 <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon2}
                    alt={icon2}
                    className='z-30 h-12 2xl:h-15'
                    />
                    <span className="text-[8px] pt-[-5px] 2xl:text-[9px]">Top Up</span></div>
                  
                  <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon3}
                    alt={icon3}
                    className='z-30 h-12 2xl:h-15' 
                    />
                    <span className="text-[8px] pt-[-5px] 2xl:text-[9px]">Locked</span></div>

                    <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon4}
                    alt={icon4}
                    className='z-30 h-12 2xl:h-15'
                    />
                    <span className="text-[8px] pt-[-5px] 2xl:text-[9px]">Bill</span></div>

                    <div className="flex flex-col items-center w-15">
                    <img 
                    src={icon5}
                    alt={icon5}
                    className='z-30 h-12 2xl:h-15'
                    />
                    <span className="text-[8px] pt-[-5px] 2xl:text-[9px]">More</span></div>
                </div> 
              </div>

              {/* Just For You */}
              <div className="p-4 border-t border-gray-100 bg-white">
                <p className="font-semibold text-gray-700 text-[11px] 2xl:text-sm mb-3 2xl:ml-2">Just For You</p>
                <div className="bg-white rounded-lg p-3 flex items-center shadow-2xl h-30 2xl:h-40">
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
    </section>
    
    
  );
};

export default HeroSection;


