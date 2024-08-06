
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Curve: THREE.Mesh
  }
  materials: {
    bottomLeather: THREE.MeshStandardMaterial
    LeatherBaked: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Cube.001Action.001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>


export function Boitier(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF('/glb/boitierLight.glb') as GLTFResult

  const { actions } = useAnimations(animations, group)

  


  useEffect(()=>{
    const specificAction = actions['Cube.001Action.001']
    if(specificAction){
        specificAction.setLoop(THREE.LoopOnce,1)
        specificAction.play()
    }
  },[actions])

    

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.bottomLeather}
          position={[0, 0.126, 0]}
          scale={[1, 0.125, 1]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.LeatherBaked}
          position={[0, 1.065, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={1.054}>
          <mesh
            name="Curve"
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials.Gold}
            position={[0, 0.728, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={0.562}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/boitierLight.glb')