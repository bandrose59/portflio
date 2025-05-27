import { useState } from "react";
import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/sections/Navbar";
import { MobileMenu } from "./components/sections/Mobilemenu";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Project";
import { Testimonial } from "./components/sections/Testimonial";
import { GetInTouch } from "./components/sections/GetInTouch";
import { Home } from "./components/sections/Home";
import { Dock } from "./components/sections/Dock";
import { ErrorPage } from "./components/sections/Error";
import ProjectMain from "./components/sections/ProjectsMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Certificates from "./components/sections/Certifications";
import { MainJsx } from "./components/sections/MainScreen";
import { BlogPage } from "./components/sections/Blog";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Routing */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Dock />
                <Projects />
                <Testimonial />
                <GetInTouch />
              </>
            }
          />
          <Route path="/" element={<MainJsx />} />
          <Route path="/home" element={<MainJsx />} />
          <Route path="/projects" element={<ProjectMain />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
