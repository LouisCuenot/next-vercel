'use client'

import React from 'react'
import Lights from './Lights/Lights'
import { OrbitControls } from '@react-three/drei'
import Camera from './Camera/Camera'




import Medaille from './Medaille/Medaille'

const Scene = () => {
    return (
        <>
            <Lights />
            <Camera/>     
            <Medaille/>
      
            <OrbitControls enabled={true}/>
        </>
    )
}

export default Scene