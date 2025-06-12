"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Loading Experience</h1>
          <p className="text-white/60">Preparing 3D environment...</p>
        </div>

        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-white/80 font-mono">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
