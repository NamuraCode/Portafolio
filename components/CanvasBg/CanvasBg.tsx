"use client";

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import styles from './CanvasBg.module.css'
import { ModelRender } from './components/ModelRender'

interface Props {
    colorBg?: string
    hasBorder?: boolean
    hasBg?: boolean
}

export const CanvasBg = ({ colorBg = "#060602", hasBorder, hasBg }: Props) => {
  return (
    <div className={`${styles.canvas} ${hasBorder && styles.canvasBorder}`}>
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={5} />
          {hasBg && <color attach="background" args={[`${colorBg}`]} />}
          <OrbitControls enableZoom={false} />
          <ModelRender />
        </Canvas>
      </div>
  )
}
