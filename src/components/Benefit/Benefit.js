import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/solid";

const Benefit = (props) => {
  return (
    <p className="flex items-center">
      <ShieldCheckIcon className="mr-2 w-4 h-4 text-green-500"></ShieldCheckIcon>
      {props.benefit}
    </p>
  );
};

export default Benefit;
