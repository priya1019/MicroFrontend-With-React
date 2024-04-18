import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Header from "first_project/Header";
import Footer from "first_project/Footer";
import CartContent from "./CartContent";
const App = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
