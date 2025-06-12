"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import SpaceBackground from "@/components/space-background";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import { ThemeProvider } from "@/components/theme-provider";
import * as THREE from "three";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-gray-900 dark:text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300">
        {/* 3D Space Background */}
        <div className="fixed inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
            className="absolute inset-0"
          >
            <Suspense fallback={null}>
              <SpaceBackground />
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      </div>
    </ThemeProvider>
  );
}
