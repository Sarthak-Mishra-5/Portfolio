// app/not-found.tsx
"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SpaceBackground from "@/components/space-background";
import { ThemeProvider } from "@/components/theme-provider";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Home, ExternalLink } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";
// Custom hook to handle client-side rendering

export default function NotFound() {
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

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
          <img src="/404.png" alt="404 Not Found" className="mb-8 w-64 h-64" />
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">Page Not Found</p>

          <Button
            variant="outline"
            // size="icon"
            className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            onClick={() => (window.location.href = "/")}
          >
            <Home className="w-6 h-6" />
            Go back home
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
