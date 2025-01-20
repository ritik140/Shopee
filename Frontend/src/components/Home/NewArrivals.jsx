import React from "react";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";
import ViewAll from "./ViewAll";
import { Element } from "react-scroll";

const NewArrivals = () => {
  const products = [
    {
      name: "Purple Warm Jacket",
      price: "$299",
      image: "https://via.placeholder.com/300x400.png?text=Purple+Warm+Jacket",
    },
    {
      name: "Blue Grey Warm Jacket",
      price: "$299",
      image:
        "https://via.placeholder.com/300x400.png?text=Blue+Grey+Warm+Jacket",
    },
    {
      name: "Denim Jacket",
      price: "$299",
      image: "https://via.placeholder.com/300x400.png?text=Denim+Jacket",
    },
    {
      name: "Black Jacket",
      price: "$299",
      image: "https://via.placeholder.com/300x400.png?text=Black+Jacket",
    },
    {
      name: "Green Polar Jacket",
      price: "$299",
      image: "https://via.placeholder.com/300x400.png?text=Green+Polar+Jacket",
    },
  ];

  return (
    <Element name="newArrivalSection">
      <section className="py-10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
            <ViewAll path={"/Categories"} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {/* Featured large product */}
            <div className="col-span-1 lg:col-span-2 row-span-2">
              <FeaturedCard
                name={products[0].name}
                price={products[0].price}
                image={products[0].image}
                isFeatured={true}
              />
            </div>

            {/* Other products */}
            {products.map((product, index) => (
              <FeaturedCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                isFeatured={false}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};
export default NewArrivals;
