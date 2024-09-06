import React, { useRef } from 'react'
import backgroundVert from './BackgroundShader/background.vert'
import backgroundFrag from './BackgroundShader/background.frag'
import { shaderMaterial } from '@react-three/drei'
import { extend, ReactThreeFiber, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BackgroundMaterial = shaderMaterial(
    {
        uTime: 0,
        uTopColorFactor: 0,
        uBottomColorFactor: 0
    },
    backgroundVert,
    backgroundFrag,
    (mat) => mat!.side = THREE.BackSide
)

extend({ BackgroundMaterial })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            backgroundMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof BackgroundMaterial>
        }
    }
}

const Background = () => {

    const bgRef = useRef<THREE.ShaderMaterial>(null!)


    useFrame(({ clock }) => {
        bgRef.current.uniforms.uTopColorFactor.value = Math.sin(clock.elapsedTime * 0.4) * 0.5 + 0.5
        bgRef.current.uniforms.uBottomColorFactor.value = Math.sin(clock.elapsedTime * 0.5) * 0.5 + 0.5 + 0.4
        bgRef.current.uniforms.uTime.value = clock.elapsedTime
    })


    return (
        <mesh>
            <sphereGeometry
                args={[64,32,32]}
            />
            <backgroundMaterial
                ref={bgRef}
            />
        </mesh>
    )
}

export default Background