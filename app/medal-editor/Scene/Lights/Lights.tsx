'use client'

import { Environment } from '@react-three/drei'
import React from 'react'

const Lights = () => {
  return (
    <>
    <Environment
        preset='studio'
        environmentIntensity={0.5}
    />
    <ambientLight args={[0xFFFFFF,0.4]}/>
    <pointLight args={[0xFFFFFF,1]} position={[3,4,2]} />
    </>
  )
}

export default Lights