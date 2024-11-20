import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-blue-500">{value}</p>
    </div>
  );
};

export default Card;
