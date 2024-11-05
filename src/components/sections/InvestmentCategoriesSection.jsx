import React from 'react';

const InvestmentCategoriesSection = () => {
  const categories = [
    {
      title: "Stocks",
      description: "Own shares of publicly traded companies. Benefit from company growth and dividends.",
      riskLevel: "Moderate-High",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: ["Direct ownership", "Voting rights", "Dividend potential"]
    },
    {
      title: "Mutual Funds",
      description: "Professional managed investment pools. Diversify across multiple securities.",
      riskLevel: "Moderate",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ["Professional management", "Diversification", "Lower minimum investment"]
    },
    {
      title: "ETFs",
      description: "Trade like stocks, track indices or sectors. Combine flexibility with diversification.",
      riskLevel: "Varies",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: ["Trade like stocks", "Low costs", "Tax efficient"]
    },
    {
      title: "Fixed Income",
      description: "Bonds and fixed-income securities. Regular income with capital preservation.",
      riskLevel: "Low-Moderate",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Regular income", "Lower volatility", "Capital preservation"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investment Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different investment options tailored to your financial goals and risk tolerance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600">Risk Level: </span>
                <span className="text-sm text-blue-600">{category.riskLevel}</span>
              </div>

              <ul className="space-y-2">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentCategoriesSection;