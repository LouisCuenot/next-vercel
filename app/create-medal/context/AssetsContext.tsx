'use client'

import { useTexture } from '@react-three/drei'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { BufferGeometry, Texture, TextureLoader } from 'three'
import { texturesSources } from '@/app/assets/texturesSources'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'



const aContext = createContext<{
    textures:{ 
        [key: string]:Texture 
    },
    models:{
        [key:string]:BufferGeometry
    },
    setModels:(m:{
        [key:string]:BufferGeometry
    })=>void
}>({
    textures:{},
    models:{},
    setModels:()=>{}
})

const AssetsContext = (props:{
    children:ReactNode
}) => {

    const {children} = props

    const [textures, setTextures] = useState<{ 
        [key: string]:Texture 
    }>({})

    const [models, setModels] = useState<{[key:string]:BufferGeometry}>({})
    

    useEffect(()=>{
        const texturesObject:{ 
            [key: string]:Texture 
        } = {}

        const modelsObject:{ 
            [key: string]:BufferGeometry
        } = {}

        const tLoader = new TextureLoader()

        texturesSources.forEach((texture)=>{
            tLoader.load(texture.src,(loadedTexture)=>{
                texturesObject[texture.name] = loadedTexture
            })
        })

        setTextures(texturesObject)
    },[])

  return (
    <aContext.Provider
        value={{
            textures,
            models,
            setModels
        }}
    >
        {children}
    </aContext.Provider>
  )
}

export const useAssets = () => useContext(aContext)

export default AssetsContext