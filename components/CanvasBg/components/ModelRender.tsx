"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const ModelRender = () => {
  const groupRef = useRef<Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
  });
  return (
    <group ref={groupRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <mesh position={[0, 0, 1.2]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 0, -1.2]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};
