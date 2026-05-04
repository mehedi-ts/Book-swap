"use client";
import { authClient } from "@/lib/auth-client";
import Logo from "./Logo";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Nabmenu from "./Nabmenu";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const pathName = usePathname();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const navlinks = (
    <>
      <li
        className={`font-medium  hover:text-[#2563EB]  duration-300 ${pathName === "/" ? "text-[#2563EB]  border-b-2  border-[#2563EB]" : "text-gray-700"}`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`font-medium  hover:text-[#2563EB] duration-300 ${pathName === "/all-books" ? "text-[#2563EB]  border-b-2 border-[#2563EB]" : "text-gray-700"}`}
      >
        <Link href="/all-books">All Books</Link>
      </li>
      <li
        className={` font-medium  hover:text-[#2563EB] duration-300 ${pathName === "/profile" ? "text-[#2563EB]  border-b-2 border-[#2563EB]" : "text-gray-700"}`}
      >
        <Link href="/profile">My Profile</Link>
      </li>
    </>
  );
  return (
    <div className=" sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 mb-0">
      <div className="main-nav max-w-7xl mx-auto  flex items-center justify-between px-6 md:px-2 lg:px-0 py-6">
        <Logo></Logo>
        <ul className="md:flex hidden items-center gap-10 ">{navlinks}</ul>
        {user ? (
          <div className="btns-nav md:flex hidden items-center gap-6 ">
            <Link href="/profile">
              <div className="flex items-center gap-3">
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src="https://i.ibb.co.com/XxKSyMWQ/1765938532930.p"
                  />
                  <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                </Avatar>
                <span className="font-semibold flex items-center gap-0.5 text-gray-700 ">
                  <p>{user?.name}</p> <IoIosArrowDown />
                </span>
              </div>
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut();
              }}
              className="btn rounded-xl bg-[#2563EB] text-[#FFFFFF]"
            >
              <LuLogOut size={20} /> Log Out
            </button>
          </div>
        ) : (
          <div className="btns-nav md:flex hidden items-center gap-2">
            <Link href="/login">
              <button className="btn rounded-xl btn-outline border-[#2563EB] text-[#2563EB] hover:text-[#ffffff] hover:bg-[#2563EB] transition-all duration-300">
                Login
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn rounded-xl bg-[#2563EB] text-[#FFFFFF]">
                Sign Up
              </button>
            </Link>
          </div>
        )}
        <div className=" md:hidden flex">
          <Nabmenu></Nabmenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
