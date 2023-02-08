const vertexShader = `
 uniform float uTime;
 uniform float uRadius;

 // Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js
 mat3 rotation3dY(float angle) {
   float s = sin(angle);
   float c = cos(angle);
   return mat3(
     c, 0.0, -s,
     0.0, 1.0, 0.0,
     s, 0.0, c
   );
 }

 void main() {
   float distanceFactor = pow(uRadius - distance(position, vec3(0.3)), 1.3);
   vec3 particlePosition = position * rotation3dY(uTime * 0.5 * distanceFactor);

   // camera POV distance from center of sphere
   vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.3);
   vec4 viewPosition = viewMatrix * modelPosition;
   vec4 projectedPosition = projectionMatrix * viewPosition;

   gl_Position = projectedPosition;
  //  gl_PointSize *= 3.0;

   // Size attenuation;
   gl_PointSize *= (100.0 / - viewPosition.y);
 }
`;

export default vertexShader;

// uniform float uTime;
//  uniform float uRadius;

//  // Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js
//  mat3 rotation3dY(float angle) {
//    float s = sin(angle);
//    float c = cos(angle);
//    return mat3(
//      c, 0.0, -s,
//      0.0, 1.0, 0.0,
//      s, 0.0, c
//    );
//  }

//  void main() {
//    float distanceFactor = pow(uRadius - distance(position, vec3(0.3)), 1.9);
//    vec3 particlePosition = position * rotation3dY(uTime * 0.5 * distanceFactor);

//    // camera POV distance from center of sphere
//    vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.3);
//    vec4 viewPosition = viewMatrix * modelPosition;
//    vec4 projectedPosition = projectionMatrix * viewPosition;

//    gl_Position = projectedPosition;
//   //  gl_PointSize *= 3.0;

//    // Size attenuation;
//    gl_PointSize *= (100.0 / - viewPosition.y);
// //  }
