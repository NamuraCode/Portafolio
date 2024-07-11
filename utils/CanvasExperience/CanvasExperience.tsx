"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import styles from "./CanvasExperience.module.css";

export const CanvasExperience = ({
  children,
  colorBg = "#060602",
  hasBorder,
  hasBg,
}: {
  children: React.ReactNode;
  colorBg?: string;
  hasBorder?: boolean;
  hasBg?: boolean;
}) => {
  return (
    <div className={`${styles.canvas} ${hasBorder && styles.canvasBorder}`}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={5} />
        {hasBg && <color attach="background" args={[`${colorBg}`]} />}
        <OrbitControls enableZoom={false} />
        {children}
      </Canvas>
    </div>
  );
};
