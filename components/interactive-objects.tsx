"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function InteractiveOrb({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.y += 0.02

      const scale = hovered ? 1.2 : clicked ? 0.8 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
      >
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial
          color={hovered ? "#ff6b6b" : "#4ecdc4"}
          metalness={0.9}
          roughness={0.1}
          emissive={hovered ? "#ff6b6b" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
    </Float>
  )
}

export default function InteractiveObjects() {
  const positions: [number, number, number][] = [
    [2, 1, 1],
    [-2, -1, 2],
    [0, 2, -1],
    [3, -2, 0],
  ]

  return (
    <>
      {positions.map((position, index) => (
        <InteractiveOrb key={index} position={position} />
      ))}
    </>
  )
}
