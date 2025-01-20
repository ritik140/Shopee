import React from "react";

const categories = [
  { name: "Jacket", icon: "🧥" },
  { name: "Shirt", icon: "👕" },
  { name: "Pants", icon: "👖" },
  { name: "Shoes", icon: "👟" },
  { name: "Dress", icon: "👗" },
  { name: "Accessories", icon: "👜" },
  { name: "Skirt", icon: "👚" },
  { name: "View more", icon: "🔽" },
];

const CategoriesLeftSide = () => {
  return (
    <div className="border-r pr-6 w-full md:w-full">
      {/* Dropdown for small screens */}
      <div className="md:hidden mb-4">
        <select className="w-full p-2 border border-gray-300 rounded">
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.icon} {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* List for medium and larger screens */}
      <div className="hidden md:block">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center py-2 text-lg hover:text-gray-700 cursor-pointer"
            >
              <span className="mr-3 text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesLeftSide;
