import React, { useEffect, useRef, useState } from 'react'
import './MobileIntro.scss'
import { useMedalContext } from '../../context/MedalEditorContext'
import IntroInput from './IntroInput/IntroInput'
import IntroButton from './IntroButton/IntroButton'
import gsap from 'gsap'
import Image from 'next/image'


const MobileIntro = () => {

  const opacDivRef = useRef<HTMLDivElement>(null)
  const podiumRef = useRef<HTMLDivElement>(null)

  const { isDarkMode,setIsAnimComplete, setCurrentDescription, setCurrentTitle, setIsIntroCompleted } = useMedalContext()
  const [currentTit, setCurrentTit] = useState('')
  const [currentDesc, setCurrentDesc] = useState('')

  useEffect(()=>{
    const animValues = {
      podium:100
    }
    const retourValue = {
      podium:0
    }
    
    gsap.to(animValues,{
      podium:0,
      duration:0.8,
      onUpdate:()=>{
        if(podiumRef.current){
          podiumRef.current.style.setProperty('transform',`translateY(${animValues.podium}%)`)
        }
      },
      onComplete:()=>{
        if(opacDivRef.current){
          opacDivRef.current.style.setProperty('opacity','1')
        }
      }
    }).play()

    gsap.to(retourValue,{
      podium:100,
      duration:0.8,
      delay:0.8,
      onUpdate:()=>{
        if(podiumRef.current){
          podiumRef.current.style.setProperty('transform',`translateY(${retourValue.podium}%)`)
        }
      },
      onComplete:()=>setIsAnimComplete(true)
    })
    .play()

  },[])

  const onComplete = () => {
    setCurrentDescription(currentDesc)
    setCurrentTitle(currentTit)
    setIsIntroCompleted(true)
  }

  return (
    <div
      className={`mobileIntro ${isDarkMode ? 'dark' : 'light'}`}
    >
      <h1
        className={`mobileIntro ${isDarkMode ? 'dark' : 'light'}`}
      >
        Tu veux une<br />médaille ?
      </h1>
      <div
        className='animationDiv'
        style={{
          opacity:0
        }}
        ref={opacDivRef}
      >
        <IntroInput
          label='Médaille décernée à'
          placeholder='Mathilde'
          onChange={(e: string) => setCurrentTit(e)}
          maxLength={20}
        />
        <IntroInput
          label='Pour'
          placeholder="Être arrivée à l'heure"
          onChange={(e: string) => setCurrentDesc(e)}
          maxLength={200}
        />
        <IntroButton
          label='Surprends-moi'
          onClick={() => { }}
        />
        <IntroButton
          label='Suivant'
          onClick={onComplete}
        />
      </div>
      <div 
        className={`podium ${isDarkMode ? 'dark' : 'light'}`}
        style={{
          transform:'translateY(100%)'
        }}
        ref={podiumRef}
      >
        <Image src="/logo.svg" alt="Le logo de Tu Veux une Médaille ?" width={300} height={300} />
      </div>
    </div>
  )
}

export default MobileIntro