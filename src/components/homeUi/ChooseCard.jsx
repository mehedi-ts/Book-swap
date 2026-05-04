import React from "react";

const ChooseCard = ({ item }) => {
  const { title, description, icon: Icon } = item;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center border border-gray-100">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
        <Icon className="text-blue-500 text-2xl" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export default ChooseCard;
