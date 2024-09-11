import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import { ClouModel, InnerlinesModel, LaurierModel, StarsModel, TripleLinesModel } from '@/app/types/GLBTypes'
import { useGLTF } from '@react-three/drei'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import BorderMaterial from '../BorderMaterial/BorderMaterial'
import { useAssets } from '@/app/create-medal/context/AssetsContext'
import { Mesh } from 'three'
import gsap from 'gsap'
import ModifiedMatcapMaterial from '../ModifiedMatcapMaterial/ModifiedMatcapMaterial'

const Contours = () => {

  const { currentContours } = useMedal()
  const {textures} = useAssets()

  const lauriersRef = useRef<Mesh>(null!)
  const starsRef = useRef<Mesh>(null!)
  const innerLinesRef = useRef<Mesh>(null!)
  const tripleLinesRef = useRef<Mesh>(null!)
  const clousRef = useRef<Mesh>(null!)


  const [
    lauriers,
    stars,
    innerLines,
    tripleLines,
    clous
  ] = useGLTF([
    '/glb/contours/couronneLauriers.glb',
    '/glb/contours/stars.glb',
    '/glb/contours/innerLines.glb',
    '/glb/contours/tripleCircle.glb',
    '/glb/contours/clou.glb'
  ]) as unknown as [
      LaurierModel,
      StarsModel,
      InnerlinesModel,
      TripleLinesModel,
      ClouModel
    ]

  const geometries = {
    lauriers: lauriers.nodes.Curve.geometry,
    stars: stars.nodes.Curve011.geometry,
    innerLines:innerLines.nodes.Circle.geometry,
    tripleLines:tripleLines.nodes.Circle001.geometry,
    clous:clous.nodes.Sphere.geometry
  }


  useEffect(() => {
    const refs:MutableRefObject<Mesh>[] = [
      lauriersRef,
      starsRef, 
      innerLinesRef, 
      tripleLinesRef,
      clousRef
    ]
    let activeID = 0
    if(currentContours === "lauriers"){
      activeID = 0
    }else if(currentContours === "stars"){
      activeID = 1
    }else if(currentContours === "verticalLines"){
      activeID = 2
    }else if(currentContours === 'tripleLines'){
      activeID = 3
    }else if(currentContours === 'points'){
      activeID = 4
    }

    refs.forEach((ref, index)=>{
      gsap.killTweensOf(ref.current.position)
      if(index === activeID){
        gsap.to(ref.current.position,{
          z:0.075,
          duration:0.5,
          ease:'power2.out'
        })
      }else{
        gsap.to(ref.current.position,{
          z:0,
          duration:0.5,
          ease:'power2.in'
        })
      }
    })
  }, [currentContours])




  return (
    <>
      <mesh
        ref={lauriersRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.lauriers}
        scale={[1.4,1,1.4]}
      >
        <ModifiedMatcapMaterial/>
        <BorderMaterial scale={1} geometry={geometries.lauriers}/>
      </mesh>
      <mesh
        ref={starsRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.stars}
        scale={[1.75,1,1.75]}
      >
        <ModifiedMatcapMaterial/>
        <BorderMaterial scale={1} geometry={geometries.stars}/>
      </mesh>
      <mesh
        ref={innerLinesRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.innerLines}
        scale={[1.9,1,1.9]}
      >
        <ModifiedMatcapMaterial/>
        <BorderMaterial scale={1} geometry={geometries.innerLines}/>
      </mesh>
      <mesh
        ref={tripleLinesRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.tripleLines}
        scale={[2.3,1,2.3]}
      >
        <ModifiedMatcapMaterial/>
        <BorderMaterial scale={1} geometry={geometries.tripleLines}/>
      </mesh>
      <mesh
        ref={clousRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.clous}
        scale={[1.7,1.7,1.7]}
      >
        <ModifiedMatcapMaterial/>
        <BorderMaterial scale={1} geometry={geometries.clous}/>
      </mesh>

    </>
  )
}

export default Contours