import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import fire from '../assets/fire.png'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const data = [
    { name: "Jan", amount: 20000 },
    { name: "Feb", amount: 40000 },
    { name: "Mar", amount: 60000 },
    { name: "Apr", amount: 30000 },
  ];

  const features = [
    { title: "Instant Transfers", description: "Send and receive money in seconds, anytime." },
    { title: "Secure & Encrypted", description: "Your funds are protected with bank-grade security and encryption." },
    { title: "Smart Savings", description: "Save automatically and track your goal with ease." },
  ];

 
  const featureHeight = 115; // adjust slightly depending on your design


  return (
    <section className="w-full bg-white pb-10 pt-25 px-6 lg:px-20 flex flex-col lg:flex-row lg:gap-12 2xl:gap-15 items-center justify-between overflow-hidden relative z-20 mt-5 sm:-mt-36 lg:-mt-83">
      {/* Left Chart */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 rounded-3xl 2xl:p-14 lg:p-14 p-12 -mt-8 lg:mt-0 shadow-inner w-90 lg:w-115 2xl:w-130">
          <div className="bg-[#001B5E] rounded-2xl p-6 text-white w-[260px] h-80 lg:h-[350px] 2xl:w-[400px] lg:w-[350px] sm:w-[400px]">
            <h3 className="text-sm font-medium mb-1 font-[inter]">Feb Savings</h3>
            <h1 className="text-2xl font-medium">#1852,00</h1>
            <p className="text-sm text-gray-300 mb-6">
              Increase of 8% from last month
            </p>
            <ResponsiveContainer width="95%" height={180} className={`-ml-2.5`}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#AAAAAA" />
                <XAxis dataKey="name" stroke="#fff" fontSize={12} />
                <YAxis stroke="#fff" fontSize={12}/>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "10px",
                  }}
                />
                <Bar
                  dataKey="amount"
                  radius={[30, 30, 0, 0]}
                  fill="#B1ADAD"
                  animationDuration={1000}
              
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Right Features */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="px-2 lg:px-0">
        <span className="text-[11px] bg-white text-black border border-gray-200 px-4 py-1 rounded-full inline-flex items-center gap-1">
        <img 
            src={fire}
            alt={fire}
            className='h-3 mr-1 2xl:h-5 2xl:mr-2'
            />   FEATURED
        </span>
       <h2 className="text-[30px] lg:text-[38px] 2xl:text-5xl font-extrabold mt-4 mb-6 lg:mb-4 leading-tight">
          ALL YOUR MONEY<br />NEEDS IN ONE APP
        </h2>
      

         <div className="flex-1 flex items-start relative">
        {/* Vertical Line */}
        <div className="relative w-2 bg-gray-200 rounded-full mr-6" style={{ height: `${features.length * featureHeight}px` }}>
          {/* Blue indicator */}
          <motion.div
            className="absolute left-0 w-2 bg-[#2B6CF6] rounded-full"
            animate={{ top: activeFeature * featureHeight }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            style={{ height: featureHeight }}
          />
        </div>

        {/* Features List */}
        <div className="space-y-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.02 }}
              className={`cursor-pointer lg:p-5 2xl:p-7 p-4 rounded-2xl border transition-all duration-300 w-[330px] sm:w-[350px] lg:w-[460px] 2xl:w-[520px] font-[poppins] ${
                activeFeature === index
                  ? "bg-[#2B6CF6] text-white border-[#2B6CF6]"
                  : "bg-white text-black border-gray-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold font-[inter] mb-2 ${
                  activeFeature === index ? "text-white" : "text-black"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm ${
                  activeFeature === index ? "text-white/90" : "text-gray-500"
                }`}
              >
                {feature.description}
              </p>
              
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Features;
