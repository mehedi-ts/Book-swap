"use client";
import { authClient } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Avatar, Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdMenu } from "react-icons/md";

const Nabmenu = () => {
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
    <Drawer>
      <Button className="bg-none text-gray-800" variant="secondary">
        <Bars />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header></Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                <ul className="flex flex-col  items-center gap-5 pl-4 w-full mb-10 ">
                  {navlinks}
                </ul>
              </nav>
              <div>
                {user ? (
                  <div className="btns-nav flex flex-col items-center gap-3 mt-6 w-full">
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
                      className="btn rounded-xl bg-[#2563EB] text-[#FFFFFF] w-full flex items-center justify-center gap-2"
                    >
                      <LuLogOut size={20} /> Log Out
                    </button>
                  </div>
                ) : (
                  <div className="btns-nav flex flex-col items-center gap-3 mt-6 w-full">
                    <Link className="w-full" href="/login">
                      <button className="btn w-full rounded-xl btn-outline border-[#2563EB] text-[#2563EB] hover:text-[#ffffff] hover:bg-[#2563EB] transition-all duration-300">
                        Login
                      </button>
                    </Link>
                    <Link className="w-full" href="/sign-up">
                      <button className="btn w-full rounded-xl bg-[#2563EB] text-[#FFFFFF]">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};

export default Nabmenu;
