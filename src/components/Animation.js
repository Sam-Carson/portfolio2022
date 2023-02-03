import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import vertexShader from "./Shaders/VertexShader";
import fragmentShader from "./Shaders/FragmentShader";

export default function Animation() {
  // universal points ref
  const points = useRef();
  const radius = 2;

  const RandomParticles = () => {
    const distance = 1;
    const count = 15000;
    const particlesPosition = useMemo(() => {
      // create the float32 array to store the point positions.
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        // Generate random values for x, y, z
        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);
        // add each value to the array
        positions.set([x, y, z], i * 3);
      }
      return positions;
    }, [count]);

    const uniforms = useMemo(
      () => ({
        uTime: {
          value: 0.0,
        },
        uRadius: {
          value: radius,
        },
      }),
      []
    );

    useFrame((state) => {
      const { clock } = state;

      points.current.material.uniforms.uTime.value = clock.elapsedTime;
    });

    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute // bufferAttribute will allow you to set the position attribute of the geometry.
            attach="attributes-position" // this will allow the data being fed to bufferAttribute to be accessable under the position attribute.
            count={particlesPosition.length / 3} //number of particles
            array={particlesPosition}
            itemSize={3} // number of values from the particlesPosition array associated with one item/vertex. It is set to 3 becuase position is based on X, Y, Z
          />
        </bufferGeometry>
        <shaderMaterial
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    );
  };

  return (
    //Canvas takes place of all the boilerplate to get three.js running with react.
    <Wrapper>
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <OrbitControls autoRotate />
        <RandomParticles />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: inherit;

  canvas {
    height: 100vh;
  }
`;

//   const GlobeParticles = () => {
//     // gives direct access to points
//     const points = useRef();
//     return (
//       <points ref={points}>
//         <sphereGeometry args={[10, 48, 48, 15]} />
//         <pointsMaterial color="#8a2fb8" size={0.1} sizeAttenuation />
//       </points>
//     );
//   };

//   const RingParticles = () => {
//     // gives direct access to points
//     // sizeAttenuation allows farther particles to look smaller than those that are closer.
//     return (
//       <points ref={points}>
//         <ringGeometry args={[10, 48, 48, 15]} />
//         <pointsMaterial color="#ee86e4" size={0.1} sizeAttenuation />
//       </points>
//     );
//   };

//   function Planet() {
//     // referes to mesh within canvas
//     const meshRef = useRef(null);
//     useFrame(() => {
//       if (!meshRef.current) {
//         return;
//       }

//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     });

//     return (
//       <mesh ref={meshRef}>
//         <torusBufferGeometry args={[10, 3, 16, 100]} />
//         <meshStandardMaterial color="#8a2fb8" />
//       </mesh>
//     );
//   }
