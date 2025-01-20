import React, { useState } from "react";
import Filter from "./Filter";
import Categories from "../Home/Categories";
import Breadcrumb from "./Breadcrumb";

const Category = () => {
  const [currentPage, setCurrentPage] = useState("Categories");

  return (
    <>
      <div className="max-w-[1630px] mx-auto mb-10 mt-8 w-full lg:px-5 md:px-5">
        <div className="gap-[42px] flex flex-col">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center">
            <Breadcrumb currentPage={currentPage} />
          </div>

          {/* Categories Section */}
          <div className="sm:gap-[35px] md:gap-[52px] lg:gap-[70px] gap-[70px] flex flex-col items-center">
            <h1 className="sm:text-[28px] md:text-[30px] lg:text-[30px] text-[36px] font-bold text-gray-800">
              Categories
            </h1>

            <div className="flex flex-wrap lg:flex-nowrap items-start gap-8 self-stretch">
              {/* Filter Section */}
              <div className="w-full lg:w-[20%] flex flex-col gap-8">
                <Filter />
              </div>

              {/* Categories Section */}
              <Categories isHome={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
