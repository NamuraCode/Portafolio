"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Mesh } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    Logo: Mesh;
    Placa: Mesh;
    Borde: Mesh;
  };
  materials: {};
};

export const ModelRender = () => {
  const groupRef = useRef<Group>(null);
  const camera = useThree((state) => state.camera);
  const { nodes } = useGLTF("/assets/codeModel.glb") as unknown as GLTFResult;
  const materialMetal = (
    <meshStandardMaterial
      attach="material"
      color="#fafafa"
      roughness={0.2}
      metalness={0.7}
    />
  );
  useFrame((state) => {
    if (!groupRef.current) return;
    camera.lookAt(groupRef.current.position);
    groupRef.current.rotation.y = state.clock.getElapsedTime() / 2;
  });
  return (
    <group ref={groupRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo.geometry}
        material={nodes.Logo.material}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.4, 0.8, 0.2]}
      >
        {materialMetal}
      </mesh>
    </group>
  );
};
