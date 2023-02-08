const fragmentShader = `
varying vec2 vUv;

vec3 colorA = vec3(0.541,0.184,0.722);
vec3 colorB = vec3(0.522, 0.741, 0.976);

void main() {
   vec2 normalizedPixel = gl_FragCoord.xy/900.0;
   vec3 color = mix(colorA, vec3(0.522, 0.741, 0.976), normalizedPixel.x);

    // Create a strength variable that's bigger the closer to the center of the particle the pixel is
   float strength = distance(gl_PointCoord, vec2(0.5));

   strength = 1.0 - strength;
   // Make it decrease in strength *faster* the further from the center by using a power of 3
   strength = pow(strength, 3.0);

   gl_FragColor = vec4(color,1.0);
 }
`;

export default fragmentShader;

/* CODE FOR THE ORIGINAL PLANET. Has spinning points around the surface of the sphere */
// varying vec2 vUv;

// vec3 colorA = vec3(0.541,0.184,0.722);
// vec3 colorB = vec3(0.522, 0.741, 0.976);

// void main() {
//   vec2 normalizedPixel = gl_FragCoord.xy/900.0;
//   vec3 color = mix(colorA, colorB, normalizedPixel.x);

//    // Create a strength variable that's bigger the closer to the center of the particle the pixel is
//   float strength = distance(gl_PointCoord, vec2(0.5));

//   strength = 1.0 - strength;
//   // Make it decrease in strength *faster* the further from the center by using a power of 3
//   strength = pow(strength, 3.0);

//   gl_FragColor = vec4(color,1.0);
// }
