import React, { useEffect, useState } from "react";
import { cart, clearCart } from "./cart";
import "./index.css";
const MiniCart = () => {
  const [items, setItems] = useState({});
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);
  if (!items) return null;
  return (
    <div>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i
          className="ri-shopping-cart-2-fill"
          style={{ fontSize: "28px" }}
          id="showcart"
        ></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div
            className="login-container"
            style={{
              width: 300,
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="max-h-6"
                  />
                  <div>{item.name}</div>
                  <div className="text-right">{item.quantity * item.price}</div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div>{items.reduce((a, v) => a + v.quantity * v.price, 0)}</div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button
                  id="clearcart"
                  className="clear-button"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button className="login-button" onClick={clearCart}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;
