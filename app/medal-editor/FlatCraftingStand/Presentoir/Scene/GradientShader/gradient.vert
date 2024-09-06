// Vertex Shader

varying vec2 vUv; // Pass the screen space coordinates to the fragment shader

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 clipPosition = projectionMatrix * viewPosition;

    // Convert to NDC (Normalized Device Coordinates)
    vec2 ndc = clipPosition.xy / clipPosition.w;

    // Transform NDC from [-1, 1] to [0, 1] range for UV coordinates
    vUv = ndc * 0.5 + 0.5;

    gl_Position = clipPosition;
}

