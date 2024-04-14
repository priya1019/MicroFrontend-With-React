import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "first_project/Header";
import Footer from "first_project/Footer";

const App = () => (
  <div className="container">
    <Header />
    <div className="main-content">Second Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
