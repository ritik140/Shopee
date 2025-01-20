import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      image: "tshirt-image-url",
      title: "Gray T-shirt",
      price: 100.99,
      quantity: 1,
    },
    {
      id: 2,
      image: "hoodie-image-url",
      title: "Red Flannel",
      price: 100.99,
      quantity: 1,
    },
  ]);

  // Handle quantity changes, removing item if quantity is 0
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Handle removing an item when the cancel button is clicked
  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id)); // Removes the item from the cart
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(item.id, newQuantity)
            }
            onRemove={() => handleRemoveItem(item.id)}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="border rounded p-2"
          />
          <button className="bg-gray-800 text-white px-4 py-2 ml-2">
            Apply Code
          </button>
        </div>
        <div className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
      </div>
      <div className="flex justify-end space-x-4">
        <div className="mt-8 flex justify-end">
          <Link to={"/"}>
            <button className="border-2 px-4 py-2">
              Continue shopping
            </button>
          </Link>
        </div>
        <div className="mt-8 flex justify-end">
          <Link to={"/checkout"}>
            <button className="bg-gray-800 text-white px-4 py-2">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
