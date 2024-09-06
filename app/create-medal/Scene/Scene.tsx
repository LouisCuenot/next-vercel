import { Canvas } from '@react-three/fiber'
import React from 'react'
import Background from './Background/Background'
import Controls from './Controls/Controls'
import Medal from './Medal/Medal'


const Scene = () => {
  return (
    <Canvas>
        <Background/>
        <Controls/>
        <Medal/>
    </Canvas>
  )
}

export default Scene