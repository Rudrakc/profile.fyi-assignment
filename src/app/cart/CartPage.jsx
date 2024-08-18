"use client";
import React from "react";
import useCartStore from "../hooks/useCartStore";
import { MdOutlineDelete } from "react-icons/md";

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } =
    useCartStore();

  const cartItems = Object.values(cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price.value * item.quantity,
    0
  );
  const discount = 0; // Add any discount logic here
  const total = subtotal - discount;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center h-36 justify-between p-6 mb-4 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center w-full">
                  <div className="overflow-hidden w-[100px] h-[100px]">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className=" rounded-lg object-contain w-full h-full"
                    />
                  </div>
                  <div className="ml-4 w-full">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600">Rs {item.price.value}</p>
                    <div className="flex justify-end items-center space-x-4 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 px-4 py-2 border border-red-600  rounded-lg hover:bg-red-100"
                      >
                        <MdOutlineDelete className="text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="p-8 bg-white rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>Rs {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>Rs {discount}</span>
          </div>
          <div className="flex justify-between font-bold text-xl mb-4">
            <span>Total:</span>
            <span>Rs {total}</span>
          </div>
          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
