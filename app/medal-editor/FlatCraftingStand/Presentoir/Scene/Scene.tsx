'use client'

import React, { useEffect, useRef } from 'react'
import Lights from './Lights/Lights'
import { OrbitControls } from '@react-three/drei'
import Camera from './Camera/Camera'




import Medaille from './Medaille/Medaille'
import { useThree } from '@react-three/fiber'
import { DoubleSide } from 'three'

const Scene = () => {


    return (
        <>
            <Lights />
            <Camera />
            <Medaille />
            <mesh>
                <sphereGeometry args={[500, 32,32]} />
                <gradientMaterial side={DoubleSide} />
            </mesh>
            <OrbitControls enabled={true} />
        </>
    )
}

export default Scene