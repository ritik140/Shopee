import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const Main = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/items/all-items", items)
      .then((response) => {
        setItems(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-20 bg-gray-100">
      {/* Left Side - Text */}
      <div className="md:w-1/2 space-y-4 p-20">
        <h1 className="text-8xl font-bold text-gray-800">Winter</h1>
        <h1 className="text-8xl font-bold text-gray-800">Sale</h1>
        <h2 className="text-6xl font-bold text-gray-800">50% Off</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded mt-4">
          Shop Now &rarr;
        </button>
      </div>

      {/* Right Side - Carousel */}
      <div className="md:w-1/2 mt-6 md:mt-2">
        <Slider {...settings}>
          {/* Carousel items with different image sizes */}
          {items.map((item) => (
            <div className="p-4">
              <div className="relative h-64 w-full">
                <img
                  src={item.product_image_path}
                  alt="Product 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-2 text-gray-800">
                Up to {Math.floor(Math.random() * (90 - 50) + 50)}% Off
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Next/Prev Arrows for Carousel
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 text-white rounded-full`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      &rarr;
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 text-white rounded-full`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      &larr;
    </div>
  );
};

export default Main;
