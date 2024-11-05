import React from 'react';

const MarketOverviewSection = () => {
  // Sample market data
  const marketIndices = [
    {
      name: "S&P 500",
      value: "4,890.97",
      change: "+1.2%",
      trend: "up",
      color: "green"
    },
    {
      name: "NASDAQ",
      value: "15,628.95",
      change: "-0.5%",
      trend: "down",
      color: "red"
    },
    {
      name: "DOW JONES",
      value: "38,109.43",
      change: "+0.8%",
      trend: "up",
      color: "green"
    },
    {
      name: "RUSSELL 2000",
      value: "1,978.33",
      change: "-0.3%",
      trend: "down",
      color: "red"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Market Overview</h2>
        
        {/* Market Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketIndices.map((index) => (
            <div key={index.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-600">{index.name}</h3>
                {index.trend === 'up' ? (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                )}
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold">{index.value}</span>
                <span className={`font-semibold ${index.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {index.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Market Metrics */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Trading Volume */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-600 mb-4">Trading Volume</h3>
            <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
              <div className="flex space-x-1">
                {[40, 60, 45, 70, 55, 80, 65].map((height, index) => (
                  <div
                    key={index}
                    className="w-4 bg-blue-200 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Sentiment */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-600 mb-4">Market Sentiment</h3>
            <div className="flex items-center justify-between">
              <span className="text-green-500">Bullish</span>
              <div className="flex-grow mx-4 h-2 bg-gray-200 rounded">
                <div className="w-2/3 h-full bg-green-500 rounded"></div>
              </div>
              <span className="text-red-500">Bearish</span>
            </div>
          </div>

          {/* Top Sectors */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-600 mb-4">Top Performing Sectors</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Technology</span>
                <span className="text-green-500">+2.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Healthcare</span>
                <span className="text-green-500">+1.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Energy</span>
                <span className="text-green-500">+1.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverviewSection;