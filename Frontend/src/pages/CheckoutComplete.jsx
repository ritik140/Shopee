import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const CheckoutComplete = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <div className=" p-8   text-center">
          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Checkout Complete!
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link to={"/"}>
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
              Go Shopping Again
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckoutComplete;
