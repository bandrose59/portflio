import React ,{ useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { MovingBorder } from "../ui/moving-border";
import { FaGithub } from "react-icons/fa";
import { GetInTouch } from "./GetInTouch";



const projects = [
  {
    title: "Byteo - Student Career Platform",
    description:
      "All-in-one career development platform with AI resume builder, personalized learning paths, mock interviews, and job matching. 1k+ signups.",
    tech: ["Next.js", "TypeScript", "OpenAI", "MongoDB"],
    category: "Web",
    link: "https://byteo.vercel.app",
    github: "https://github.com/yourusername/byteo",
  },
  {
    title: "Alphahak.ai - AI Legal Services",
    description:
      "AI-powered legal platform offering document automation, legal chatbots, and simplified legal help.",
    tech: ["React", "Node.js", "OpenAI", "MongoDB"],
    category: "Web",
    link: "https://alphahak.ai",
    github: "https://github.com/yourusername/alphahak",
  },
  {
    title: "AI-Based Resume Builder (CodeX)",
    description:
      "Generates ATS-optimized resumes based on user skills and project experience.",
    tech: ["React", "GPT-4", "Tailwind", "MongoDB"],
    category: "Web",
    link: "https://resume.codex.app",
    github: "https://github.com/yourusername/resume-builder",
  },
  {
    title: "AI Job Matching Tool (Byteo)",
    description:
      "AI system that matches users to jobs based on skill alignment and role requirements.",
    tech: ["Python", "FastAPI", "OpenAI", "Vector DB"],
    category: "ML",
    link: "https://byteo.vercel.app/jobs",
    github: "https://github.com/yourusername/ai-job-matching",
  },
  {
    title: "AI Mock Interview Platform (Byteo)",
    description:
      "Simulated interviews with AI feedback and scoring based on industry patterns.",
    tech: ["LangChain", "GPT-4", "Node.js"],
    category: "ML",
    link: "https://byteo.vercel.app/interview",
    github: "https://github.com/yourusername/mock-interview",
  },
  {
    title: "AI Personalized Learning Paths (Byteo)",
    description:
      "Tailors courses to student goals using AI content curation and adaptive learning flows.",
    tech: ["React", "AI APIs", "Firebase"],
    category: "Web",
    link: "https://byteo.vercel.app/learn",
    github: "https://github.com/yourusername/learning-path",
  },
  {
    title: "AI Course Creation Tool (Byteo)",
    description:
      "Auto-generates course content with modules, quizzes, and video suggestions.",
    tech: ["Python", "OpenAI", "Supabase"],
    category: "ML",
    link: "https://byteo.vercel.app/create-course",
    github: "https://github.com/yourusername/ai-course-builder",
  },
  {
    title: "AI Portfolio Builder",
    description:
      "Interactive personal portfolio generator with AI-based layout and content population.",
    tech: ["Next.js", "Tailwind", "OpenAI"],
    category: "Web",
    link: "https://portfoliogen.ai",
    github: "https://github.com/yourusername/ai-portfolio",
  },
  {
    title: "AI Presentation Generator",
    description:
      "Instant slide deck creation from topic or bullet inputs using GPT and design templates.",
    tech: ["React", "OpenAI", "PPTGen API"],
    category: "Web",
    link: "https://aipresenter.app",
    github: "https://github.com/yourusername/presentation-generator",
  },
  {
    title: "SGGS Result Website",
    description:
      "Student result viewer with secure access and built-in CGPA calculator.",
    tech: ["MERN", "JWT", "Excel Parsing"],
    category: "Web",
    link: "https://sggsresults.app",
    github: "https://github.com/yourusername/sggs-result-site",
  },
  {
    title: "CET Study App",
    description:
      "Study platform with PCMB mock tests, topic-wise PDFs, and AI question generation. 2k+ signups.",
    tech: ["React Native", "Firebase", "GPT-3"],
    category: "App",
    link: "https://cetstudy.app",
    github: "https://github.com/yourusername/cet-study",
  },
  {
    title: "CodeX - SGGS Coding Community",
    description:
      "Community platform for coders with projects, GitHub integration, contests, and AI features.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web",
    link: "https://codex.sggs.app",
    github: "https://github.com/yourusername/codex-community",
  },
  {
    title: "Virtual Science Lab",
    description:
      "Online simulation-based science lab for engineering students with step-by-step instructions.",
    tech: ["Three.js", "React", "PhysicsJS"],
    category: "Web",
    link: "https://virtualsciencelab.app",
    github: "https://github.com/yourusername/virtual-science-lab",
  },
  {
    title: "Room Booking Platform",
    description:
      "Helps students find and book PGs and hostels near their college.",
    tech: ["MERN Stack", "Mapbox", "Firebase"],
    category: "Web",
    link: "https://roombooking.app",
    github: "https://github.com/yourusername/room-booking",
  },
  {
    title: "Zomato-like Food Delivery Platform",
    description:
      "Campus-wide food delivery app with vendor management and delivery tracking.",
    tech: ["Flutter", "Firebase", "Stripe"],
    category: "App",
    link: "https://campusfood.app",
    github: "https://github.com/yourusername/food-delivery",
  },
  {
    title: "College Multi-Vendor E-commerce",
    description:
      "Platform for students to sell/buy books, notes, services inside college campus.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web",
    link: "https://clgmarketplace.app",
    github: "https://github.com/yourusername/college-marketplace",
  },
  {
    title: "College Startup Hub (Clg StartHub)",
    description:
      "Showcase and manage student startups with profiles, updates, and mentor match.",
    tech: ["Next.js", "Firebase", "TailwindCSS"],
    category: "Web",
    link: "https://startuphubs.app",
    github: "https://github.com/yourusername/college-startup-hub",
  },
  {
    title: "Sayamvar - Community Matrimony App",
    description:
      "Community-based matrimony platform with filters, compatibility scoring, and verification.",
    tech: ["Flutter", "Firebase", "Twilio"],
    category: "App",
    link: "https://sayamvar.app",
    github: "https://github.com/yourusername/sayamvar",
  },
  {
    title: "Animated Children's History Content",
    description:
      "Fun animated content to teach history to kids via web and YouTube.",
    tech: ["React", "Lottie", "YouTube API"],
    category: "Web",
    link: "https://animatedhistory.app",
    github: "https://github.com/yourusername/animated-history",
  },
];


const ProjectCard = ({ title, description, tech, link, github }) => (
  <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300 h-full flex flex-col">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 flex-grow">{description}</p>
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
    <div className="flex justify-between gap-4 mt-auto">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
        >
          Live Demo <span className="ml-1">→</span>
        </a>
      )}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
      >
        Source Code <span className="ml-1">→</span>
      </a>
    </div>
  </div>
);

const ProjectMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {  // Changed from projects to project
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
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
        className="min-h-screen flex items-center justify-center py-20 relative"
      >
        <div className="max-w-5xl mx-auto px-4 w-full">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-flex items-center">
                <span className="text-yellow-300 text-3xl font-bold mr-2">📁</span>
                My Projects
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are some of my featured projects. Use the filters to find specific technologies.
              </p>
            </div>
          </RevealOnScroll>

          {/* Search & Filter Section */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 bg-black/80 backdrop-blur-sm z-10 py-4">
            <input
              type="text"
              placeholder="Search projects by title, description or tech..."
              className="px-4 py-2 w-full md:w-1/2 rounded-md border border-white/20 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex gap-2 flex-wrap justify-center">
              {["All", "Web", "App", "ML", "DevOps"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 rounded-full border transition-all text-sm ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white border-blue-500 shadow-md"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 mb-4">No projects found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <ProjectCard {...project} />
                </RevealOnScroll>
              ))
            )}
          </div>

          {/* GitHub Link */}
          <RevealOnScroll>
            <div className="mt-12 text-center">
              <a
                href="https://github.com/yourusername?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:gap-3 hover:border-blue-400 hover:shadow-lg bg-black/20 backdrop-blur-sm hover:bg-blue-500/10"
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