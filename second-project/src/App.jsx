import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.css";
const Header = React.lazy(() => import("first_project/Header"));
import Footer from "first_project/Footer";
import SingleContentPage from "./SingleContentPage";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <div className="main-content">
          <Routes>
            <Route path="/products/:id" element={<SingleContentPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
