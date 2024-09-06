varying vec2 vUv;
uniform float uTopColorFactor;
uniform float uBottomColorFactor;
uniform float uTime;


void main() {

    vec3 blue = vec3(0.13,0.65,0.95);
    vec3 red = vec3(0.91,0.2,0.28);
    vec3 yellow = vec3(0.94,0.73,0.25);
    vec3 purple = vec3(0.62,0.12,0.94);

    vec3 topColor = mix(blue,red,uTopColorFactor);
    vec3 bottomColor = mix(yellow,purple,uBottomColorFactor);

    vec3 color = mix(topColor,bottomColor,1.0 - vUv.y + sin((uTime + vUv.x)*3.14) *0.1);

    gl_FragColor = vec4(color, 1.0); 
}