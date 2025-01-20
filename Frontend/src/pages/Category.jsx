import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Home/Categories";
import { default as Cat } from "../components/Categories/Category.jsx";

const Category = () => {
  return (
    <>
      <Header />
      <Cat />
    </>
  );
};

export default Category;
