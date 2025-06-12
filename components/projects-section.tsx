"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Paradox Event",
      description:
        "An interactive puzzle platform for the Paradox gaming event, where participants advanced by solving logic challenges with hints. Top scorers moved to a more complex final round.",
      image: "/Project Images/paradox16-9.png?aspectRatio=16/9",
      tech: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "MongoDB",
        "DigitalOcean",
        "Figma",
      ],
      github: "",
      demo: "https://www.figma.com/design/dYxNpSR0aiPCqNaeMNV6lB/Figma-Designs?node-id=44-60&p=f&t=t771mhl25Q0PNLNG-0", // This links to design/demo
    },
    {
      title: "HarvestBerg Solutions",
      description:
        "A blockchain and machine learning-powered agri-tech solution bringing transparency, traceability, and smart decision-making to the agricultural supply chain.",
      image: "/Project Images/harvestberg.png?aspectRatio=16/9",
      tech: [
        "Solidity",
        "Polygon",
        "MetaMask",
        "Next.js",
        "TypeScript",
        "Python",
      ],
      github: "https://github.com/Sarthak-Mishra-5/Harvestberg-Solutions",
      demo: "#",
    },
    {
      title: "parkकर - Smart Parking",
      description:
        "A smart parking platform that lets users easily find, book, and manage parking spaces in real time with advanced OpenCV-powered slot detection technology.",
      image: "/Project Images/parkkar.png?height=200&width=300",
      tech: [
        "Pug",
        "CSS",
        "Node.js",
        "MongoDB",
        "Mapbox",
        "Socket.IO",
        "OpenCV",
      ],
      github: "https://github.com/Sarthak-Mishra-5/park.kar",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-600 dark:to-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Some of my recent work and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm hover:border-gray-400 dark:hover:border-gray-600/60 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="rejouice text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.title === "Paradox Event" && project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-black/90"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Design
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
