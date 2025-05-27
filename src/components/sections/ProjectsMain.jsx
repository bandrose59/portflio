import React ,{ useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { MovingBorder } from "../ui/moving-border";
import { FaGithub } from "react-icons/fa";
import { GetInTouch } from "./GetInTouch";


const ProjectCard = ({ title, description, tech, link, github }) => (
  <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item) => (
        <span
          key={item}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex justify-between gap-4 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        Live Demo →
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        Source Code →
      </a>
    </div>
  </div>
);

const ProjectMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.tech.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section
        id="projects"
        className="min-h-screen mt-10 flex items-center justify-center py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              <span className="text-yellow-300 text-3xl font-bold mr-2 mt-30 align-middle">
                📁
              </span>
              My Projects
            </h2>
          </RevealOnScroll>

          {/* Search & Filter Section */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Search by tech (e.g. React, GPT)..."
              className="px-4 py-2 w-full md:w-1/2 rounded-md border border-white/20 bg-black/30 text-white placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex gap-2 flex-wrap">
              {["All", "Web", "ML", "DevOps"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 rounded-full border transition text-sm ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.length === 0 ? (
              <p className="text-gray-400 text-center col-span-full">
                No projects found.
              </p>
            ) : (
              filteredProjects.map((project, index) => (
                <RevealOnScroll key={index}>
                  <ProjectCard {...project} />
                </RevealOnScroll>
              ))
            )}
          </div>

          {/* GitHub Link */}
          <RevealOnScroll>
            <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
              <a
                href="https://github.com/yourusername?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:gap-3 hover:border-blue-400 hover:shadow-lg bg-black/20 backdrop-blur-sm"
              >
                View More on GitHub
                <FaGithub className="text-lg" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default ProjectMain;
