import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ data }) => {
  const { name, role, image, review, rating } = data;
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
      {/* Rating */}
      <div className="flex justify-center mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            <FaStar></FaStar>
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 text-sm mb-4 italic">“{review}”</p>

      {/* User */}
      <div className="flex flex-col items-center gap-2">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
