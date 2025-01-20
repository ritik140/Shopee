import React, { useState } from "react";

const products = [
  {
    name: "Green Warm Jacket",
    price: "$299",
    image: "link-to-green-jacket.png",
  },
  {
    name: "Black Warm Jacket",
    price: "$299",
    image: "link-to-black-jacket.png",
  },
  {
    name: "Blue Grey Warm Jacket",
    price: "$299",
    image: "link-to-blue-grey-jacket.png",
  },
  {
    name: "Blue Denim Jacket",
    price: "$299",
    image: "link-to-blue-denim-jacket.png",
  },
  {
    name: "Purple Warm Jacket",
    price: "$299",
    image: "link-to-purple-jacket.png",
  },
  // Add more products as needed
];

function ProductList() {
  const [productsPerPage] = useState(20); // Simulate viewing 20 products per page
  const totalProducts = products.length; // Get total number of products

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Product List</h1>
        <div className="text-gray-500">
          <span>
            Viewing {Math.min(productsPerPage, totalProducts)} of{" "}
            {totalProducts} products
          </span>
        </div>
        <div className="relative">
          <span className="text-gray-500">Sort by: </span>
          <select className="ml-2 border border-gray-300 p-2 rounded">
            <option>Newest Items</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.slice(0, productsPerPage).map((product, index) => (
          <div
            key={index}
            className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
