
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import { useFrame } from '@react-three/fiber'
import React, { ReactNode, useEffect, useRef } from 'react'
import { BackSide, BufferGeometry, MathUtils, MeshBasicMaterial, Uniform } from 'three'


const BorderMaterial = (props: {
    children?: ReactNode
    geometry?: BufferGeometry
    scale?: number
}) => {

    const { children, geometry, scale } = props

    const { currentPage } = useMedal()
    const materialRef = useRef<MeshBasicMaterial>(null!)
    const opacRef = useRef(1)

    useEffect(()=>{
        if(materialRef.current){
            materialRef.current.userData = {
                uOpac:new Uniform(1)
            }
        }
     },[])

    //useEffect(() => {
    //    if (currentPage === 'configurator') {
    //        opacRef.current = 1
    //    }else if(currentPage === 'intro'){
    //        opacRef.current = 0
    //    }
    //}, [currentPage])

    //useFrame(() => {
    //    if(materialRef.current.userData.uOpac){
    //        materialRef.current.userData.uOpac.value = MathUtils.lerp(materialRef.current.userData.uOpac.value,opacRef.current,0.1)
    //    }
    //})

    return (
        <mesh
            scale={scale || 1.01}
            geometry={geometry}
        >
            {children}
            <meshBasicMaterial
                ref={materialRef}
                color={0x222222}
                side={BackSide}
                transparent={true}
                onBeforeCompile={(shader) => {
                    shader.uniforms.uOpac = new Uniform(1)
                    shader.vertexShader =/*glsl*/`
                        varying vec2 vPos;
                        void main(){
                            vec3 newPosition = position + normal * 0.001;
                            vec4 worldPosition = modelViewMatrix * vec4(newPosition,1.0);
                            vPos = worldPosition.xy;
                            gl_Position = projectionMatrix * worldPosition;
                        }
                    `
                    shader.fragmentShader = shader.fragmentShader.replace(
                        `uniform float opacity;`,
                        `uniform float opacity;
                    uniform float uOpac;
                    varying vec2 vPos;
                    `
                    )
                    shader.fragmentShader = shader.fragmentShader.replace(
                        `#include <opaque_fragment>`,
                        'gl_FragColor = vec4(outgoingLight,1.0-step((uOpac*2.5)-1.1,vPos.y));'
                    )
                    materialRef.current.userData = shader.uniforms
                }}
            />
        </mesh>
    )
}

export default BorderMaterial