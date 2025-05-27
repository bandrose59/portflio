export const About = () => {
  const techStack = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "React Native",
  ];

  const toolsAndPlatforms = [
    "MongoDB",
    "PostgreSQL (Neon)",
    "SQLite",
    "Supabase",
    "Firebase",
    "Redis",
    "GraphQL",
    "Git",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS (EC2, S3, IAM)",
    "Linux",
    "Bash",
    "Figma",
    "Webflow",
    "Framer",
  ];

  const csFundamentals = [
    "Java",
    "C",
    "DBMS",
    "OS",
    "CN",
    "OOP",
    "LLD",
    "Cypress",
    "Jest",
  ];

  return (
    <section
      id="about"
      className="mt-10 md:mt-20 py-20 px-4 md:px-10 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          <span className="text-yellow-300 text-3xl font-bold mr-2 align-middle">
            🙋
          </span>
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 transition hover:-translate-y-1">
          <p className="mb-6 text-gray-300">
            I’m a 3rd-year Information Technology student with hands-on
            experience working with 10+ clients on web and mobile app projects.
            Skilled in React, Node.js, and cloud platforms, I build reliable and
            user-friendly applications. I’m eager to apply my skills to
            real-world challenges and motivated to deliver impactful solutions.
          </p>

          {/* Grid for Tech Stack, Tools, and CS Fundamentals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Tech Stack */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4">🚀 Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4">💾 Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {toolsAndPlatforms.map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CS Fundamentals */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
              <h3 className="text-xl font-bold mb-4">🧠 CS Fundamentals</h3>
              <div className="flex flex-wrap gap-2">
                {csFundamentals.map((item, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education Section */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech (Information Technology)</strong> - Shri Guru
                  Gobind Singhji Institute of Engg and Technology, Nanded (4th
                  Sem - 7.3 CGPA)
                </li>
                <li>
                  <strong>Coursework:</strong> Data Structures, Java, C++, C,
                  Database Management, Operating System, Computer Network,
                  Object-Oriented Programming
                </li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">👨🏻‍💻 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Software Engineer - Company</h4>
                  <p className="mb-2 p-3">
                    Developed and maintained web applications using React and
                    Node.js, improving user experience and performance.
                    Collaborated with cross-functional teams to deliver projects
                    on time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Contributor - GSSOC</h4>
                  <p className="mb-2 p-3">
                    Contributed to open-source projects by fixing bugs and
                    adding features. Participated in community discussions and
                    code reviews to enhance project quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
