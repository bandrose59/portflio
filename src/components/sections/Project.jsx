import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";
import { Button } from "../ui/moving-border";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="projects" className="min-h-screen relative flex items-center justify-center py-16 sm:py-20">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              <span className="text-yellow-300 text-3xl font-bold mr-2 align-middle">
                📁
              </span>
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* First Project */}
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Cloud Platform</h3>
                <p className="text-gray-400 mb-4">
                  Scalable cloud infrastructure management with real-time monitoring and automated scaling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Duplicate Projects */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    AI Analytics Dashboard
                  </h3>
                  <p className="text-gray-400 mb-4">
                    ML-powered data visualization platform with predictive analytics and interactive reports.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      View Project →
                    </a>
                    <a
                      href="#"
                      className="text-blue-800 hover:text-blue-300 transition-colors my-4"
                    >
                      Source Code →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* View All Projects Button */}
  <div className="flex justify-center mt-4 mb-8 sm:mt-8 sm:mb-8 z-10 pointer-events-auto">
  <Button
    onClick={() => navigate("/projects")}
    borderRadius="5rem"
    className="flex items-center  px-4 py-3 sm:px-2 sm:py-4 transition-all duration-300 border border-white/20 text-gray-100 font-medium text-lg sm:text-xl hover:shadow-lg hover:border-white bg-black/20 backdrop-blur-sm hover:bg-black/30 "
  >
    View Projects
  </Button>
</div>

    </>
  );
};
