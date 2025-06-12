"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["C++", "JavaScript", "TypeScript", "SQL", "Solidity", "Python"],
      color: "from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800",
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "GSAP",
        "Shadcn UI",
        "Three.js",
        "Tailwind CSS",
        "REST APIs",
        "Mongoose",
      ],
      color: "from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-900",
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      skills: [
        "Git/GitHub",
        "Postman",
        "Remix IDE",
        "VS Code",
        "Chrome Dev Tools",
        "Figma",
        "Photoshop",
      ],
      color: "from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-700",
    },
    {
      title: "Databases & Platforms",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "Redis",
        "Firebase",
        "MySQL",
        "AWS",
        "DigitalOcean",
        "Microsoft Azure",
      ],
      color: "from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800",
    },
    {
      title: "Blockchain & Web3",
      icon: "⛓️",
      skills: [
        "Solidity",
        "Ganache",
        "HardHat",
        "Truffle",
        "MetaMask",
        "Polygon",
        "Smart Contracts",
      ],
      color: "from-gray-800 to-black dark:from-gray-700 dark:to-gray-900",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-600 dark:to-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with and love
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm hover:border-gray-400 dark:hover:border-gray-600/60 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`bg-gradient-to-r ${category.color} text-white border-0 hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages Progress */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Programming Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "C++", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "Python", level: 50 },
              { name: "Solidity", level: 60 },
            ].map((lang, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {lang.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {lang.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-500 dark:to-gray-300 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
