"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-600 dark:to-gray-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent text-2xl font-bold">
                Hola Amigos
              </span>
              , I'm Sarthak Mishra, a developer and problem-solver pursuing
              Mathematics and Scientific Computing at NIT Hamirpur.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I enjoy building full-stack web applications that are intuitive,
              scalable, and performance-driven. With a strong foundation in
              logic and design, I love turning ideas into functional,
              user-friendly products.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm also deeply passionate about algorithms and competitive
              programming, always striving to write clean, efficient code that
              solves real-world problems.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-gray-700 dark:text-gray-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Frontend Development
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  React.js, JavaScript, TypeScript, Bootstrap, Tailwind CSS -
                  Creating responsive and interactive user interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-gray-700 dark:text-gray-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Backend Development
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Next.js, Node.js, Express.js, MongoDB, MySQL - Building robust
                  APIs and database architectures.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-gray-700 dark:text-gray-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Problem Solving
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  C++, Data Structures, Algorithms, Competitive Programming -
                  Optimizing solutions for efficiency.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
}
