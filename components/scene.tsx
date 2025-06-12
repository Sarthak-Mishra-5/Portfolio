"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment, Float, Text3D, OrbitControls, Stars } from "@react-three/drei"
import type * as THREE from "three"
import FloatingShapes from "./floating-shapes"
import ParticleField from "./particle-field"
import InteractiveObjects from "./interactive-objects"

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />

      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff6b6b" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ecdc4" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#45b7d1" />

      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Text3D
            font="/fonts/Geist_Bold.json"
            size={1.2}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[-3, 2, 0]}
          >
            PORTFOLIO
            <meshStandardMaterial color="#ff6b6b" />
          </Text3D>
        </Float>

        <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
          <Text3D font="/fonts/Geist_Regular.json" size={0.6} height={0.1} position={[-2, 0.5, 0]}>
            Creative Developer
            <meshStandardMaterial color="#4ecdc4" />
          </Text3D>
        </Float>
      </group>

      <FloatingShapes />
      <ParticleField />
      <InteractiveObjects />

      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
    </>
  )
}
