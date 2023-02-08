import * as THREE from "three";
import React, { Suspense, useMemo, useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import vertexShader from "./Shaders/VertexShader";
import fragmentShader from "./Shaders/FragmentShader";
import { OrbitControls } from "@react-three/drei";

export default function Animation() {
  // universal points ref
  const points = useRef();
  const radius = 2;

  const Planet = () => {
    const distance = 2;
    const count = 20000;
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
          value: 0.8,
        },
        uRadius: {
          value: radius,
        },
      }),
      []
    );

    useFrame((state) => {
      const { clock } = state;
      // adding 100 starts the animation at 100s ahead of animation start time.
      points.current.material.uniforms.uTime.value = clock.elapsedTime + 110;
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

  // const OrbitalRing = () => {

  //   return (
  //     <points ref={points}>
  //       <ringBufferGeometry args={[5, 10, 32, 32, 0, 6]}>
  //         <bufferAttribute // bufferAttribute will allow you to set the position attribute of the geometry.
  //           attach="attributes-position" // this will allow the data being fed to bufferAttribute to be accessable under the position attribute.
  //           count={particlesPosition.length / 2} //number of particles
  //           array={particlesPosition}
  //           itemSize={3} // number of values from the particlesPosition array associated with one item/vertex. It is set to 3 becuase position is based on X, Y, Z
  //         />
  //       </ringBufferGeometry>
  //       <shaderMaterial
  //         depthWrite={false}
  //         fragmentShader={fragmentShader}
  //         vertexShader={vertexShader}
  //         uniforms={uniforms}
  //       />
  //     </points>
  //   );
  // };

  return (
    //Canvas takes place of all the boilerplate to get three.js running with react.
    <Wrapper>
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <Suspense>
          <Planet />
          {/* <OrbitControls /> */}
          {/* <OrbitalRing /> */}
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: inherit;
  height: 100vh;
  width: 100vw;
`;
