import React from "react";

const CartItem = ({ image, title, price, quantity, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <img src={image} alt={title} className="w-20 h-20 object-cover" />
        <div className="ml-4">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-500">${price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onQuantityChange(quantity - 1)}
          className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
        >
          +
        </button>
      </div>
      <p>${(price * quantity).toFixed(2)}</p>
      <button onClick={onRemove} className="text-white bg-red-500 border-2 px-4 py-2 ml-2">
        Cancel
      </button>
    </div>
  );
};

export default CartItem;
