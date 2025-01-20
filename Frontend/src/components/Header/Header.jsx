import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-white shadow-md">
      {/* Left Side Logo */}
      <Link to={"/"}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <span className="font-bold text-xl text-gray-800">Shopee</span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="w-full md:w-1/3 mt-4 md:mt-0">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="p-2 w-10 bg-gray-800 text-white rounded-r hover:bg-gray-900"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>

        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
