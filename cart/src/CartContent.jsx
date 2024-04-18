import React, { useState, useEffect } from "react";

import { cart, clearCart } from "cart/cart";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div style={{ fontSize: "16px" }}>{item.quantity}</div>
            <img
              src={item.image}
              width={40}
              height={40}
              alt={item.name}
              className="max-h-6"
            />
            <div style={{ fontSize: "16px" }}>{item.name}</div>
            <div style={{ fontSize: "16px" }} className="text-right">
              {item.quantity * item.price}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div style={{ fontSize: "16px", float: "right" }} id="grand_total">
          {items.reduce((a, v) => a + v.quantity * v.price, 0)}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex justify-between">
          <div className="flex-grow">
            <button id="clearcart" className="clear-button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button className="login-button" onClick={clearCart}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
