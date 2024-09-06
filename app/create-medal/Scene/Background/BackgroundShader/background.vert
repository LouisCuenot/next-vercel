varying vec2 vUv; 

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 clipPosition = projectionMatrix * viewPosition;


    vec2 ndc = clipPosition.xy / clipPosition.w;


    vUv = ndc * 0.5 + 0.5;

    gl_Position = clipPosition;
}