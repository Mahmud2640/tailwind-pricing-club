import React from "react";
import Benefit from "../../Benefit/Benefit";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";


const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-6xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-2xl font-medium text-left">Benefits: </h3>
        { 
        benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
           }
      </div>
      <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-4 text-white hover:text-green-700 font-bold'>
         Buy Now <ChevronDoubleRightIcon className="w-6 h-6 ml-2"></ChevronDoubleRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
