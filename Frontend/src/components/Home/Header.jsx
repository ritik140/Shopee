import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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

      {/* Center Links (Stacked on Mobile, Horizontal on Larger Screens) */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 mt-4 md:mt-0">
        <Link to="/category" className="text-gray-600 hover:text-gray-800">
          Categories
        </Link>
        <ScrollLink
          to="newArrivalSection"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          New Arrival
        </ScrollLink>
        <ScrollLink
          to="Features"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          Features
        </ScrollLink>

        <ScrollLink
          to="Collections"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          Collections
        </ScrollLink>
        <a href="#" className="text-gray-600 hover:text-gray-800">
        
        </a>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

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
