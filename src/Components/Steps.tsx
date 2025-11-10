import React from 'react';

// 🚨 PLACEHOLDER IMAGES: Replace these paths with your actual image assets
import step1 from '../assets/step1.jpg';    // Image of person signing up
import step2 from '../assets/step2.jpg';   // Image of hands with phone/banking


// Data for the three steps
const stepsData = [
  {
    step: 1,
    image: step1,
    title: 'Sign Up',
    description: 'Create your free account in less than 2 minutes.',
  },
  {
    step: 2,
    image: step2,
    title: 'Connect Your Bank',
    description: 'Securely link your accounts to manage money in one place.',
  },
  {
    step: 3,
    image: step2, // Reusing the second image as per the screenshot design
    title: 'Start Saving & Sending',
    description: 'Transfer money, build savings, and reach your goals.',
  },
];

const Steps: React.FC = () => {
  return (
    // Section container: Uses a light gray background as seen in the screenshot
    <section className="bg-gray-50 py-10 lg:py-11 sm:py-24 lg:mx-17">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-9 lg:mb-12 sm:mb-16 px-3 lg:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 font-[inter]">
            Getting started is simple
          </h2>
        </div>

        {/* 🚨 RESPONSIVE STEPS GRID 🚨 */}
        {/* Uses a 3-column grid on desktop, collapsing to 1 column on mobile for optimal stacking */}
        <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-10 lg:gap-5">
          
          {stepsData.map((step) => (
            <div 
              key={step.step} 
              className="
                flex flex-col
                 px-3 lg:px-0 
              "
            >
            
              {/* Image Block: Full width, fixed aspect ratio for consistency */}
              <div className="w-full h-80 overflow-hidden hover:shadow-2xl ease-in-out transition-transform rounded-xl">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full relative object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </div>

              {/* Text Content Block */}
              <div className="mt-6">
                
                {/* Step Badge (Small, prominent, and subtle) */}
                <span className="
                    inline-block 
                    bg-[#EBF1FF]
                    text-[#001A57]
                    text-xs font-medium
                    px-3 py-1 
                    rounded-sm
                    mb-2 lg:mb-4
                ">
                  Step {step.step}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#020617] mb-1">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#64748B] text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Steps;