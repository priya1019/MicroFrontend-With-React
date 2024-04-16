import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Header = React.lazy(() => import("first_project/Header"));
import Footer from "first_project/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="container">
      {!showHeader && <p onClick={() => setShowHeader(true)}>Show Header</p>}
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}
      <div className="main-content">Second Page Content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
