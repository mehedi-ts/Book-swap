"use client";
import { authClient } from "@/lib/auth-client";
import Logo from "./Logo";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  const navlinks = (
    <>
      <li className=" font-semibold hover:text-[#2563EB] transition-all duration-300">
        <Link href="/">Home</Link>
      </li>
      <li className="font-semibold hover:text-[#2563EB] transition-all duration-300">
        <Link href="/all-books">All Books</Link>
      </li>
      <li className="font-semibold hover:text-[#2563EB] transition-all duration-300">
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );
  return (
    <div className=" py-5 z-20 ">
      <div className="main-nav max-w-7xl mx-auto  flex items-center justify-between">
        <Logo></Logo>
        <ul className="flex items-center gap-16">{navlinks}</ul>
        {user ? (
          <div className="btns-nav flex items-center gap-2">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src="https://i.ibb.co.com/XxKSyMWQ/1765938532930.p"
              />
              <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
            </Avatar>
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
          <div className="btns-nav flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default Navbar;
