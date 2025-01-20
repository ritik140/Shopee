import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const WhyChoose = () => {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Free Delivery",
      description: "This free shipping only for selected region",
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Payment Method",
      description: "Multiple payment options available",
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Warranty",
      description: "This free shipping only for selected region",
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Customer Support",
      description: "24/7 support for all your queries",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg"
            >
              <div className="mb-4 text-gray-700">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
