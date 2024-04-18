import React, { useEffect, useState } from "react";
import { jwt, login } from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";
const CartContent = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // login("sally", "123");
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);
  return (
    <div>
      <div>JWT: {token} </div>
      <Login />
      <MiniCart />
    </div>
  );
};

export default CartContent;
