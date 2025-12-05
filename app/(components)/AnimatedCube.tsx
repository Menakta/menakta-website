"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface CubeProps {
  size?: number;
}

function Cube({ size = 2 }: CubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const gradientShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uBlue: { value: new THREE.Color("#0041D5") },
        uPurple: { value: new THREE.Color("#5d19f9ff") },
        uLightBlue: { value: new THREE.Color("#00364fff") },
        uIndigo: { value: new THREE.Color("#6159ffff") },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uBlue;
        uniform vec3 uPurple;
        uniform vec3 uLightBlue;
        uniform vec3 uIndigo;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          // Create diagonal gradient on each face using UV coordinates
          float diagonal = (vUv.x + vUv.y) * 0.5;

          // Animate the gradient
          float animatedDiagonal = diagonal + sin(uTime * 0.8) * 0.15;
          animatedDiagonal = clamp(animatedDiagonal, 0.0, 1.0);

          // Create smooth gradient from blue to purple
          vec3 gradient = mix(uBlue, uPurple, animatedDiagonal);

          // Add light blue highlights based on UV
          float highlight = sin(vUv.x * 3.14159) * sin(vUv.y * 3.14159);
          gradient = mix(gradient, uLightBlue, highlight * 0.3);

          // Add indigo in corners
          float corner = (1.0 - vUv.x) * (1.0 - vUv.y) + vUv.x * vUv.y;
          gradient = mix(gradient, uIndigo, corner * 0.2);

          // Fresnel edge glow
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
          gradient += fresnel * uLightBlue * 0.4;

          // Subtle specular highlight
          vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
          float spec = pow(max(dot(reflect(-lightDir, vNormal), viewDir), 0.0), 32.0);
          gradient += spec * 0.4;

          gl_FragColor = vec4(gradient, 1.0);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous rotation
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;

    // Bouncing animation
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time * 1.5) * 0.3;

    // Update shader time
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[size, size, size]}
      radius={0.15}
      smoothness={4}
    >
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[gradientShader]}
      />
    </RoundedBox>
  );
}

interface AnimatedCubeProps {
  className?: string;
  size?: number;
}

export default function AnimatedCube({
  className = "",
  size = 2,
}: AnimatedCubeProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#00B0FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[3, 3, 3]} intensity={1} color="#0041D5" />
        <pointLight position={[-3, -3, 3]} intensity={0.8} color="#A855F7" />
        <Cube size={size} />
      </Canvas>
    </div>
  );
}
