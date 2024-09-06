'use client'

import { Environment } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { DirectionalLight, Vector3 } from 'three'


const Lights = () => {

  const {camera} = useThree()



  const directionnalRef = useRef<DirectionalLight>(null)



  return (
    <>
    <Environment 
      preset='studio'
      environmentIntensity={0}
      backgroundIntensity={1}
    />
    <ambientLight 
      args={[0xFFFFFF,1]}
    />
    <directionalLight
      ref={directionnalRef}
      args={[
        0xFFFFFF,
        4
      ]}
      position={[
        2,
        2,
        3
      ]}
    />
    </>
  )
}

export default Lights