import React from "react";

const FeaturedCard = ({ name, price, image, isFeatured }) => {
  return (
    <div
      className={`bg-gray-100 p-6 rounded-lg transition-shadow hover:shadow-lg h-fit ${
        isFeatured ? "lg:p-8" : ""
      }`}
    >
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover mb-4 ${
          isFeatured ? "lg:h-96" : "h-48"
        }`}
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{price}</p>
      {/* {isFeatured && ( */}
      <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 justify-center items-center">
        Add to Cart
      </button>
      {/* )} */}
    </div>
  );
};
export default FeaturedCard;
