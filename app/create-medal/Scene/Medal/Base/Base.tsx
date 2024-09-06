import { useAssets } from '@/app/create-medal/context/AssetsContext'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import React from 'react'
import BorderMaterial from '../BorderMaterial/BorderMaterial'
import { ContoursType } from '@/app/types/MedalTypes'

const Base = () => {

    const {textures} = useAssets()
    const {currentContours,setCurrentContours} = useMedal()

  


  return (
    <mesh
        rotation-x={Math.PI*0.5}
        onClick={()=>{
          const aa:ContoursType[] = ['lauriers','stars','verticalLines','tripleLines']
          let currentID = aa.indexOf(currentContours)
          setCurrentContours(aa[(currentID+1)%aa.length])
        }}
    >
        <cylinderGeometry args={[1,1,0.15,64,8]}/>
        <meshMatcapMaterial 
            matcap={textures.gold}
            bumpMap={textures.medalBump}
            bumpScale={2}
        />
      <mesh

      >

        <BorderMaterial>
          <cylinderGeometry args={[1,1,0.15,32,8]}/>
        </BorderMaterial>
      </mesh>
    </mesh>
  )
}

export default Base