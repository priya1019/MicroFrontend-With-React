import React, { useEffect, useState } from "react";
import { getProducts } from "./products";
import "./index.css";
const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid_container">
      {products.map((product) => (
        <div key={product.id}>
          <img
            height={200}
            width={200}
            src={product.image}
            alt={product.name}
          />
          <div className="flex">
            <p className="flex-grow font-bold">{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
