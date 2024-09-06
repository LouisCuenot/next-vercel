import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import { InnerlinesModel, LaurierModel, StarsModel, TripleLinesModel } from '@/app/types/GLBTypes'
import { useGLTF } from '@react-three/drei'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import BorderMaterial from '../BorderMaterial/BorderMaterial'
import { useAssets } from '@/app/create-medal/context/AssetsContext'
import { Mesh } from 'three'
import gsap from 'gsap'

const Contours = () => {

  const { currentContours } = useMedal()
  const {textures} = useAssets()

  const lauriersRef = useRef<Mesh>(null!)
  const starsRef = useRef<Mesh>(null!)
  const innerLinesRef = useRef<Mesh>(null!)
  const tripleLinesRef = useRef<Mesh>(null!)


  const [
    lauriers,
    stars,
    innerLines,
    tripleLines
  ] = useGLTF([
    '/glb/contours/couronneLauriers.glb',
    '/glb/contours/stars.glb',
    '/glb/contours/innerLines.glb',
    '/glb/contours/tripleCircle.glb'
  ]) as unknown as [
      LaurierModel,
      StarsModel,
      InnerlinesModel,
      TripleLinesModel
    ]

  const geometries = {
    lauriers: lauriers.nodes.Curve.geometry,
    stars: stars.nodes.Curve011.geometry,
    innerLines:innerLines.nodes.Circle.geometry,
    tripleLines:tripleLines.nodes.Circle001.geometry
  }


  useEffect(() => {
    const refs:MutableRefObject<Mesh>[] = [lauriersRef,starsRef, innerLinesRef, tripleLinesRef]
    let activeID = 0
    if(currentContours === "lauriers"){
      activeID = 0
    }else if(currentContours === "stars"){
      activeID = 1
    }else if(currentContours === "verticalLines"){
      activeID = 2
    }else if(currentContours === 'tripleLines'){
      activeID = 3
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
          duration:0.1,
          ease:'power1.in'
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
        <meshMatcapMaterial matcap={textures.gold}/>
        <BorderMaterial scale={1} geometry={geometries.lauriers}/>
      </mesh>
      <mesh
        ref={starsRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.stars}
        scale={[1.75,1,1.75]}
      >
        <meshMatcapMaterial matcap={textures.gold}/>
        <BorderMaterial scale={1} geometry={geometries.stars}/>
      </mesh>
      <mesh
        ref={innerLinesRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.innerLines}
        scale={[1.998,1,1.998]}
      >
        <meshMatcapMaterial matcap={textures.gold}/>
        <BorderMaterial scale={1} geometry={geometries.innerLines}/>
      </mesh>
      <mesh
        ref={tripleLinesRef}
        position-z={0.075}
        rotation-x={Math.PI*0.5}
        geometry={geometries.tripleLines}
        scale={[2.3,1,2.3]}
      >
        <meshMatcapMaterial matcap={textures.gold}/>
        <BorderMaterial scale={1} geometry={geometries.tripleLines}/>
      </mesh>

    </>
  )
}

export default Contours