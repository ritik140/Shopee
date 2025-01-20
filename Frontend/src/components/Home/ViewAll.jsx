import React from "react";
import { Link } from "react-router-dom";

const ViewAll = ({path}) => {
  return (
    <Link to={path} className="lg:text-[15px] mt-2">
      <p className=" text-[18px] font-medium text-gray-800 undefined">
        {" "}
        View all
      </p>
    </Link>
  );
};

export default ViewAll;
