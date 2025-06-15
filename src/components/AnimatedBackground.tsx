
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

function Bubbles({ count = 150 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => {
      const scale = 0.1 + Math.random() * 0.2;
      return {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width,
          (Math.random() - 0.5) * viewport.height,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          0.1 + Math.random() * 0.1, // Move upwards
          0
        ),
        scale: scale,
      };
    });
  }, [count, viewport.width, viewport.height]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    const boundaryY = viewport.height / 2;

    particles.forEach((particle, i) => {
      // Update position
      particle.position.y += particle.velocity.y * delta * 10;
      particle.position.x += particle.velocity.x * delta * 10;


      // Reset particle if it goes off screen
      if (particle.position.y > boundaryY + particle.scale) {
        particle.position.y = -boundaryY - particle.scale;
        particle.position.x = (Math.random() - 0.5) * viewport.width;
      }

      dummy.position.copy(particle.position);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial
        color="#FAD550"
        emissive="#B8860B"
        roughness={0.1}
        metalness={0.1}
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

const AnimatedBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 10, 10]} intensity={0.8} color="#FFD700" />
        <Bubbles />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
