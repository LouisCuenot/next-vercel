import { Canvas } from '@react-three/fiber'
import React from 'react'
import Background from './Background/Background'
import Controls from './Controls/Controls'
import Medal from './Medal/Medal'
import { Perf } from 'r3f-perf'


const Scene = () => {
  return (
    <Canvas>
        <Background/>
        <Controls/>
        <Medal/>
        <Perf/>
    </Canvas>
  )
}

export default Scene