import React from "react";
import MatrixRain from "../components/MatrixRain";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project",
    technologies: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/placeholder.svg",
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    description: "Description of your second project",
    technologies: ["Node.js", "Express", "MongoDB"],
    imageUrl: "/placeholder.svg",
    link: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-black text-white">
      <MatrixRain />
      
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-matrix-green/10 text-matrix-green rounded-full text-sm mb-4">
            Fun Fact
          </span>
          <h1 className="text-4xl md:text-6xl font-mono text-matrix-green mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The Matrix-style rain above actually contains a Japanese sushi recipe! 
            Can you spot the characters for rice (米), vinegar (酢), and seaweed (海苔)?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400">
        <p>© {new Date().getFullYear()} Your Name - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Index;