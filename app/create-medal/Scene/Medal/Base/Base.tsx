import { useAssets } from '@/app/create-medal/context/AssetsContext'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import React, { useEffect, useMemo, useState } from 'react'
import BorderMaterial from '../BorderMaterial/BorderMaterial'
import { ContoursType } from '@/app/types/MedalTypes'
import { generateTextGeometry } from './generateTextGeometry/generateTextGeometry'
import { Font, FontLoader } from 'three/examples/jsm/Addons.js'
import { BackSide, CylinderGeometry } from 'three'
import { Text } from '@react-three/drei'
import ModifiedMatcapMaterial from '../ModifiedMatcapMaterial/ModifiedMatcapMaterial'


const Base = () => {

  const { textures } = useAssets()

  const { currentDescription, currentName } = useMedal()

  const [remappedDesc, setRemappedDesc] = useState<string>('')

  //const [extrudingFont, setExtrudingFont] = useState<Font | null>(null)
//
  //useEffect(() => {
  //  const fontLoader = new FontLoader()
  //  fontLoader.load('/fonts/PassionOne_Bold.json', (font) => setExtrudingFont(font))
  //}, [])
//
//
//
  //const baseGeometry = useMemo(() => {
  //  if (!extrudingFont) {
  //    return { base: new CylinderGeometry(1, 1, 0.15, 64, 8), text: null }
  //  }
  //  return generateTextGeometry('Loulou', "", extrudingFont)
  //}, [extrudingFont])

  useEffect(()=>{
        const descriptionArray:string[] = []

        for(let i=0;i<currentDescription.length;i++){
            descriptionArray.push(currentDescription[i])
        }
        
        let lastSpaceIndex = 0
        const cutIndexes:number[] = [0]

        descriptionArray.forEach((letter,id)=>{
            if(letter === ' '){
                lastSpaceIndex = id
            }
            if(id - lastSpaceIndex >= 20){
                lastSpaceIndex = id
                cutIndexes.push(id)
            }
        })

        //console.log(cutIndexes)

        const finalDescArray:string[] = []

        cutIndexes.forEach((cut,id)=>{
            const subArray = descriptionArray.slice(cut,cutIndexes[id+1])
            if(subArray[0] === ' '){
                subArray.shift()
            }
            if(id > 0){
              subArray.unshift(' -')
            }
            finalDescArray.push(subArray.join(''))
        })

        let result = ''
       for(let i=0;i<finalDescArray.length;i++){
          result = result.concat(finalDescArray[i])
       }
       setRemappedDesc(result)
  },[currentDescription])

  
  


  return (
    <>
      <mesh
        rotation-x={Math.PI * 0.5}
      >
        <cylinderGeometry args={[1,1,0.15,64,8]}/>
        <ModifiedMatcapMaterial/>
        <BorderMaterial>
          <cylinderGeometry args={[1,1,0.15,64,8]}/>
        </BorderMaterial>
        <Text
          font='/fonts/DegularBold.otf'
          rotation-x={Math.PI * -0.5}
          maxWidth={1.2}
          textAlign='center'
          fontSize={0.1}
          position-y={0.076}
          position-z={-0.6}
          anchorY={'top'}
          outlineOpacity={1}
          outlineWidth={0.001}
        >
          <meshMatcapMaterial matcap={textures.goldText} />
          À
        </Text>
        <Text
          font='/fonts/PassionOne-Bold.ttf'
          rotation-x={Math.PI * -0.5}
          maxWidth={1.2}
          textAlign='center'
          fontSize={0.1}
          position-y={0.076}
          position-z={-0.4}
          anchorY={'top'}
          outlineOpacity={1}
          outlineWidth={0.001}
        >
          <meshMatcapMaterial matcap={textures.goldText} toneMapped={false} alphaTest={0.5} />
          {currentName.toUpperCase()}
        </Text>
        <Text
          font='/fonts/DegularBold.otf'
          rotation-x={Math.PI * -0.5}
          maxWidth={1.2}
          textAlign='center'
          fontSize={0.1}
          position-y={0.076}
          position-z={-0.2}
          anchorY={'top'}
          outlineOpacity={1}
          outlineWidth={0.001}
        >
          <meshMatcapMaterial matcap={textures.goldText} />
          POUR
        </Text>
        <Text
          font='/fonts/PassionOne-Bold.ttf'
          rotation-x={Math.PI * -0.5}
          maxWidth={1.2}
          textAlign='center'
          fontSize={0.1}
          position-y={0.076}
          anchorY={'top'}
          outlineOpacity={1}
          outlineWidth={0.001}
          
        >
          <meshMatcapMaterial matcap={textures.goldText} toneMapped={false} alphaTest={0.5} />
          {remappedDesc.toUpperCase()}
        </Text>
      </mesh>

    </>
  )
}

export default Base