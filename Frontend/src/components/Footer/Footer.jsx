import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import {}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Join our Newsletter</h3>
          <p className="text-sm mb-4">
            Drop your email below to get updates, news, and more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
              →
            </button>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Product Links</h3>
          <ul>
            <li className="text-sm mb-2">Categories</li>
            <li className="text-sm mb-2">New Arrival</li>
            <li className="text-sm mb-2">Features</li>
            <li className="text-sm mb-2">Collections</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="text-sm mb-2">About</li>
            <li className="text-sm mb-2">Blog</li>
            <li className="text-sm mb-2">Careers</li>
            <li className="text-sm mb-2">Contact</li>
            <li className="text-sm mb-2">Services</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul>
            <li className="text-sm mb-2">Support Center</li>
            <li className="text-sm mb-2">FAQ</li>
            <li className="text-sm mb-2">Privacy Policy</li>
            <li className="text-sm mb-2">Terms of Service</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            {/* <FaTwitter className="text-2xl" />
            <FaFacebookF className="text-2xl" /> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm">
        <p>Copyright © 2024 Shopee. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
