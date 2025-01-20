import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="text-lg mb-4">
      <Link to={"/"}> Home </Link>
      &gt; <span className="font-semibold">{currentPage}</span>
    </div>
  );
};

export default Breadcrumb;
