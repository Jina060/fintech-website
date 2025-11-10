import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/Herosection";
import Features from "../Components/Features";
import Steps from "../Components/Steps";
import CTA from "../Components/CTA";
import Reviews from "../Components/Reviews";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";



const Home: React.FC = () => {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <Features />
      <Steps />
      <CTA />
      <Reviews />
      <FAQ />
      <Footer />
      
    </main>
  );
};

export default Home;
