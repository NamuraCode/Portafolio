'use client';

import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export const MeshBox = () => {
  const meshRef = useRef<Group>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current!!.rotation.z += 0.0008;
      meshRef.current!!.rotation.y += 0.01;
    }
  });

  return (
    <>
      <group ref={meshRef}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </group>
    </>
  );
};
