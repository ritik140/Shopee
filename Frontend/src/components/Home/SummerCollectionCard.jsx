import React from "react";

const SummerCollectionCard = ({ image, label, price, brand }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between m-6">
      <img src={image} alt={label} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
        <p className="text-gray-500">Festive Wear By {brand}</p>
        <p className="text-gray-700 font-bold mt-2">Starting ₹{price}</p>
      </div>
    </div>
  );
};

export default SummerCollectionCard;
