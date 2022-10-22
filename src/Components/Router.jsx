import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import About from "./Content/Pages/About";
import Contact from "./Content/Pages/Contact";
import Home from "./Content/Pages/HomePage";
import Projects from "./Content/Projects/Projects.jsx";

function MyRouter() {
  const location = useLocation();

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default MyRouter;
