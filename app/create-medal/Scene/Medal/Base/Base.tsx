import { useAssets } from '@/app/create-medal/context/AssetsContext'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import React, { useEffect, useMemo, useState } from 'react'
import BorderMaterial from '../BorderMaterial/BorderMaterial'
import { ContoursType } from '@/app/types/MedalTypes'
import { generateTextGeometry } from './generateTextGeometry/generateTextGeometry'
import { Font, FontLoader } from 'three/examples/jsm/Addons.js'
import { BackSide, CylinderGeometry } from 'three'


const Base = () => {

    const {textures} = useAssets()
    const {currentContours,setCurrentContours} = useMedal()

    const [extrudingFont, setExtrudingFont] =useState<Font|null>(null)

    useEffect(()=>{
      const fontLoader = new FontLoader()
      fontLoader.load('/fonts/PassionOne_Bold.json',(font)=>setExtrudingFont(font))
    },[])



    const baseGeometry = useMemo(()=>{
      if(!extrudingFont){
        return {base:new CylinderGeometry(1,1,0.15,64,8), text:null}
      }
      return generateTextGeometry('Loulou',"Être passé en Master 2 avec une moyenne de 16.3, merci Mathieu pour le 19 en note d'entreprise",extrudingFont)
    },[extrudingFont])

  


  return (
    <>
    <mesh
        rotation-x={Math.PI*0.5}
        onClick={()=>{
          const aa:ContoursType[] = ['lauriers','stars','verticalLines','tripleLines','points']
          let currentID = aa.indexOf(currentContours)
          setCurrentContours(aa[(currentID+1)%aa.length])
        }}
        geometry={baseGeometry.base}
    >
        
        <meshMatcapMaterial 
            matcap={textures.gold}
            bumpMap={textures.medalBump}
            bumpScale={2}
        />
        <BorderMaterial geometry={baseGeometry.base} />
    </mesh>
    
    </>
  )
}

export default Base