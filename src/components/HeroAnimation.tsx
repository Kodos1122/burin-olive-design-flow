
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
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

  const glassMaterialProps = {
    color: new THREE.Color("white"),
    transmission: 1,
    roughness: 0,
    thickness: 0.2,
    ior: 1.5,
    metalness: 0,
    transparent: true,
    opacity: 0.3,
  };

  const oilMaterial = (
    <meshPhysicalMaterial
        color="#FAD550"
        transmission={0.5}
        thickness={1}
        roughness={0.1}
        ior={1.47}
        metalness={0}
    />
  );

  return (
    <group ref={group} position={[0, -1, 0]} scale={2}>
      {/* Oil inside */}
      <mesh position={[0, -0.075, 0]}>
          <cylinderGeometry args={[0.7 * 0.95, 0.7 * 0.95, 1.5 * 0.9, 64]} />
          {oilMaterial}
      </mesh>
      
      {/* Bottle Body */}
      <mesh>
        <cylinderGeometry args={[0.7, 0.7, 1.5, 64]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      {/* Bottle Shoulder */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.7, 0.5, 64]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      {/* Bottle Neck */}
      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 64]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
       {/* Cork Cap */}
       <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.28, 0.3, 0.5, 32]} />
        <meshStandardMaterial color="#b08d57" roughness={0.9} metalness={0.1} />
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
  const speed = useRef(4 + Math.random() * 2);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.position.y -= speed.current * delta;
      if (mesh.current.position.y < -5) { // When it's off-screen
        onFallen(id);
      }
    }
  });
  
  return (
    <mesh ref={mesh} position={initialPosition} scale={[0.7, 1.2, 0.7]}>
      <sphereGeometry args={[0.08, 32, 32]} />
      <meshPhysicalMaterial 
        color="#FAD550"
        transmission={0.9}
        thickness={0.5}
        roughness={0.05}
        ior={1.47} // Index of refraction for olive oil
        metalness={0}
        transparent
      />
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
                  // Position calculated to match the new bottle's tilted spout
                  position: new THREE.Vector3(2.04 + (Math.random() - 0.5) * 0.2, 1.2 + (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.2)
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
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#FFFFFF" />
            <Environment preset="city" />
            <Bottle isTilted={isTilted} onTiltComplete={handleTiltComplete} />
            {drops.map(drop => (
                <OilDrop key={drop.id} id={drop.id} initialPosition={drop.position} onFallen={handleDropFallen} />
            ))}
        </Canvas>
    );
};

export default HeroAnimation;
