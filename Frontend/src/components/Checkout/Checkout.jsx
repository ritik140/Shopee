import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="container mx-auto p-8">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buyer Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Buyer Info</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1">Address</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label className="block mb-1">Contact</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Enter your contact"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block mb-1">Zip Code</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">State</label>
                <select className="w-full border rounded p-2">
                  <option>Select State</option>
                  <option>State 1</option>
                  <option>State 2</option>
                  {/* Add more options here */}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              className={`w-1/3 p-2 border rounded flex justify-center items-center ${
                paymentMethod === "credit-card" ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setPaymentMethod("credit-card")}
            >
              Credit Card
            </button>
            <button
              type="button"
              className={`w-1/3 p-2 border rounded flex justify-center items-center ${
                paymentMethod === "bank-transfer"
                  ? "bg-gray-800 text-white"
                  : ""
              }`}
              onClick={() => setPaymentMethod("bank-transfer")}
            >
              Bank Transfer
            </button>
            <button
              type="button"
              className={`w-1/3 p-2 border rounded flex justify-center items-center ${
                paymentMethod === "paypal" ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              Paypal
            </button>
          </div>

          {/* Credit Card Form */}
          {paymentMethod === "credit-card" && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Name on Card</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Name on card"
                />
              </div>
              <div>
                <label className="block mb-1">Card Number</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Card number"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">CVV</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    placeholder="CVV"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Month</label>
                  <select className="w-full border rounded p-2">
                    <option>Select Month</option>
                    {/* Month options */}
                  </select>
                </div>

                <div>
                  <label className="block mb-1">Year</label>
                  <select className="w-full border rounded p-2">
                    <option>Select Year</option>
                    {/* Year options */}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Bank Transfer Form */}
          {paymentMethod === "bank-transfer" && (
            <div>
              <p>Bank Transfer Instructions go here.</p>
            </div>
          )}

          {/* Paypal Form */}
          {paymentMethod === "paypal" && (
            <div>
              <p>Paypal Payment Instructions go here.</p>
            </div>
          )}
        </div>
      </form>

      <div className="mt-8 flex justify-end">
        <button className="bg-gray-800 text-white px-4 py-2">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
