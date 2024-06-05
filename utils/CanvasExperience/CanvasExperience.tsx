"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import styles from "./CanvasExperience.module.css";

export const CanvasExperience = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.canvas}>
      <Canvas camera={{ position: [0, 0, 2]}}>
        <ambientLight intensity={5} />
        <color attach="background" args={["#020D19"]} />
        <OrbitControls enableZoom={false}  />
          {children}
      </Canvas>
    </div>
  );
};
