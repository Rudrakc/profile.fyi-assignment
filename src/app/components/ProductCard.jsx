"use client";

import { useState } from "react";
function ProductCard({ product }) {
  const [imgCount, setImgCount] = useState(0);

  function imgCountInc() {
    setImgCount((count) => (count + 1) % product.images.length);
  }

  return (
    <div className="flex w-[30%] items-center justify-between p-10 shadow-lg rounded-lg gap-4">
      <div>
        <img
          src={product.images[imgCount]}
          className="w-1/2 object-contain"
          onClick={imgCountInc}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col w-full items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {product.title}
          </h2>
          <p className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 rounded-full mt-2">
            {product.category}
          </p>

          <p className="show text-lg text-gray-600 mt-2">
            Rs {product.price.value}
          </p>
        </div>
        {/* <AddToCart product={product} /> */}
      </div>
    </div>
  );
}

export default ProductCard;
