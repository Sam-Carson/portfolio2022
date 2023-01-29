import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";

import React from "react";

function main() {
  const canvas = document.querySelector("#c");
  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;

  const renderer = new THREE.WebGLRenderer({ canvas });
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
  const cube = new THREE.Mesh(geometry, material);

  camera.position.z = 2;
  scene.add(cube);

  renderer.render(scene, camera);
}

export default function Nova() {
  return (
    <body>
      <canvas id="c"></canvas>
    </body>
  );
}
