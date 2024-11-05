import React from 'react';
import Navbar from '../components/layout/Navbar';
import FeatureSection from '../components/sections/FeatureSection';
import PopularStocksSection from '../components/sections/PopularStocksSection';
import MarketOverviewSection from '../components/sections/MarketOverviewSection';
import InvestmentCategoriesSection from '../components/sections/InvestmentCategoriesSection';
import Footer from '../components/layout/Footer';


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Animated Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background with Gradient Wave */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)',
                backgroundSize: '200% 200%',
                animation: 'gradientWave 8s ease infinite',
              }}
            />
            <div className="absolute inset-0"
              style={{
                background: 'linear-gradient(-45deg, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)',
                backgroundSize: '200% 200%',
                animation: 'gradientWave 12s ease infinite reverse',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Invest in Your Future with Confidence
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Start your investment journey with zero commission trading, expert insights, 
              and a user-friendly platform.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                             hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold 
                             hover:bg-blue-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <FeatureSection />
      <PopularStocksSection />
      <MarketOverviewSection />
      <InvestmentCategoriesSection />
      <Footer />
      
    </div>
  );
};

export default HomePage;