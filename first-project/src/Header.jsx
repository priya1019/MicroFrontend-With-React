import React, { useState } from "react";
import "./index.css";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
const Header = ({ data }) => {
  const [count, setCount] = useState(1);
  const onClickIncre = () => {
    setCount(count + 1);
  };
  return (
    <div className="header">
      <div className="flex justify-between">
        <div className="">
          Fidget Spinner World <span onClick={onClickIncre}>{count}</span>
        </div>
        <div className="">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
