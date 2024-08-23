'use client'

import { Environment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { DirectionalLight } from 'three'


const Lights = () => {

  const {camera} = useThree()

  const directionnalRef = useRef<DirectionalLight>(null)



  return (
    <>
    <Environment 
      preset='studio'
      environmentIntensity={0.1}
      backgroundIntensity={1}
    />
    <ambientLight args={[0xFFFFFF,0]}/>
    <directionalLight
      ref={directionnalRef}
      args={[
        0xFFFFFF,
        0.05
      ]}
      position={[
        camera.position.x + 0.7,
        camera.position.y+0.7,
        camera.position.z
      ]}
    />
    </>
  )
}

export default Lights