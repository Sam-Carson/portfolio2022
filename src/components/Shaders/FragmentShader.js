const fragmentShader = `
varying vec2 vUv;

vec3 colorA = vec3(0.541,0.184,0.722);
vec3 colorB = vec3(0.522, 0.741, 0.976);

void main() {
  vec2 normalizedPixel = gl_FragCoord.xy/900.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color,1.0);
}

`;

export default fragmentShader;

// void main() {
//     gl_FragColor = vec4(0.52, 0.75, 0.98, 1.0);
//   }
