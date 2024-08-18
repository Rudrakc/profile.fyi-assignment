import ProductCard from "./components/ProductCard";
import React from "react";

async function Products() {
  // Fetch the data from the API
  const res = await fetch(
    "https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products"
  );
  const products = await res.json();

  return (
    <div className="w-full flex flex-wrap gap-8 justify-center my-24">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default React.memo(Products);
