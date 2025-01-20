import React from "react";
import SummerCollectionCard from "./SummerCollectionCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Element } from "react-scroll";

const collections = [
  {
    image: "https://example.com/image1.jpg",
    label: "Summer Collection",
    price: 299,
    brand: "thomson_19071",
  },
  {
    image: "https://example.com/image2.jpg",
    label: "Summer Collection",
    price: 299,
    brand: "thomson_19071",
  },
  {
    image: "https://example.com/image3.jpg",
    label: "Summer Collection",
    price: 299,
    brand: "thomson_19071",
  },
];

const SummerCollection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Element name="Collections">
      <section className="bg-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Summer Collections
          </h2>
          <Slider {...settings}>
            {collections.map((collection, index) => (
              <SummerCollectionCard
                key={index}
                image={collection.image}
                label={collection.label}
                price={collection.price}
                brand={collection.brand}
              />
            ))}
          </Slider>
        </div>
      </section>
    </Element>
  );
};

export default SummerCollection;
