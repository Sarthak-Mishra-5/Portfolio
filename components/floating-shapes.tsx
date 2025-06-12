"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShape({
  position,
  color,
  shape,
}: { position: [number, number, number]; color: string; shape: "box" | "sphere" | "torus" }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  const geometry = {
    box: <boxGeometry args={[0.5, 0.5, 0.5]} />,
    sphere: <sphereGeometry args={[0.3, 32, 32]} />,
    torus: <torusGeometry args={[0.3, 0.1, 16, 100]} />,
  }

  return (
    <Float speed={Math.random() * 2 + 1} rotationIntensity={Math.random() * 2} floatIntensity={Math.random() * 2}>
      <mesh ref={meshRef} position={position}>
        {geometry[shape]}
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function FloatingShapes() {
  const shapes = [
    { position: [4, 3, -2], color: "#ff6b6b", shape: "box" as const },
    { position: [-4, -2, -3], color: "#4ecdc4", shape: "sphere" as const },
    { position: [3, -3, -1], color: "#45b7d1", shape: "torus" as const },
    { position: [-3, 3, -4], color: "#96ceb4", shape: "box" as const },
    { position: [5, 0, -2], color: "#feca57", shape: "sphere" as const },
    { position: [-5, 1, -3], color: "#ff9ff3", shape: "torus" as const },
  ]

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  )
}
