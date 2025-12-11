"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarProps {
  size?: number;
}

function createSparkleGeometry(size: number): THREE.BufferGeometry {
  const shape = new THREE.Shape();

  // Akta/Gemini-style 4-pointed sparkle with elongated vertical points
  const topY = size * 1.2;      // Top point (elongated)
  const bottomY = -size * 1.2;  // Bottom point (elongated)
  const rightX = size * 0.7;    // Right point (shorter)
  const leftX = -size * 0.7;    // Left point (shorter)
  const centerPinch = size * 0.08; // How pinched the center is

  // Start at top point
  shape.moveTo(0, topY);

  // Curve to right point
  shape.bezierCurveTo(
    centerPinch, topY * 0.4,   // Control point 1
    rightX * 0.4, centerPinch, // Control point 2
    rightX, 0                   // End point (right)
  );

  // Curve to bottom point
  shape.bezierCurveTo(
    rightX * 0.4, -centerPinch, // Control point 1
    centerPinch, bottomY * 0.4, // Control point 2
    0, bottomY                   // End point (bottom)
  );

  // Curve to left point
  shape.bezierCurveTo(
    -centerPinch, bottomY * 0.4, // Control point 1
    leftX * 0.4, -centerPinch,   // Control point 2
    leftX, 0                      // End point (left)
  );

  // Curve back to top point
  shape.bezierCurveTo(
    leftX * 0.4, centerPinch,   // Control point 1
    -centerPinch, topY * 0.4,   // Control point 2
    0, topY                      // End point (top)
  );

  const extrudeSettings = {
    depth: size * 0.3,
    bevelEnabled: true,
    bevelThickness: size * 0.06,
    bevelSize: size * 0.06,
    bevelSegments: 4,
    curveSegments: 32,
  };

  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

function Sparkle({ size = 1 }: StarProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => createSparkleGeometry(size), [size]);

  const gradientShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColorTop: { value: new THREE.Color("#0041D5") },
        uColorMid: { value: new THREE.Color("#00B0FF") },
        uColorBottom: { value: new THREE.Color("#0041D5") },
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
        uniform vec3 uColorTop;
        uniform vec3 uColorMid;
        uniform vec3 uColorBottom;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        void main() {
          // Create vertical gradient based on Y position
          float gradientY = (vPosition.y + 1.2) / 2.4;

          // Animate the gradient subtly
          float animatedGradient = gradientY + sin(uTime * 0.5) * 0.1;
          animatedGradient = clamp(animatedGradient, 0.0, 1.0);

          // Three-color gradient: top -> mid -> bottom
          vec3 gradient;
          if (animatedGradient > 0.5) {
            gradient = mix(uColorMid, uColorTop, (animatedGradient - 0.5) * 2.0);
          } else {
            gradient = mix(uColorBottom, uColorMid, animatedGradient * 2.0);
          }

          // Fresnel edge glow for that glossy look
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.5);
          gradient += fresnel * uColorMid * 0.6;

          // Specular highlight
          vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
          float spec = pow(max(dot(reflect(-lightDir, vNormal), viewDir), 0.0), 32.0);
          gradient += spec * 0.6;

          // Add subtle depth shading
          float depth = (vPosition.z + 0.5) / 1.0;
          gradient = mix(gradient * 0.8, gradient, depth);

          gl_FragColor = vec4(gradient, 1.0);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth continuous rotation
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.z += 0.002;

    // Gentle floating animation
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time * 1.0) * 0.2;

    // Update shader time
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -size * 0.15]}>
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
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.0} color="#00B0FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#0041D5" />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#00B0FF" />
        <pointLight position={[-3, -3, 3]} intensity={0.6} color="#0041D5" />
        <Sparkle size={size} />
      </Canvas>
    </div>
  );
}
