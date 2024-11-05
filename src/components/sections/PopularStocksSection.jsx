import React from 'react';

const PopularStocksSection = () => {
  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: "189.84",
      change: "+2.35",
      percentChange: "+1.25",
      trend: "up"
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: "402.12",
      change: "-1.25",
      percentChange: "-0.31",
      trend: "down"
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: "142.38",
      change: "+3.80",
      percentChange: "+2.74",
      trend: "up"
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: "159.12",
      change: "+1.45",
      percentChange: "+0.92",
      trend: "up"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Popular Stocks</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All Stocks →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stocks.map((stock) => (
            <div key={stock.symbol} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{stock.symbol}</h3>
                  <p className="text-gray-600 text-sm">{stock.name}</p>
                </div>
                <div className={`${stock.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.trend === 'up' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold">${stock.price}</span>
                <span className={`${
                  stock.trend === 'up' ? 'text-green-500' : 'text-red-500'
                } font-semibold`}>
                  {stock.change} ({stock.percentChange}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularStocksSection;