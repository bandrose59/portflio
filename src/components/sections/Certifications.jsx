import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";
import { GetInTouch } from "./GetInTouch";

const certificates = [
  {
    title: "Introduction to Kubernetes (LFS158)",
    provider: "Linux Foundation",
    link: "https://www.example.com/kubernetes-certificate",
  },
  {
    title: "NumPy, Pandas, & Python for Data Analysis",
    provider: "—",
    link: "https://www.example.com/numpy-certificate",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    provider: "Postman",
    link: "https://www.example.com/postman-certificate",
  },
  {
    title: "REST API Testing (Automation)",
    provider: "—",
    link: "https://www.example.com/rest-api-certificate",
  },
  {
    title: "PostgreSQL Bootcamp: Beginner to Advanced",
    provider: "—",
    link: "https://www.example.com/postgresql-certificate",
  },
  {
    title: "SQL for Developers & BI (MySQL)",
    provider: "—",
    link: "https://www.example.com/sql-certificate",
  },
  {
    title: "Introduction to Jenkins (LFS167)",
    provider: "Linux Foundation",
    link: "https://www.example.com/jenkins-certificate",
  },
  {
    title: "DevOps & Site Reliability Engineering (LFS162)",
    provider: "Linux Foundation",
    link: "https://www.example.com/devops-certificate",
  },
  {
    title: "Cloud Infrastructure Technologies (LFS151)",
    provider: "Linux Foundation",
    link: "https://www.example.com/cloud-certificate",
  },
  {
    title: "Exploring GraphQL: A Query Language",
    provider: "—",
    link: "https://www.example.com/graphql-certificate",
  },
  {
    title: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    link: "https://www.example.com/python-certificate",
  },
  {
    title: "Networking Basics",
    provider: "Cisco Networking Academy",
    link: "https://www.example.com/networking-certificate",
  },
  {
    title: "Git for Distributed Development",
    provider: "—",
    link: "https://www.example.com/git-certificate",
  },
  {
    title: "Introduction to Linux (LFS101)",
    provider: "Linux Foundation",
    link: "https://www.example.com/linux-certificate",
  },
  {
    title: "Generative AI for Everyone",
    provider: "DeepLearning.AI",
    link: "https://www.example.com/generative-ai-certificate",
  },
  {
    title: "AI-Python for Beginners",
    provider: "DeepLearning.AI",
    link: "https://www.example.com/ai-python-certificate",
  },
  {
    title: "ChatGPT Prompt Engineering",
    provider: "DeepLearning.AI",
    link: "https://www.example.com/chatgpt-certificate",
  },
];

const CertificateCard = ({ title, provider, link }) => (
  <div className="glass p-6 rounded-xl border  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{provider}</p>
    <div className=" justify-between gap-4 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        View →
      </a>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen mt-10  items-center justify-center py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              <span className="text-yellow-300 text-3xl font-bold mr-2 mt-30 align-middle">
                📁
              </span>
              My Certificates
            </h2>
          </RevealOnScroll>
          <div className="grid grid-rows gap-6">
            {certificates.map((certificate, index) => (
              <RevealOnScroll key={index}>
                <CertificateCard
                  title={certificate.title}
                  provider={certificate.provider}
                  link={certificate.link}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default Certifications;
