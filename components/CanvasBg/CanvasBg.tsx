"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import styles from "./CanvasBg.module.css";
import { ModelRender } from "./components/ModelRender";
import { TextBg } from "./components";
import { Effects } from "./components";

interface Props {
  colorBg?: string;
  hasBorder?: boolean;
  hasBg?: boolean;
}

export const CanvasBg = ({ colorBg = "#060602", hasBorder, hasBg }: Props) => {
  return (
    <div className={`${styles.canvas} ${hasBorder && styles.canvasBorder}`}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 1]} intensity={1} color={"white"} />
        {hasBg && <color attach="background" args={[`${colorBg}`]} />}
        <OrbitControls enableZoom={false} enablePan={false} />
        <ModelRender />
        <Effects />
      </Canvas>
      <TextBg />
    </div>
  );
};
