import React, { useState } from "react";

const ViewItem = () => {
  const [quantity, setQuantity] = useState(1);

  // Handlers for increasing and decreasing quantity
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span>Featured &gt; Purple Warm Jacket</span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col space-y-4 content-center items-center">
          <img
            src="https://via.placeholder.com/300x300"
            alt="Purple Warm Zip Jacket - Front"
            className="w-[80%]  rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Purple Warm Zip Jacket
          </h1>
          <p className="text-2xl text-gray-700 mb-4">$299</p>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <span className="mr-4 text-gray-600">Quantity</span>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2 text-lg">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-1/5 bg-gray-800 text-white py-3 rounded-lg mt-4 hover:bg-gray-700 transition">
            Add to Cart 🛒
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">You may also like</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Related Product */}
          <div className="text-center border p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Related Product"
              className="mb-4 mx-auto"
            />
            <p className="text-lg font-medium">Black Hoodie</p>
            <p className="text-gray-600">$199</p>
          </div>
          {/* Add more related products */}
          <div className="text-center border p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Related Product"
              className="mb-4 mx-auto"
            />
            <p className="text-lg font-medium">Leather Belt</p>
            <p className="text-gray-600">$49</p>
          </div>
          <div className="text-center border p-4 rounded-lg">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Related Product"
              className="mb-4 mx-auto"
            />
            <p className="text-lg font-medium">Brown Handbag</p>
            <p className="text-gray-600">$299</p>
          </div>
          {/* ... Add more related products as needed */}
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
