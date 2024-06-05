"use client";

import { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Model = () => {
  const modelRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y = state.clock.getElapsedTime() / 2;
    modelRef.current.rotation.x = state.clock.getElapsedTime() / 3;
    modelRef.current.rotation.z = state.clock.getElapsedTime() / 3;
  });

  return (
    <mesh ref={modelRef}>
      <boxGeometry />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};
