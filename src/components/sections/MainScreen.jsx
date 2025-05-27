import { About } from "./About";
import { Dock } from "./Dock";
import { Projects } from "./Project";
import { Testimonial } from "./Testimonial";
import { GetInTouch } from "./GetInTouch";
import { Home } from "./Home";
export const MainJsx = () => {
  return (
    <>
      <Home />
      <About />
      <Dock />
      <Projects />
      <Testimonial />
      <GetInTouch />
    </>
  );
};
