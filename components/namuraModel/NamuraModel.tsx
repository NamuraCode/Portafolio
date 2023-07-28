import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MeshBox } from './MeshBox';
import styles from '@/styles/NamuraModel.module.css';

export const NamuraModel = () => {
  
  return (
    <article className={styles['namura-model']}>
      <Canvas className={styles['model-scene']} camera={{ position: [0, 0, 1] }}>
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          enableZoom={false}
          enablePan={false}
        />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <MeshBox  />
      </Canvas>
    </article>
  );
};
