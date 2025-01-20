import React from "react";

const CategoriesCard = ({
  backgroundColor,
  icon,
  label,
  width,
  isHome = true,
}) => {
  if (!isHome) {
    return (
      <div
        className="p-[2rem] sm:p-[4rem] lg:p-[3rem] flex flex-col items-center justify-center rounded-lg mt-8 mb-6 transition-all "
        style={{
          backgroundColor: backgroundColor || "#f0f0f0",
        }}
      >
        <div className="flex items-center justify-center w-[100%] h-[100%]">
          {icon}
        </div>
        <p className="text-[20px] sm:text-[16px] lg:text-[20px] mt-5 font-medium text-center text-gray-500">
          {label}
        </p>
        <p className="sm:text-[30px] text-[20px] font-normal text-gray-500">
          Collection
        </p>
      </div>
    );
  } else {
    return (
      <div
        className="p-[2rem] sm:p-[4rem] lg:p-[5rem] flex flex-col items-center justify-center rounded-lg mt-8 mb-6 transition-all"
        style={{
          backgroundColor: backgroundColor || "#f0f0f0",
        }}
      >
        <div className="flex items-center justify-center w-[80%] h-[80%]">
          {icon}
        </div>
        <p className="text-[14px] sm:text-[16px] lg:text-[20px] mt-5 font-medium text-center text-gray-500">
          {label}
        </p>
      </div>
    );
  }
};

export default CategoriesCard;
