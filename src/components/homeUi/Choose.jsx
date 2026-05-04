import React from "react";
import { FaMoneyBillWave, FaBookOpen, FaUsers } from "react-icons/fa";
import ChooseCard from "./ChooseCard";

const Choose = () => {
  const whyChooseUsData = [
    {
      id: 1,
      title: "Save Money",
      description:
        "Borrow books instead of buying expensive copies. Perfect for students on a budget.",
      icon: FaMoneyBillWave,
    },
    {
      id: 2,
      title: "Easy Borrowing",
      description:
        "Request and borrow books easily with just a few clicks. No complicated process.",
      icon: FaBookOpen,
    },
    {
      id: 3,
      title: "Community Driven",
      description:
        "Connect with other readers and share knowledge through a trusted community.",
      icon: FaUsers,
    },
  ];

  return (
    <section className=" py-10 px-3 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whyChooseUsData.map((item) => (
            <ChooseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
