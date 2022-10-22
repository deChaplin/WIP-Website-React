import { useEffect, useState, useCallback } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import MyRouter from "./Components/Router.jsx";
import Particles from "./Components/Particles/Particles.js";
import Footer from "./Components/Footerbar/Footer.jsx";

const App = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MyRouter />
      <Particles />
      <Footer />
    </div>
  );
};

export default App;
