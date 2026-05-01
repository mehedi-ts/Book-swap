import React from "react";

const Marquee = () => {
  return (
    <div className=" bg-[#f4f7ff] h-12 flex items-center mt-2.5 rounded-3xl text-[#1e3a8a] text-sm font-medium">
      <marquee behavior="" direction="">
        <span>hello</span>
        <span>mello</span>
        <span>hello</span>
        <span>hello</span>
      </marquee>
    </div>
  );
};

export default Marquee;
