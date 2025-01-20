import React from "react";
import { default as Product } from "../components/ProductList/ProductList";
import CategoriesLeftSide from "../components/ProductList/CategoriesLeftSide";
import Header from "../components/Header/Header";
import Filter from "../components/Categories/Filter";

const ProductList = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center p-6">
        {/* Main wrapper for content, max width ensures it's limited to the screen size */}
        <div className="flex max-w-screen-xl w-full">
          {/* Sidebar - Categories and Filters */}
          <div className="w-1/5 pr-4 hidden lg:block">
            <CategoriesLeftSide />
            <div className="py-4">
              <Filter />
            </div>
          </div>

          {/* Main product list area */}
          <div className="w-full lg:w-4/5">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
