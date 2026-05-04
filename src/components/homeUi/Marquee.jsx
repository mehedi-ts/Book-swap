"use client";
import { HiSpeakerphone } from "react-icons/hi";

const Marquee = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {" "}
      <div className=" bg-[#e0e9ff] h-12 flex items-center mt-2.5 rounded-3xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 text-[#1e3a8a] font-semibold whitespace-nowrap">
          <HiSpeakerphone className="text-xl text-gray-600" />
        </div>
        <div className="h-5 w-px bg-blue-200 mr-2"></div>
        <marquee
          direction="left"
          className="flex-1 text-[#1e3a8a] text-sm font-medium"
        >
          <span className="mx-6">
            <span className="font-semibold">New Arrivals:</span> Atomic Habits •
            The Alchemist • Rich Dad Poor Dad {"     "}{" "}
            <span className="font-semibold"></span>
          </span>
          <span>|</span>
          <span className="font-semibold ml-5">
            Special Discount on Memberships
          </span>
        </marquee>
      </div>
    </div>
  );
};

export default Marquee;
