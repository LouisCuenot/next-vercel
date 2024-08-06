'use client'

import { Addition, Base, CSGGeometryRef, Geometry, Subtraction, useCSG } from '@react-three/csg'
import React, { useEffect, useRef, useState } from 'react'



import RoundedDiggedButton from './RoundedDiggedButton/RoundedDiggedButton'
import { useThree } from '@react-three/fiber'
import { Group } from 'three'
import DraggableButtons from './DraggableButtons/DraggableButtons'

const CraftingStand = () => {

  const { viewport } = useThree()

  const buttonGroupRef = useRef<Group>(null)
  const csgRef = useRef<CSGGeometryRef | null>(null)


  const holdingStartPoint = useRef<null | number>(null)

  const defaultGroupPos = useRef<number>(0)


  const handleMouseMove = (e: PointerEvent) => {
    if (!holdingStartPoint.current || !buttonGroupRef.current || !csgRef.current) return
    const value = -(holdingStartPoint.current - e.clientX / window.innerWidth)
    buttonGroupRef.current.position.x = value * viewport.width + defaultGroupPos.current
    csgRef.current?.update()
  }

  const handlePointerDown = ({ clientX }: { clientX: number }) => {
    if (!buttonGroupRef.current) return
    holdingStartPoint.current = clientX / window.innerWidth
    defaultGroupPos.current = buttonGroupRef.current.position.x




    window.addEventListener('pointermove', handleMouseMove)
  }

  const handlePointerUp = () => {
    window.removeEventListener('pointermove', handleMouseMove)
  }





  return (
    <mesh
      position-y={0.5}
    >
      <Geometry
        useGroups
        ref={csgRef}
      >
        <Base
          position-z={-0.5}
        >
          <boxGeometry args={[viewport.width, viewport.height-1, 1]} />
          <meshStandardMaterial toneMapped={false} color={0xC0C0C0} />
        </Base>
        
       



      </Geometry>
    </mesh>
  )
}

export default CraftingStand