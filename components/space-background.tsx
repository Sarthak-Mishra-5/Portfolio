"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

function Planet({
  position,
  color,
  size,
  rotationSpeed = 0.005,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.05}
        />
        {size > 0.8 && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[size * 1.2, size * 1.5, 32]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}
      </mesh>
    </Float>
  );
}

function Asteroid({
  position,
  size = 0.3,
  isDark,
}: {
  position: [number, number, number];
  size?: number;
  isDark: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z += 0.008;
    }
  });

  const asteroidColor = isDark ? "#6B7280" : "#9CA3AF";
  const emissiveColor = isDark ? "#374151" : "#6B7280";

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[size]} />
        <meshStandardMaterial
          color={asteroidColor}
          metalness={0.9}
          roughness={0.2}
          emissive={emissiveColor}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Comet({
  position,
  isDark,
}: {
  position: [number, number, number];
  isDark: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x += 0.02;
      groupRef.current.position.y += 0.01;

      if (groupRef.current.position.x > 20) {
        groupRef.current.position.x = -20;
        groupRef.current.position.y = position[1];
      }
    }
  });

  const cometColor = isDark ? "#F3F4F6" : "#9CA3AF";
  const trailColor = isDark ? "#D1D5DB" : "#6B7280";

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={cometColor} />
      </mesh>
      <mesh position={[-0.5, 0, 0]}>
        <coneGeometry args={[0.05, 1, 8]} />
        <meshBasicMaterial color={trailColor} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function SpaceStation({
  position,
  isDark,
}: {
  position: [number, number, number];
  isDark: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const mainColor = isDark ? "#374151" : "#9CA3AF";
  const ringColor = isDark ? "#6B7280" : "#D1D5DB";
  const panelColor = isDark ? "#111827" : "#6B7280";

  return (
    <Float speed={0.2} rotationIntensity={0.1} floatIntensity={0.05}>
      <group ref={groupRef} position={position}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
          <meshStandardMaterial
            color={mainColor}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.05, 8, 16]} />
          <meshStandardMaterial
            color={ringColor}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[0.1, 0.6, 0.4]} />
          <meshStandardMaterial
            color={panelColor}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>
        <mesh position={[-0.8, 0, 0]}>
          <boxGeometry args={[0.1, 0.6, 0.4]} />
          <meshStandardMaterial
            color={panelColor}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}

function NebulaCloud({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const cloudRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.z += 0.001;
      cloudRef.current.material.opacity =
        0.05 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <mesh ref={cloudRef} position={position}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function FloatingCrystals({
  position,
  isDark,
}: {
  position: [number, number, number];
  isDark: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  const crystalColors = isDark
    ? ["#9CA3AF", "#6B7280", "#4B5563"]
    : ["#D1D5DB", "#9CA3AF", "#6B7280"];

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            position={[Math.cos(i * 2) * 0.5, 0, Math.sin(i * 2) * 0.5]}
          >
            <octahedronGeometry args={[0.2]} />
            <meshStandardMaterial
              color={crystalColors[i]}
              metalness={0.9}
              roughness={0.1}
              emissive={crystalColors[i]}
              emissiveIntensity={0.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function SpaceBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const planets = useMemo(
    () => [
      {
        position: [-12, 4, -15],
        color: isDark ? "#6B7280" : "#D1D5DB",
        size: 1.5,
        rotationSpeed: 0.003,
      },
      {
        position: [15, -3, -20],
        color: isDark ? "#4B5563" : "#9CA3AF",
        size: 1.0,
        rotationSpeed: 0.005,
      },
      {
        position: [-8, -6, -12],
        color: isDark ? "#9CA3AF" : "#F3F4F6",
        size: 0.8,
        rotationSpeed: 0.007,
      },
      {
        position: [12, 5, -25],
        color: isDark ? "#374151" : "#9CA3AF",
        size: 1.2,
        rotationSpeed: 0.004,
      },
      {
        position: [-15, 2, -18],
        color: isDark ? "#D1D5DB" : "#F9FAFB",
        size: 0.6,
        rotationSpeed: 0.008,
      },
    ],
    [isDark]
  );

  const asteroids = useMemo(
    () => [
      { position: [8, 6, -8], size: 0.3 },
      { position: [-5, 3, -10], size: 0.25 },
      { position: [12, -4, -15], size: 0.4 },
      { position: [-10, -2, -12], size: 0.2 },
      { position: [6, -6, -9], size: 0.35 },
      { position: [-12, 5, -14], size: 0.3 },
    ],
    []
  );

  const comets = useMemo(
    () => [
      { position: [-20, 8, -10] },
      { position: [-20, -5, -15] },
      { position: [-20, 2, -8] },
    ],
    []
  );

  const spaceStations = useMemo(
    () => [{ position: [10, 8, -12] }, { position: [-14, -4, -16] }],
    []
  );

  const nebulaClouds = useMemo(
    () => [
      { position: [-20, 10, -30], color: isDark ? "#374151" : "#E5E7EB" },
      { position: [25, -8, -35], color: isDark ? "#4B5563" : "#D1D5DB" },
      { position: [-10, -15, -25], color: isDark ? "#6B7280" : "#F3F4F6" },
    ],
    [isDark]
  );

  const crystalClusters = useMemo(
    () => [
      { position: [7, 2, -6] },
      { position: [-9, -3, -8] },
      { position: [4, -5, -7] },
    ],
    []
  );

  const ambientColor = isDark ? "#374151" : "#9CA3AF";
  const directionalColor = isDark ? "#F3F4F6" : "#6B7280";
  const pointLight1Color = isDark ? "#9CA3AF" : "#D1D5DB";
  const pointLight2Color = isDark ? "#6B7280" : "#9CA3AF";
  const pointLight3Color = isDark ? "#D1D5DB" : "#F3F4F6";
  const pointLight4Color = isDark ? "#4B5563" : "#9CA3AF";
  const fogColor = isDark ? "#111827" : "#F9FAFB";

  return (
    <>
      <ambientLight intensity={isDark ? 0.1 : 0.2} color={ambientColor} />
      <directionalLight
        position={[20, 20, 20]}
        intensity={isDark ? 0.6 : 0.4}
        color={directionalColor}
        castShadow
      />
      <pointLight
        position={[15, 15, 15]}
        intensity={isDark ? 0.4 : 0.3}
        color={pointLight1Color}
        distance={30}
      />
      <pointLight
        position={[-15, -15, -15]}
        intensity={isDark ? 0.3 : 0.2}
        color={pointLight2Color}
        distance={25}
      />
      <pointLight
        position={[0, 20, -10]}
        intensity={isDark ? 0.3 : 0.2}
        color={pointLight3Color}
        distance={20}
      />
      <pointLight
        position={[10, -10, 5]}
        intensity={isDark ? 0.2 : 0.15}
        color={pointLight4Color}
        distance={15}
      />

      <Stars
        radius={300}
        depth={80}
        count={8000}
        factor={6}
        saturation={0}
        fade
        speed={0.5}
      />
      <Stars
        radius={150}
        depth={40}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />
      <Stars
        radius={500}
        depth={120}
        count={12000}
        factor={8}
        saturation={0}
        fade
        speed={0.7}
      />

      {nebulaClouds.map((cloud, index) => (
        <NebulaCloud
          key={index}
          {...cloud}
          position={cloud.position as [number, number, number]}
        />
      ))}

      {planets.map((planet, index) => (
        <Planet
          key={index}
          {...planet}
          position={planet.position as [number, number, number]}
        />
      ))}

      {asteroids.map((asteroid, index) => (
        <Asteroid
          key={index}
          {...asteroid}
          position={asteroid.position as [number, number, number]}
          isDark={isDark}
        />
      ))}

      {comets.map((comet, index) => (
        <Comet
          key={index}
          position={comet.position as [number, number, number]}
          isDark={isDark}
        />
      ))}

      {spaceStations.map((station, index) => (
        <SpaceStation
          key={index}
          position={station.position as [number, number, number]}
          isDark={isDark}
        />
      ))}

      {crystalClusters.map((cluster, index) => (
        <FloatingCrystals
          key={index}
          position={cluster.position as [number, number, number]}
          isDark={isDark}
        />
      ))}

      <fog attach="fog" args={[fogColor, 30, 100]} />
    </>
  );
}
