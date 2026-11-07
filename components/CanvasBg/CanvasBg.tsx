"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import styles from "./CanvasBg.module.css";
import { ModelCluster } from "./components/ModelCluster";
import { Effects } from "./components";

interface Props {
  colorBg?: string;
  hasBorder?: boolean;
  hasBg?: boolean;
}

export const CanvasBg = ({ colorBg = "#060602", hasBorder, hasBg }: Props) => {
  return (
    <div className={`${styles.canvas} ${hasBorder && styles.canvasBorder}`}>
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 1]} intensity={4} color={"white"} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color={"white"} />
        {hasBg && <color attach="background" args={[`${colorBg}`]} />}
        <Suspense fallback={null}>
          <ModelCluster />
        </Suspense>
        <Effects />
      </Canvas>
    </div>
  );
};
