import React, { useEffect, useRef } from 'react'
import './Presentoir.scss'
import { Canvas, extend, useThree } from '@react-three/fiber'
import Scene from './Scene/Scene'
import { Perf } from 'r3f-perf'
import { useMedalContext } from '../../context/MedalEditorContext'
import DesktopActionButton from './DesktopActionButtons/DesktopFlipButton'
import DesktopRandomButton from './DesktopActionButtons/DesktopRandomButton'
import DesktopFlipButton from './DesktopActionButtons/DesktopFlipButton'
import gradientVert from './Scene/GradientShader/gradient.vert'
import gradientFrag from './Scene/GradientShader/gradient.frag'
import { shaderMaterial } from '@react-three/drei'
import { Side } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      gradientMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 
        attach?: string;
        args?: any;
        side:Side
      };
    }
  }
}

const GradientMaterial = shaderMaterial(
  {

  },
  gradientVert,
  gradientFrag
)

extend({GradientMaterial})

const Presentoir = () => {



  const {isDarkMode, isMobile} = useMedalContext()

  const presentoirRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleResize = () => {
      if(!presentoirRef.current) return
      if(window.innerWidth * 0.9 < window.innerHeight * 0.5){
        presentoirRef.current.style.width = `${window.innerWidth * 0.9}px`
        presentoirRef.current.style.height = `${window.innerWidth * 0.9}px`
        presentoirRef.current.style.minWidth = `${window.innerWidth * 0.9}px`
      }else{
        presentoirRef.current.style.width = `${window.innerHeight * 0.5}px`
        presentoirRef.current.style.height = `${window.innerHeight * 0.5}px`
        presentoirRef.current.style.minWidth = `${window.innerHeight * 0.5}px`
      }
    }

    handleResize()

    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  return (
    <div
        className='presentoirContainer'
        style={{
          marginBottom:!isMobile ? `${window.innerHeight * 0.25 - 140}px` : `${Math.max(window.innerHeight * 0.25 - 206,22)}px`
        }}
    >
      {
        !isMobile &&
        <DesktopRandomButton/>
      }
      <div 
        className={`presentoir ${isDarkMode ? 'dark' : 'light'}`}
        ref={presentoirRef}
      />
      {
        !isMobile &&
        <DesktopFlipButton/>
      }
      <div className="canvasContainer">
      <Canvas
        //style={{pointerEvents:'none'}}
      >
        {
          <Perf position='top-left'  />
        }
        
        
        <Scene/>
      </Canvas>
      </div>
      
        
      
    </div>
  )
}

export default Presentoir