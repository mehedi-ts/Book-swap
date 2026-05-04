import React from "react";
import { PiSmileySadLight } from "react-icons/pi";

const Empty = () => {
  return (
    <div className="w-full h-66 border-2 border-gray-200  rounded-2xl flex flex-col justify-center items-center gap-3">
      <div>
        <PiSmileySadLight className="text-7xl" />
      </div>
      <p className="text-gray-500">No books found </p>
    </div>
  );
};

export default Empty;
