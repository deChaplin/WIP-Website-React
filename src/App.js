import { useEffect } from "react";
import "./App.css";

import Footer from "./Components/Footerbar/Footer.jsx";
import Particles from "./Components/Particles/Particles.js";
import MyRouter from "./Components/Router.jsx";

const App = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="App">
      <MyRouter />
      <Particles />
      <Footer />
    </div>
  );
};

export default App;
