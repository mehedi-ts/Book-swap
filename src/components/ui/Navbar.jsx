import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const navlinks = (
    <>
      <li className=" font-semibold hover:text-[#2563EB] transition-all duration-300">
        <Link href="/">Home</Link>
      </li>
      <li className="font-semibold hover:text-[#2563EB] transition-all duration-300">
        <Link href="/">All Books</Link>
      </li>
      <li className="font-semibold hover:text-[#2563EB] transition-all duration-300">
        <Link href="/">Profile</Link>
      </li>
    </>
  );
  return (
    <div className=" shadow-xl py-5 ">
      <div className="main-nav max-w-7xl mx-auto  flex items-center justify-between">
        <Logo></Logo>
        <ul className="flex items-center gap-16">{navlinks}</ul>
        <div className="btns-nav flex items-center gap-2">
          <button className="btn rounded-xl btn-outline border-[#2563EB] text-[#2563EB] hover:text-[#ffffff] hover:bg-[#2563EB] transition-all duration-300">
            Login
          </button>
          <button className="btn rounded-xl bg-[#2563EB] text-[#FFFFFF]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
