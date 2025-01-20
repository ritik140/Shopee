import React from "react";
import Header from "../components/Home/Header";
import Main from "../components/Home/main";
import Categories from "../components/Home/Categories";
import NewArrivals from "../components/Home/NewArrivals";
import FeatureSection from "../components/Home/FeatureSection";
import SummerCollection from "../components/Home/SummerCollection";
import WhyChoose from "../components/Home/WhyChoose";
import CompanyName from "../components/Home/CompanyName";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Categories isHome={true} />
      <NewArrivals />
      <FeatureSection />
      <SummerCollection />
      <WhyChoose />
      <CompanyName />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
