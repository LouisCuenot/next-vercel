'use client'

import React from 'react'
import Lights from './Lights/Lights'
import CraftingStand from './CraftingStand/CraftingStand'
import { OrbitControls } from '@react-three/drei'
import Camera from './Camera/Camera'
import { Boitier } from './Boitier/Boitier'
import { RoundedBoxGeometry } from 'three/examples/jsm/Addons.js'
import DraggableButtons from './CraftingStand/DraggableButtons/DraggableButtons'
import {Perf} from 'r3f-perf'

const Scene = () => {
    return (
        <>
            <Lights />
            <Camera/>
            <CraftingStand/>
            <DraggableButtons/>
            <Perf/>
            
            {
                //<Boitier rotation-x={Math.PI*0.5} position-z={0.05} />
            }
            
            <OrbitControls enabled={false}/>
        </>
    )
}

export default Scene