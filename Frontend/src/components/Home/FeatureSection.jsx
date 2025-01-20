import React from "react";
import FeatureCard from "./FeatureCard";
import ViewAll from "./ViewAll";
import { Element } from "react-scroll";

const products = [
  {
    name: "Black Briefcase",
    price: 299,
    image: "https://example.com/images/black_briefcase.jpg",
  },
  {
    name: "Pink Shirt",
    price: 299,
    image: "https://example.com/images/pink_shirt.jpg",
  },
  {
    name: "Gray T-shirt",
    price: 299,
    image: "https://example.com/images/gray_tshirt.jpg",
  },
  {
    name: "Red Flannel",
    price: 299,
    image: "https://example.com/images/red_flannel.jpg",
  },
  {
    name: "Black Briefcase",
    price: 299,
    image: "https://example.com/images/black_briefcase.jpg",
  },
  {
    name: "Pink Shirt",
    price: 299,
    image: "https://example.com/images/pink_shirt.jpg",
  },
  {
    name: "Gray T-shirt",
    price: 299,
    image: "https://example.com/images/gray_tshirt.jpg",
  },
  {
    name: "Red Flannel",
    price: 299,
    image: "https://example.com/images/red_flannel.jpg",
  },
  {
    name: "Black Briefcase",
    price: 299,
    image: "https://example.com/images/black_briefcase.jpg",
  },
  {
    name: "Pink Shirt",
    price: 299,
    image: "https://example.com/images/pink_shirt.jpg",
  },
  {
    name: "Gray T-shirt",
    price: 299,
    image: "https://example.com/images/gray_tshirt.jpg",
  },
  {
    name: "Red Flannel",
    price: 299,
    image: "https://example.com/images/red_flannel.jpg",
  },
];

const FeatureSection = () => {
  return (
    <Element id="Features">
      <section className="px-4 md:px-8 lg:px-16 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Featured</h2>
          <ViewAll path={"/Categories"} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <FeatureCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              isFeatured={index === 0} // Make the first item featured
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default FeatureSection;
