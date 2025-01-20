import React from "react";

const FeatureCard = ({ name, price, image, isFeatured }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white shadow-sm rounded-lg p-4 transition-all`}
    >
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[150px] object-cover mb-4"
      />
      <h3 className="text-gray-700 font-semibold text-lg text-center mb-2">
        {name}
      </h3>
      <p className="text-gray-500 mb-4">${price}</p>
      <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
        Add to Cart
      </button>
    </div>
  );
};

export default FeatureCard;
