"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { MathUtils, Mesh, MeshStandardMaterial, Vector3 } from "three";
import type { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: { Logo: Mesh };
};

const ATTRACTION = 0.08;
const POINTER_FOLLOW = 0.12;
const BASE_SCALE: [number, number, number] = [0.22, 0.44, 0.11];

const tmp = new Vector3();

const MAX_BODIES = 16;

const INITIAL_BODIES = Array.from({ length: MAX_BODIES }, () => ({
  position: [
    MathUtils.randFloatSpread(8),
    MathUtils.randFloatSpread(8),
    MathUtils.randFloatSpread(4),
  ] as [number, number, number],
  rotation: [
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI,
  ] as [number, number, number],
  size: MathUtils.randFloat(0.75, 1.25),
}));

interface LogoBodyProps {
  geometry: Mesh["geometry"];
  material: MeshStandardMaterial;
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
}

const LogoBody = ({
  geometry,
  material,
  position,
  rotation,
  size,
}: LogoBodyProps) => {
  const api = useRef<RapierRigidBody>(null);

  useFrame((_, delta) => {
    const body = api.current;
    if (!body) return;
    const strength = ATTRACTION * Math.min(delta * 60, 2);
    tmp.copy(body.translation() as Vector3).negate().multiplyScalar(strength);
    body.applyImpulse(tmp, true);
  });

  return (
    <RigidBody
      ref={api}
      position={position}
      rotation={rotation}
      colliders="hull"
      linearDamping={2.5}
      angularDamping={3}
      friction={0.05}
      restitution={0}
    >
      <mesh
        geometry={geometry}
        material={material}
        scale={BASE_SCALE.map((s) => s * size) as [number, number, number]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
};

const Pointer = () => {
  const ref = useRef<RapierRigidBody>(null);
  const target = useMemo(() => new Vector3(), []);
  const current = useMemo(() => new Vector3(100, 100, 0), []);

  useFrame(({ pointer, viewport }, delta) => {
    target.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );
    const t = 1 - Math.pow(1 - POINTER_FOLLOW, delta * 60);
    current.lerp(target, t);
    ref.current?.setNextKinematicTranslation(current);
  });

  return (
    <RigidBody
      ref={ref}
      type="kinematicPosition"
      colliders={false}
      position={[100, 100, 0]}
    >
      <BallCollider args={[1.2]} />
    </RigidBody>
  );
};

export const ModelCluster = () => {
  const { nodes } = useGLTF("/assets/codeModel.glb") as unknown as GLTFResult;
  const width = useThree((state) => state.size.width);
  const count = width < 768 ? 9 : MAX_BODIES;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#fafafa",
        roughness: 0.2,
        metalness: 0.7,
      }),
    []
  );

  const bodies = INITIAL_BODIES.slice(0, count);

  return (
    <Physics gravity={[0, 0, 0]}>
      <Pointer />
      {bodies.map((props, index) => (
        <LogoBody
          key={index}
          geometry={nodes.Logo.geometry}
          material={material}
          {...props}
        />
      ))}
    </Physics>
  );
};

useGLTF.preload("/assets/codeModel.glb");
