import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { useMedal } from '../../context/CreateMedalContext'
import { OrbitControls as ocType } from 'three-stdlib'


const Controls = () => {

  const {camera} = useThree()

  const {currentPage} = useMedal()

  const controlsRef = useRef<ocType>(null!)

  useEffect(()=>{
    if(currentPage === 'intro'){
      controlsRef.current.enabled = false
      controlsRef.current.setAzimuthalAngle(0)
      controlsRef.current.setPolarAngle(Math.PI*0.5)
    }else{
      controlsRef.current.enabled = true
    }
  },[currentPage])

  useEffect(()=>{
    camera.position.z = 2.5
  },[])


  return (
    <OrbitControls
        enablePan={false}
        maxDistance={10}
        minDistance={1.15}
        ref={controlsRef}
    />
  )
}

export default Controls