import Image from "next/image";
import React from "react";
import { CiLock } from "react-icons/ci";
import { FaAngleRight, FaRegEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="main-profile py-10">
        <div className="title  flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <p className="text-xs text-gray-400 ">
              Manage your profile information and preferences.
            </p>
          </div>
          <div>
            <button className="btn bg-[#2563EB]  text-[#FFFFFF]">
              <FaRegEdit size={16} /> Edit Profile
            </button>
          </div>
        </div>
        <div className="pro flex items-center gap-7 p-9 border-2 border-gray-200 rounded-xl mb-4">
          <div className="img  border rounded-full overflow-hidden">
            <div className=" relative w-40 h-40">
              <Image
                src="/images/profile.jpg"
                alt="profile"
                fill
                className=" object-cover"
              />
            </div>
          </div>
          <div className="info">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Mehedi Hasan
            </h1>
            <p className="text-base font-medium text-gray-500 my-2">
              mehedihasan@gmail.com
            </p>
            <p className="text-base font-medium text-gray-500 my-2">
              Dhaka,Bangladesh
            </p>
            <p className="text-base font-medium text-gray-500 my-2">
              Mamber since january 2024
            </p>
          </div>
        </div>
        <div className=" p-9 border-2 border-gray-200 rounded-xl flex flex-col gap-4">
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
