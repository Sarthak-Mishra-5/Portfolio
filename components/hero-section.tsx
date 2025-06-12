"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = " Developer | Designer | Problem Solver";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="text-center z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="rejouice bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-gray-100 dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Sarthak Mishra
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Mathematics and Scientific Computing student at NIT Hamirpur
          passionate about building scalable web applications and solving
          complex algorithmic challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:from-gray-700 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-800 text-white px-8 py-3 border border-gray-600"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white px-8 py-3"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() =>
              window.open("https://github.com/sarthak-mishra-5", "_blank")
            }
          >
            <Github className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sarthakmishra8/",
                "_blank"
              )
            }
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() =>
              window.open("mailto:sarthakm890@gmail.com", "_blank")
            }
          >
            <Mail className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() =>
              window.open("https://leetcode.com/sarthakkm", "_blank")
            }
          >
            <ExternalLink className="w-6 h-6" />
          </Button>
        </div>

        <Button
          variant="ghost"
          onClick={scrollToAbout}
          className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </Button>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gray-500 dark:bg-gray-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-700 dark:bg-gray-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full animate-ping"></div>
      </div>
    </section>
  );
}
