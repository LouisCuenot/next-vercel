
import React, { ReactNode } from 'react'
import { BackSide, BufferGeometry } from 'three'


const BorderMaterial = (props:{
    children?:ReactNode
    geometry?:BufferGeometry
    scale?:number
}) => {

    const {children,geometry,scale} = props

    return (
        <mesh
            scale={scale||1.01}
            geometry={geometry}
        >
            {children}
            <meshBasicMaterial
                color={0x222222}
                side={BackSide}
                onBeforeCompile={(shader) => {
                    shader.vertexShader =
                /*glsl*/`
                    void main(){
                        vec3 newPosition = position + normal * 0.001;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0);
                    }
                `
                }}
            />
        </mesh>
    )
}

export default BorderMaterial