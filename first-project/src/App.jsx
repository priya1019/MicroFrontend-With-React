import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <Header data={data} />
      <div className="main-content">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
