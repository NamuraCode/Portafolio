"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {
  CapsuleCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import {
  Euler,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  Quaternion,
  Vector3,
} from "three";
import type { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: { Logo: Mesh };
};

const ATTRACTION = 0.08;
const POINTER_FOLLOW = 0.12;
const BASE_SCALE: [number, number, number] = [0.32, 0.64, 0.16];

const UPRIGHT_STRENGTH = 0.02;

const tmp = new Vector3();
const currentRotation = new Quaternion();
const rotationError = new Quaternion();

const BODY_COUNT = 10;
const UPRIGHT: [number, number, number] = [Math.PI, 0, Math.PI];
const UPRIGHT_QUATERNION = new Quaternion().setFromEuler(new Euler(...UPRIGHT));
const FRONT_TARGET = new Vector3(0, 0, 0.8);
const BACK_TARGET = new Vector3(0, 0, 0);

interface BodyConfig {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  target: Vector3;
  upright: boolean;
}

const INITIAL_BODIES: BodyConfig[] = [
  {
    position: [0, 0, FRONT_TARGET.z],
    rotation: UPRIGHT,
    size: 1.1,
    target: FRONT_TARGET,
    upright: true,
  },
  ...Array.from({ length: BODY_COUNT - 1 }, () => ({
    position: [
      MathUtils.randFloatSpread(6),
      MathUtils.randFloatSpread(6),
      MathUtils.randFloatSpread(3),
    ] as [number, number, number],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ] as [number, number, number],
    size: MathUtils.randFloat(0.85, 1),
    target: BACK_TARGET,
    upright: false,
  })),
];

interface LogoBodyProps extends BodyConfig {
  geometry: Mesh["geometry"];
  material: MeshStandardMaterial;
}

const LogoBody = ({
  geometry,
  material,
  position,
  rotation,
  size,
  target,
  upright,
}: LogoBodyProps) => {
  const api = useRef<RapierRigidBody>(null);

  useFrame((_, delta) => {
    const body = api.current;
    if (!body) return;
    const strength = ATTRACTION * Math.min(delta * 60, 2);
    tmp
      .copy(target)
      .sub(body.translation() as Vector3)
      .multiplyScalar(strength);
    body.applyImpulse(tmp, true);

    if (upright) {
      const q = body.rotation();
      currentRotation.set(q.x, q.y, q.z, q.w);
      rotationError
        .copy(UPRIGHT_QUATERNION)
        .multiply(currentRotation.invert());
      if (rotationError.w < 0) {
        rotationError.set(
          -rotationError.x,
          -rotationError.y,
          -rotationError.z,
          -rotationError.w
        );
      }
      const angle = 2 * Math.acos(Math.min(1, rotationError.w));
      const sin = Math.sqrt(1 - rotationError.w * rotationError.w);
      if (sin > 1e-4) {
        tmp
          .set(rotationError.x / sin, rotationError.y / sin, rotationError.z / sin)
          .multiplyScalar(angle * UPRIGHT_STRENGTH * Math.min(delta * 60, 2));
        body.applyTorqueImpulse(tmp, true);
      }
    }
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
      rotation={[Math.PI / 2, 0, 0]}
    >
      <CapsuleCollider args={[2.5, 1.1]} />
    </RigidBody>
  );
};

export const ModelCluster = () => {
  const { nodes } = useGLTF("/assets/codeModel.glb") as unknown as GLTFResult;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#fafafa",
        roughness: 0.2,
        metalness: 0.7,
      }),
    []
  );

  return (
    <Physics gravity={[0, 0, 0]}>
      <Pointer />
      {INITIAL_BODIES.map((props, index) => (
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
