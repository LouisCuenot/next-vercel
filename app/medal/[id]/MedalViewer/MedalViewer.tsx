import { generateMedal } from '@/app/medal-editor/FlatCraftingStand/Presentoir/Scene/Medaille/generateMedal'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { useMedalViewerContext } from '../context/MedalViewerContext'
import { Mesh } from 'three'
import { GLTF } from 'three-stdlib'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { GeomContoursType, GeomIconsType } from '@/app/types/Medal'
import Medaille from '@/app/medal-editor/FlatCraftingStand/Presentoir/Scene/Medaille/Medaille'
import GeneratedMedal from './GeneratedMedal/GeneratedMedal'
import Lights from '@/app/medal-editor/FlatCraftingStand/Presentoir/Scene/Lights/Lights'
import Camera from '@/app/medal-editor/FlatCraftingStand/Presentoir/Scene/Camera/Camera'



const MedalViewer = () => {




  return (
    <Canvas>
        <GeneratedMedal/>
        <Lights/>
        <Camera/>
        <OrbitControls/>
    </Canvas>
  )
}

export default MedalViewer