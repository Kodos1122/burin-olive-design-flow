
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Bottle = ({ isTilted, onTiltComplete }: { isTilted: boolean; onTiltComplete: () => void; }) => {
  const group = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (group.current) {
      const targetRotationZ = isTilted ? -Math.PI / 4 : 0;
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetRotationZ, 0.05);

      if (isTilted && !(group.current.userData.tiltCompleted) && Math.abs(group.current.rotation.z - targetRotationZ) < 0.02) {
        group.current.userData.tiltCompleted = true;
        onTiltComplete();
      }

      if (!isTilted) {
        group.current.userData.tiltCompleted = false;
      }
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]} scale={1.2}>
      {/* Bottle Body */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.6, 2.5, 32]} />
        <meshStandardMaterial color="#1A3326" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Bottle Shoulder */}
      <mesh position={[0, 1.25, 0]}>
        <coneGeometry args={[0.6, 0.5, 32]} />
         <meshStandardMaterial color="#1A3326" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Bottle Neck */}
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.5, 32]} />
        <meshStandardMaterial color="#1A3326" roughness={0.3} metalness={0.2} />
      </mesh>
       {/* Cap */}
       <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.2, 32]} />
        <meshStandardMaterial color="#B08D57" roughness={0.4} metalness={0.8} />
      </mesh>
    </group>
  );
};

interface OilDropProps {
  id: number;
  initialPosition: THREE.Vector3;
  onFallen: (id: number) => void;
}

const OilDrop = ({ id, initialPosition, onFallen }: OilDropProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.position.y -= 4 * delta;
      if (mesh.current.position.y < -5) { // When it's off-screen
        onFallen(id);
      }
    }
  });
  
  return (
    <mesh ref={mesh} position={initialPosition}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial color="#FAD550" emissive="#D4AF37" roughness={0.1} metalness={0.5} transparent opacity={0.9} />
    </mesh>
  );
};


const HeroAnimation = () => {
    const [isTilted, setIsTilted] = useState(false);
    const [drops, setDrops] = useState<{ id: number; position: THREE.Vector3; }[]>([]);
    
    useEffect(() => {
        const tiltTimer = setTimeout(() => setIsTilted(true), 500);
        return () => clearTimeout(tiltTimer);
    }, []);

    const handleTiltComplete = () => {
        let dropCount = 0;
        const dropInterval = setInterval(() => {
            if (dropCount < 7) {
                const newDrop = { 
                  id: Date.now() + Math.random(), 
                  position: new THREE.Vector3(-1.6 + (Math.random() - 0.5) * 0.2, 1.0 + (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2)
                };
                setDrops(prev => [...prev, newDrop]);
                dropCount++;
            } else {
                clearInterval(dropInterval);
                const tiltBackTimer = setTimeout(() => setIsTilted(false), 2000); // Tilt back
                return () => clearTimeout(tiltBackTimer);
            }
        }, 150);
        return () => clearInterval(dropInterval);
    };

    const handleDropFallen = (id: number) => {
      setDrops(prev => prev.filter(d => d.id !== id));
    }
    
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#FFD700" />
            <directionalLight position={[-5, -5, -5]} intensity={1} color="#FFFFFF" />
            <Bottle isTilted={isTilted} onTiltComplete={handleTiltComplete} />
            {drops.map(drop => (
                <OilDrop key={drop.id} id={drop.id} initialPosition={drop.position} onFallen={handleDropFallen} />
            ))}
        </Canvas>
    );
};

export default HeroAnimation;
