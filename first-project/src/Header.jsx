import React, { useState } from "react";
import "./index.css";

const Header = ({ data }) => {
  console.log(data, "inside header");
  const [count, setCount] = useState(1);
  const onClickIncre = () => {
    setCount(count + 1);
  };
  return (
    <div className="header">
      Fidget Spinner World <span onClick={onClickIncre}>{count}</span>
    </div>
  );
};

export default Header;
