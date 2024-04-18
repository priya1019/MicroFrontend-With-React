import React, { useEffect, useState } from "react";
import { getProducts } from "./products";
import "./index.css";
import { addToCart, useLoggedIn } from "cart/cart";
const HomeContent = () => {
  const [products, setProducts] = useState([]);
  const isLoggedIn = useLoggedIn();
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
            <p className="flex-grow font-bold" style={{ fontSize: "20px" }}>
              {product.name}
            </p>
            {isLoggedIn && (
              <button
                style={{
                  backgroundColor: "#226ddd",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "16px",
                }}
                onClick={() => addToCart(product?.id)}
                id={product?.id}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
