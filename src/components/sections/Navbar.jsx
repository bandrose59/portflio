import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-[1000] bg-[rgba(10,10,10,0.4)] backdrop-blur-sm border-b border-white/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            ritesh.<span className="text-blue-500">yevatkar</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Project
            </Link>
            <Link
              to="/certificates"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Certifications
            </Link>

            <Link
              to="/blogs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
