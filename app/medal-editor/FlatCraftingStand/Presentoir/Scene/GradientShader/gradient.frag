
// Fragment Shader

varying vec2 vUv;

void main() {
    // vUv now ranges from 0.0 to 1.0 across the screen
    
    // Create a vertical gradient from top (1.0) to bottom (0.0)
    vec3 color = mix(vec3(0.94,0.73,0.25),vec3(0.91,0.2,0.28),1.0-vUv.y);

    // You can also create more complex gradients:
    // vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), vUv.x); // Horizontal blue-to-red gradient

    gl_FragColor = vec4(color, 1.0); // Final color output
}



