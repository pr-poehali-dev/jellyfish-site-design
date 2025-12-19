import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Jellyfish3DProps {
  position?: [number, number, number];
}

const Jellyfish3D = ({ position = [0, 0, 0] }: Jellyfish3DProps) => {
  const jellyfishRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const tentacleRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (jellyfishRef.current) {
      jellyfishRef.current.rotation.y += 0.005;
      jellyfishRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }

    if (bodyRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      bodyRef.current.scale.set(scale, scale * 0.9, scale);
    }

    tentacleRefs.current.forEach((tentacle, i) => {
      if (tentacle) {
        const offset = i * 0.3;
        tentacle.rotation.z = Math.sin(state.clock.elapsedTime + offset) * 0.15;
        tentacle.position.y = Math.sin(state.clock.elapsedTime * 2 + offset) * 0.1;
      }
    });
  });

  const createTentacles = () => {
    const tentacles = [];
    const numTentacles = 8;
    const radius = 0.8;

    for (let i = 0; i < numTentacles; i++) {
      const angle = (i / numTentacles) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      tentacles.push(
        <mesh
          key={i}
          position={[x, -1.2, z]}
          ref={(el) => {
            if (el) tentacleRefs.current[i] = el;
          }}
        >
          <cylinderGeometry args={[0.08, 0.02, 2, 8]} />
          <meshPhongMaterial
            color="#06B6D4"
            transparent
            opacity={0.6}
            emissive="#0EA5E9"
            emissiveIntensity={0.3}
          />
        </mesh>
      );
    }
    return tentacles;
  };

  return (
    <group ref={jellyfishRef} position={position}>
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <Sphere args={[1, 32, 32]}>
          <MeshDistortMaterial
            color="#0EA5E9"
            transparent
            opacity={0.7}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.1}
            emissive="#06B6D4"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </mesh>

      <mesh position={[0, 0.3, 0]} scale={[0.7, 0.5, 0.7]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color="#8B5CF6"
          transparent
          opacity={0.4}
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
        />
      </mesh>

      {createTentacles()}

      <pointLight position={[0, 0, 0]} intensity={2} distance={5} color="#0EA5E9" />
    </group>
  );
};

export default Jellyfish3D;
