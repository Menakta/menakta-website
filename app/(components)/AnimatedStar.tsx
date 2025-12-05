"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarProps {
  size?: number;
}

function createStarGeometry(outerRadius: number, innerRadius: number, points: number): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const angleStep = Math.PI / points;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = i * angleStep - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath();

  const extrudeSettings = {
    depth: outerRadius * 0.4,
    bevelEnabled: true,
    bevelThickness: outerRadius * 0.08,
    bevelSize: outerRadius * 0.08,
    bevelSegments: 3,
  };

  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

function Star({ size = 1 }: StarProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => createStarGeometry(size, size * 0.4, 5), [size]);

  const gradientShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uPink: { value: new THREE.Color("#EC4899") },
        uPurple: { value: new THREE.Color("#8B5CF6") },
        uMagenta: { value: new THREE.Color("#D946EF") },
        uViolet: { value: new THREE.Color("#7C3AED") },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uPink;
        uniform vec3 uPurple;
        uniform vec3 uMagenta;
        uniform vec3 uViolet;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        void main() {
          // Create gradient based on position
          float gradientY = (vPosition.y + 1.0) * 0.5;
          float gradientX = (vPosition.x + 1.0) * 0.5;

          // Animate the gradient
          float animatedGradient = gradientY + sin(uTime * 0.6) * 0.2;
          animatedGradient = clamp(animatedGradient, 0.0, 1.0);

          // Create smooth gradient from pink to purple
          vec3 gradient = mix(uPink, uPurple, animatedGradient);

          // Add magenta highlights
          float highlight = sin(gradientX * 3.14159) * sin(gradientY * 3.14159);
          gradient = mix(gradient, uMagenta, highlight * 0.4);

          // Add violet in darker areas
          float depth = (vPosition.z + 1.0) * 0.5;
          gradient = mix(gradient, uViolet, (1.0 - depth) * 0.3);

          // Fresnel edge glow
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.5);
          gradient += fresnel * uMagenta * 0.5;

          // Subtle specular highlight
          vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
          float spec = pow(max(dot(reflect(-lightDir, vNormal), viewDir), 0.0), 24.0);
          gradient += spec * 0.5;

          gl_FragColor = vec4(gradient, 1.0);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous rotation
    meshRef.current.rotation.x += 0.004;
    meshRef.current.rotation.y += 0.006;
    meshRef.current.rotation.z += 0.002;

    // Bouncing animation
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time * 1.2) * 0.25;

    // Update shader time
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -size * 0.2]}>
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[gradientShader]}
      />
    </mesh>
  );
}

interface AnimatedStarProps {
  className?: string;
  size?: number;
}

export default function AnimatedStar({
  className = "",
  size = 1,
}: AnimatedStarProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#EC4899" />
        <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[3, 3, 3]} intensity={1} color="#D946EF" />
        <pointLight position={[-3, -3, 3]} intensity={0.8} color="#7C3AED" />
        <Star size={size} />
      </Canvas>
    </div>
  );
}
