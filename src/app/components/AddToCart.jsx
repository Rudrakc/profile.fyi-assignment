import React from "react";
import useCartStore from "../hooks/useCartStore";

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore();

  const increase = () => {
    increaseQuantity(product);
  };

  const decrease = () => {
    decreaseQuantity(product);
  };

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;

  if (quantity === 0) {
    return (
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center mt-4 space-x-4">
        <button
          onClick={decrease}
          className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increase}
          className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          +
        </button>
      </div>
    );
  }
}

export default AddToCart;
