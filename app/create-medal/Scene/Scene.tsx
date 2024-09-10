import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import Background from './Background/Background'
import Controls from './Controls/Controls'
import Medal from './Medal/Medal'
import { Perf } from 'r3f-perf'
import { useMedal } from '../context/CreateMedalContext'


const Scene = () => {

  const {currentPage} = useMedal()

  return (
    <Canvas gl={{antialias:true}}>
        <Background/>
        <Controls/>
        {
          //currentPage === 'configurator' &&
          <Medal/>
        }
        {
          //  <Perf/>
        }
       
    </Canvas>
  )
}

export default Scene