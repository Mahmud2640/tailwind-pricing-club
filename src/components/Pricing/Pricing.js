import React from "react";
import PricingOption from "./PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Basic", price: "$129.99" },
    { id: 2, name: "Good", price: "$112.99" },
    { id: 3, name: "Best", price: "$355.99" },
  ];
  return (
    <div className="bg-slate-400 p-4 mt-8">
      <h1 className="text-6xl font-mono">Best Price in the world</h1>
      <div className='grid md:grid-cols-3 gap-3 mt-8'>
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
