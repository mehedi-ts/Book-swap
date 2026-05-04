"use client";
import ProfileUpdate from "@/components/profile/ProfileUpdate";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { CiLock } from "react-icons/ci";
import { FaAngleRight, FaRegEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const { name, email, image } = user || {};
  if (isPending) {
    return (
      <div className="max-w-7xl mx-auto min-h-100 w-full flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  // if (!user) {
  //   return (
  //     <div className="max-w-7xl mx-auto min-h-100 w-full flex items-center justify-center">
  //       <p className="text-gray-500">User not found</p>
  //     </div>
  //   );
  // }
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="main-profile max-w-4xl w-full mx-auto py-4 md:py-10 border border-gray-200 p-8 rounded-xl my-3">
        <div className="title  flex flex-col md:flex-row md:text-left px-2 text-center items-center justify-between gap-3 md:gap-0 mb-10">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <p className="text-xs text-gray-400 hidden md:flex ">
              Manage your profile information and preferences.
            </p>
          </div>
          <div>
            <ProfileUpdate></ProfileUpdate>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pro flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-7  border-b-2 border-gray-200 py-3 pb-6 mb-2">
            <div className="img   rounded-full overflow-hidden">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
                <Image
                  src={image || "https://i.ibb.co.com/Q78Gvm6H/images.png"}
                  alt="profile"
                  fill
                  className=" object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="info text-center md:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {name}
              </h1>
              <p className="text-base font-medium text-gray-500 my-2">
                {email}
              </p>
              <p className="text-base font-medium text-gray-500 my-2">
                Dhaka,Bangladesh
              </p>
              <p className="text-base font-medium text-gray-500 my-2">
                Member since January 2024
              </p>
            </div>
          </div>
          {/* <div className=" p-9  flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-800 ">account</h4>
            <div className="flex items-center justify-between  py-2 px-1 bg-white rounded-md shadow-sm">
              <div className="flex gap-5 items-center">
                <div>
                  <CiLock size={28} />
                </div>
                <div>
                  <h4 className=" font-semibold">Change password</h4>
                  <p className="text-xs text-gray-400">Update your password</p>
                </div>
              </div>
              <div>
                <MdKeyboardArrowRight size={28} />
              </div>
            </div>
            <div className="flex items-center justify-between  py-2 px-1 bg-white rounded-md shadow-sm">
              <div className="flex gap-5 items-center">
                <div>
                  <IoIosLogOut size={28} />
                </div>
                <div>
                  <h4 className=" font-semibold">Log Out</h4>
                  <p className="text-xs text-gray-400">
                    Sign out from your account
                  </p>
                </div>
              </div>
              <div>
                <MdKeyboardArrowRight size={28} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
