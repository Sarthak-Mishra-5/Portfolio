"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function UI() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const sections = [
    {
      title: "About",
      content: "Creative developer passionate about immersive web experiences and cutting-edge technology.",
    },
    {
      title: "Skills",
      content: "React, Three.js, WebGL, TypeScript, Next.js, Blender, Creative Coding",
    },
    {
      title: "Projects",
      content: "Interactive installations, 3D web experiences, generative art, and experimental interfaces.",
    },
    {
      title: "Contact",
      content: "Let's create something amazing together!",
    },
  ]

  return (
    <div
      className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Navigation */}
      <nav className="absolute top-6 left-6 pointer-events-auto">
        <div className="flex gap-2">
          {sections.map((section, index) => (
            <Button
              key={index}
              variant={currentSection === index ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentSection(index)}
              className="backdrop-blur-md bg-black/20 border-white/20 text-white hover:bg-white/20"
            >
              {section.title}
            </Button>
          ))}
        </div>
      </nav>

      {/* Social Links */}
      <div className="absolute top-6 right-6 pointer-events-auto">
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            className="backdrop-blur-md bg-black/20 border-white/20 text-white hover:bg-white/20"
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="backdrop-blur-md bg-black/20 border-white/20 text-white hover:bg-white/20"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="backdrop-blur-md bg-black/20 border-white/20 text-white hover:bg-white/20"
          >
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content Panel */}
      <div className="absolute bottom-6 left-6 right-6 pointer-events-auto">
        <Card className="backdrop-blur-md bg-black/20 border-white/20 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{sections[currentSection].title}</h2>
              <Badge variant="outline" className="border-white/20 text-white">
                {currentSection + 1} / {sections.length}
              </Badge>
            </div>
            <p className="text-white/80 mb-4">{sections[currentSection].content}</p>

            {currentSection === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {["Cosmic Explorer", "Neural Network Viz", "Particle Symphony"].map((project, index) => (
                  <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-white mb-2">{project}</h3>
                      <p className="text-white/70 text-sm mb-3">Interactive 3D experience</p>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/20">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {currentSection === 3 && (
              <div className="flex gap-4 mt-4">
                <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/20">
                  Download CV
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Progress Indicator */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-auto">
        <div className="flex flex-col gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? "bg-gradient-to-b from-pink-500 to-violet-500"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
