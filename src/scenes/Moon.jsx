import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function Moon() {
  const moonRef = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/moon.jpg"
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (moonRef.current) {
      moonRef.current.rotation.y = t * 0.04;

      moonRef.current.position.y =
        Math.sin(t * 0.4) * 0.06;
    }

    if (portraitRef.current) {
      const portraitFloatX =
        Math.sin(time * 1.1) * 12;

      const portraitFloatY =
        Math.cos(time * 1.7) * 8;

      portraitRef.current.style.transform = `
        translate3d(
          ${currentX * 0.12 + portraitFloatX}px,
          ${currentY * 0.12 + portraitFloatY}px,
          0
        )
        scale(1.01)
        rotate(${currentX * 0.002}deg)
      `;
    }
  });

  return (
    <group position={[4.2, 0.4, -2]}>
      {/* Main Moon */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[1.9, 128, 128]} />

        <meshStandardMaterial
          map={texture}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Blue Atmospheric Glow */}
      <mesh position={[0, 0, -0.4]}>
        <sphereGeometry args={[2.35, 64, 64]} />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}