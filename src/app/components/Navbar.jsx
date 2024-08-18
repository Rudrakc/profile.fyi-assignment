"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import useCartStore from "../hooks/useCartStore"; 

function Navbar() {
  const router = useRouter();
  const { cart } = useCartStore();
  const itemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => {
    router.push('/cart');
  };

  return (
    <div className="flex justify-between py-4 px-16 items-center fixed left-0 top-0 right-0 bg-white/40 backdrop-blur-lg">
      <div>
        <p className="text-3xl font-bold">Profile.fyi</p>
      </div>
      <button onClick={handleClick} className="relative">
        <FiShoppingCart className="scale-150" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2  flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
}

export default Navbar;
