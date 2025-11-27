import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Data for the FAQ items
const faqData = [
  {
    id: 1,
    question: 'What is Paylinks?',
    answer: 'Paylinks is a smart fintech platform that lets you send, save and grow your money securely all in one app.',
  },
  {
    id: 2,
    question: 'Is Paylink safe to use?',
    answer: 'Yes, Paylinks is bank-grade secure. We use 256-bit encryption, multi-factor authentication, and are regulated by relevant financial authorities to ensure your funds and data are protected.',
  },
  {
    id: 3,
    question: 'How do I create an account?',
    answer: 'Creating an account is simple and takes less than 2 minutes. Click "Sign Up," provide your basic information, verify your email, and you\'re ready to go.',
  },
  {
    id: 4,
    question: 'What payment methods does Paylinks support?',
    answer: 'We support local bank transfers, Visa, MasterCard, and direct debit transfers (ACH/SEPA) depending on your region.',
  },
  {
    id: 5,
    question: 'Can I link my existing bank account?',
    answer: 'Absolutely. Paylinks uses secure API integration to safely link your existing bank accounts for easy transfers and consolidated financial viewing.',
  },
];

const FAQ: React.FC = () => {
  // State to manage which FAQ item is currently open. 
  // Stores the ID of the open item, or null if all are closed.
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#F8FAFC] lg:m-10 m-5 lg:px-10 px-1 py-5 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl font-[inter]">
        
        {/* 🚨 RESPONSIVE LAYOUT: Stacks on mobile, 2-columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Introduction Text and CTA Button */}
          <motion.div 
            className="lg:w-95 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[35px] 2xl:text-5xl tracking-tight font-medium text-gray-900 font-sans leading-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-[13px] 2xl:text-[16px] text-[#64748B] mb-8 tracking-wide">
              Find quick solutions and helpful tips for using Paylinks. We've compiled answers to the most frequently asked questions right here.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Contact support
            </a>
          </motion.div>

          {/* Right Column: Interactive FAQ Accordion List */}
          <div className="lg:w-140 w-full lg:ml-8 2xl:ml-45">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {faqData.map((item) => {
                const isActive = openId === item.id;
                return (
                  <div key={item.id} className="mb-4 2xl:mb-7">
                    {/* Question Button (The collapsible header) */}
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className={`
                        w-full 
                        p-5 
                        text-left 
                        rounded-md 
                        shadow-xs
                        transition-all duration-300 ease-in-out
                        flex justify-between items-center
                        ${isActive 
                            ? 'bg-white text-black shadow-xl' 
                            : 'bg-white text-gray-900 hover:shadow-lg'
                        }
                      `}
                    >
                      <span className={`text-[15px] 2xl:text-lg font-semibold ${isActive ? 'text-black' : 'text-gray-900'}`}>
                        {item.question}
                      </span>
                      {isActive 
                        ? <ChevronUp size={20} className="ml-4 shrink-0" /> 
                        : <ChevronDown size={20} className="ml-4 shrink-0 text-gray-500" />
                      }
                    </button>

                    {/* 🚨 Answer Content (Animated by Framer Motion) 🚨 */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className={`
                            overflow-hidden 
                            p-5 
                            mt-2 
                            bg-white 
                            rounded-lg 
                            ${isActive ? 'text-[#64748B]' : 'text-gray-600'}
                          `}
                        >
                          <p className="text-[14px] 2xl:text-[16px] leading-relaxed pl-2">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;