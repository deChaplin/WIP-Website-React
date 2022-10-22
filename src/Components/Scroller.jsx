import Particles from "./Particles/Particles.js";

import ScrollToTop from "react-scroll-to-top";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Sticky,
  ZoomOut,
  Fade,
  MoveOut,
} from "react-scroll-motion";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footerbar/Footer";
import About from "./Content/Pages/About";
import Contact from "./Content/Pages/Contact";
import Home from "./Content/Pages/HomePage";
import Projects from "./Content/Projects/Projects.jsx";

function Scroller() {
  return (
    <div>
      <Navbar />
      <Footer />

      <ScrollToTop smooth color="grey" />

      <ScrollContainer snap="none">
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
            <div id="page0">
              <Home />
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), MoveOut(0, -200))}>
            <About />
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), MoveOut(0, -200))}></Animator>
          <Projects />
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), MoveOut(0, -200))}>
            <Contact />
          </Animator>
        </ScrollPage>
        <Particles />
      </ScrollContainer>
    </div>
  );
}

export default Scroller;
